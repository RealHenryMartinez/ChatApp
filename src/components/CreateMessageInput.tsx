import { IconContext } from "react-icons";
import "../styles/input.style.css";
import { AiFillPlusCircle, AiOutlineFileGif } from "react-icons/ai";
import React from "preact/compat";
import IRequest from "../interfaces/socket/request.interface";
import { chatRequestHandler } from "../objects/chat/chat.objects";

// Icons used for the application icons in message tab
const defaultIconStyles: IconContext = {
  color: "#99aab5",
  size: "30",
  style: {
    marginInline: "2%",
  },
};

// Component for creating messages from input
function CreateMessageInput() {
  const name = React.useRef(); // Reference the input
  
 

  return (
    // Use the default styles for all icons in the component
    <IconContext.Provider value={defaultIconStyles}>
      <div id="chat-input-container">
        {/* Image Button */}
        <AiFillPlusCircle styles={defaultIconStyles} />

        {/* Chat Input */}
        <input
          placeholder={"Message #general"}
          className="main-chat-input"
          content=""
          ref={name}
          onInputCapture={(e) => chatRequestHandler.HandleName(e, name)}
          onKeyUp={(e) => chatRequestHandler.HandleSendMessageInput(e, name)}
        />

        {/* Icon list: Gif, Sticker, Emoji */}
        <div id="icon-list">
          <AiOutlineFileGif styles={defaultIconStyles} />
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default CreateMessageInput;
