import React from "preact/compat";
import CreateMessageInput from "../../components/CreateMessageInput";
import ChatHeader from "../../components/ChatHeader";
import Messages from "../../components/Messages";
import { chatSocket } from "../../handlers/ChatHandlers";
import { chatRequestHandler } from "../../objects/chat/chat.objects";
import IMessage from "../../interfaces/message/message.interface";

interface IRawMessageDataFromHTTP {
  room_number: number,
  Message: string,
  Uid: string,
}

export default function TextChannel() {
  const [messages, setMessages] = React.useState<IMessage[]>([]);
  const [room, setRoom] = React.useState<number>(0);

  React.useEffect(() => {
    // Fetch messages when the component first renders
    fetch("http://localhost:8080/database/get-chat-messages/42")
      .then((response) => {
        if (!response.ok) {
          console.error(`HTTP Status: ${response.status}`);
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Received data:", data);

        // Convert and set the data to match the IMessage interface
        const convertedMessagesData = Object.values(data.Messages).map((item: IRawMessageDataFromHTTP) => ({
          room_number: item.room_number,
          message: item.Message,
          uid: item.Uid,
        }));
        setMessages(convertedMessagesData); // Set Previous Messages
        setRoom(data.RoomNumber); // Set Default Room Number
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []); // The empty dependency array ensures this runs only once when the component mounts

  chatSocket.onmessage = (e: MessageEvent<any>) => {
    const messageResponse = chatRequestHandler.HandleMessage(e);
    console.log("Received message: " + messageResponse)
    // Add the message to the list of messages
    setMessages((prevMessages: IMessage[]) => [
      ...prevMessages,
      messageResponse,
    ]);
  };
  return (
    <>
      <ChatHeader />
      <Messages messages={messages} room_number={room} />
      <CreateMessageInput />
    </>
  );
}
