import IMessage from "../interfaces/message/message.interface";

interface MessageProps {
  messages: IMessage[],
  room_number: number,
}

function Messages(props: MessageProps) {
  const { messages, room_number } = props;
  return (
    <>
      <div style={{ maxHeight: "25em", overflow: "auto" }}>
        <h1>{room_number}</h1>
        {messages.map((message, index) => (
          <p key={index}>{message.message}</p>
        ))}
      </div>
    </>
  );
}

export default Messages;
