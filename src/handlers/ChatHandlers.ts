import { MutableRef } from "preact/hooks";
import IMessage from "../interfaces/message/message.interface";
import IRequest from "../interfaces/socket/request.interface";

export const chatSocket = new WebSocket("ws://localhost:8080/main");

export class RequestSocket {
  /**
   * Handler for the "onmessage" event of the WebSocket.
   * @param e MessageEvent
   */
  public HandleMessage = (e: MessageEvent): IMessage => {
    // Parse the message data to read the message
    const messageData = JSON.parse(e.data);

    if (messageData.type == "sent_message") {
      const content = messageData.content; // Raw Data parsed

      console.log('Sent message: ', content)
      
      // Format the message data into a IMessage object
      const messageResponse: IMessage = {
        room_number: content.room_number,
        message: content.Message,
        uid: content.Uid,
      };

      return messageResponse;
    }

    return null
  };

  /**
   *
   * @param e The input event being the entered keystroke
   * @param name The name of the input reference
   */
  public HandleName = (e, name: MutableRef<undefined>) => {
    name.current = e.target.value;
  };

  /**
   * Sending a message to the websocket connection
   * @param e Keyboard event when user clicks on enter key
   * @param name The name of the input reference
   * @param message The message request to send to websocket
   */
  public HandleSendMessageInput = (
    e: KeyboardEvent,
    name: MutableRef<undefined>,
  ) => {

    const message: IRequest = {
      type: "create_message",
      content: {
        room_number: 42,
        message: name.current,
        uid: "user_1",
      },
    };

    if (e.key === "Enter" && typeof name.current === "string") {
      console.log("message sent: ", message)
      chatSocket.send(JSON.stringify(message));
    }
  };
}

chatSocket.onopen = function () {
  console.log("Status: Connected\n");
};

chatSocket.onclose = (ev) => {
  console.log("Status: Closed\n" + ev.toString());
};
