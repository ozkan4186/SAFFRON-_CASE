import "./App.css";
import gptLogo from "./assets/chatgpt.svg";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import sendBtn from "./assets/send.svg";
import userIcon from "./assets/user-icon.png";
import gptImgLogo from "./assets/chatgptLogo.svg";
import { useState } from "react";

function App() {
  const [messages, setMessages] = useState([
    { text: "Merhaba!", sender: "bot" },
    { text: "Nasıl yardımcı olabilirim?", sender: "bot" },
  ]);
  const [message, setMessage] = useState("");

  const handleMessageSubmit = (e) => {
    if (e.key === "Enter") {
      const newMessage = { text: message, sender: "user" };
      const botResponse = {
        text: "Merhaba, nasıl yardımcı olabilirim?",
        sender: "bot",
      };
      setMessages([...messages, newMessage, botResponse]);
      setMessage("");
    }
  };

  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="" className="logo" />
            <span className="brand">ChatGpt</span>
          </div>
          <button className="midBtn">
            <img src={addBtn} alt="" className="addBtn" />
            New Chat
          </button>
          <div className="upperSideBottom">
            <button className="query">
              <img src={msgIcon} alt="" />
              What is Programing ?
            </button>
            <br />
            <button className="query">
              <img src={msgIcon} alt="" />
              How to Use an Apı?
            </button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt="" className="listItemsImg" />
            Home
          </div>
          <div className="listItems">
            <img src={saved} alt="" className="listItemsImg" />
            Saved
          </div>
          <div className="listItems">
            <img src={rocket} alt="" className="listItemsImg" />
            Upgrade to Pro
          </div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`chat ${msg.sender === "user" ? "right" : "left"}`}
            >
              <img
                src={msg.sender === "user" ? userIcon : gptImgLogo}
                className="chatImg"
                alt=""
              />
              <p className="text">{msg.text}</p>
            </div>
          ))}
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input
              type="text"
              placeholder="Send a message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleMessageSubmit}
            />
            <button className="send" onClick={handleMessageSubmit}>
              <img src={sendBtn} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
