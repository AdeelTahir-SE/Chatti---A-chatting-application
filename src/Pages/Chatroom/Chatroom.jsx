import React, { useState, useEffect } from 'react';
import './Chatroom.css';

const Chatroom = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  // Dummy data for initial messages (replace with actual data fetch)
  useEffect(() => {
    // Simulating initial messages fetch
    setMessages([
      { id: 1, sender: 'User1', text: 'Hello!' },
      { id: 2, sender: 'User2', text: 'Hi there!' },
    ]);
  }, []);

  const sendMessage = () => {
    if (inputMessage.trim() === '') return;
    const newMessage = {
      id: messages.length + 1,
      sender: 'User1', // Replace with authenticated user's name
      text: inputMessage.trim(),
    };
    setMessages([...messages, newMessage]);
    setInputMessage('');
  };

  return (
    <div className="chatroom-container">
      <div className="chatroom-header">
        <h2>Chat Room</h2>
        <div className="participants">
          Participants: User1, User2 {/* Replace with actual participants */}
        </div>
      </div>
      <div className="messages-container">
        {messages.map((message) => (
          <div key={message.id} className={`message ${message.sender === 'User1' ? 'sent' : 'received'}`}>
            <div className="message-sender">{message.sender}</div>
            <div className="message-text">{message.text}</div>
          </div>
        ))}
      </div>
      <div className="input-container">
        <textarea
          rows="3"
          placeholder="Type your message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        ></textarea>
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatroom;
