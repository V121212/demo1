
import { useState } from 'react'
import './App.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

// const API_KEY = "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";
// const API_KEY = "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";

const systemMessage = {
  "role": "system", "content": "Explain things like you're talking to a software professional with 2 years of experience."
}

export default function App() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm ChatGPT! Ask me anything!",
      sentTime: "just now",
      sender: "ChatGPT"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user"
    };

    const newMessages = [...messages, newMessage];
    
    setMessages(newMessages);

       // // Initial system message to determine ChatGPT functionality
       // // How it responds, how it talks, etc.

    setIsTyping(true);
    // await processMessageToChatGPT(newMessages); --------------------------------------------------------
  };

///////////////////////////////////////////--------------------------
//   async function processMessageToChatGPT(chatMessages) { // messages is an array of messages
//        // // Format messages for chatGPT API
//        // // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
//        //    // So we need to reformat
// //////////////////////////////////////////////////////////----------------------------------------------
//     let apiMessages = chatMessages.map((messageObject) => {
//       let role = "";
//       if (messageObject.sender === "ChatGPT") {
//         role = "assistant";
//       } else {
//         role = "user";
//       }
//       return { role: role, content: messageObject.message}
//     });


//          // // Get the request body set up with the model we plan to use
//          // // and the messages which we formatted above. We add a system message in the front to'
//          // // determine how we want chatGPT to act. 

//    ////////////////////////////////----------------------------------------------------
//     const apiRequestBody = {
//       "model": "gpt-3.5-turbo",
//       "messages": [
//         systemMessage,  // The system message DEFINES the logic of our chatGPT
//         ...apiMessages // The messages from our chat with ChatGPT
//       ]
//     }

//     await fetch("https://api.openai.com/v1/chat/completions", 
//     {
//       method: "POST",
//       headers: {
//         "Authorization": "Bearer " + API_KEY,
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(apiRequestBody)
//     }).then((data) => {
//       return data.json();
//     }).then((data) => {
//       console.log("ayaa");
//       console.log(data);
//       setMessages([...chatMessages, {
//         message: data.choices[0].message.content,
//         sender: "ChatGPT"
//       }]);
//       setIsTyping(false);
//     });
//   }


  return (
    <div className="App" style={{}}>
      <div style={{ position:"relative", height: "600px", width: "700px"  }}>
        <MainContainer>
          <ChatContainer>       
            <MessageList 
              scrollBehavior="smooth" 
              typingIndicator={isTyping ? <TypingIndicator content="ChatGPT is typing" /> : null}
            >
              {messages.map((message, i) => {
                console.log(message)
                return <Message key={i} model={message} />
              })}
            </MessageList>
            <MessageInput  placeholder="Type message here" onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  )
}


















// import { useState } from 'react'
// import './App.css'

// export default function App() {

//   return (
//     <div>
//        <button className="chatbot-toggler">
//          <span className="material-symbols-rounded">mode_comment</span>
//          <span className="material-symbols-outlined">close</span>
//       </button>
//     <div className="chatbot">
//       <header>
//         <h2>Chatbot</h2>
//         <span className="close-btn material-symbols-outlined">close</span>
//       </header>
//       <ul className="chatbox">
//         <li className="chat incoming">
//           <span className="material-symbols-outlined">smart_toy</span>
//           <p>Hi there 👋<br>How can I help you today?</p>
//         </li>
//       </ul>
//       <div className="chat-input">
//         <textarea placeholder="Enter a message..." spellcheck="false" required></textarea>
//         <span id="send-btn" className="material-symbols-rounded">send</span>
//       </div>
//     </div>

//     </div>
//   )
// }




// import React from "react"
// // import '../src/index.css'
// import "../src/App.css"
// function App() {
//   return (
//     <div>
//          <button className="chatbot-toggler">
//           <span className="material-symbols-rounded">mode_comment</span>
//           <span className="material-symbols-outlined">close</span>
//          </button>
//        <div className="chatbot">
//           <header>
//             <h2>Chatbot</h2>
//             <span className="close-btn material-symbols-outlined">close</span>
//           </header>
//       <ul className="chatbox">
//         <li className="chat incoming">
//           <span className="material-symbols-outlined">smart_toy</span>
//           <p>Hi there 👋 How can I help you today?</p>
//         </li>
//       </ul>
//       <div className="chat-input">
//         <textarea placeholder="Enter a message..."  required></textarea>
//         <span  className="material-symbols-rounded send-btn">send</span>
//       </div>
//     </div>
  

//     </div>
//   )
// }

// export default App
