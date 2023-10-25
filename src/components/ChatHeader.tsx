import React from "preact/compat";
import '../styles/text.style.css'
import {BiHash} from 'react-icons/bi'

function ChatHeader() {
  return (
    <>
      <div id="chat-header-container">
        <BiHash size="25" color="#636362"/>
        <h1 id="chat-header">general</h1>
      </div>
    </>
  );
}

export default ChatHeader;
