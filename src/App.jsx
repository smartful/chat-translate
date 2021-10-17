import React, { useState } from 'react';
import translate from "translate";
import './App.css';

const App = () => {
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const inputStyle = {
    width: '30rem',
    height: '1rem',
    padding: '1rem',
    margin: '1rem',
    display: 'flex',
    flexDirection: 'column',
    placeContent: 'center',
  };

  const btnStyle = {
    width: '14rem',
    padding: '1rem',
    margin: '1rem',
    display: 'flex',
    flexDirection: 'column',
    placeContent: 'center',
  };

  const msgStyle = {
    backgroundColor: '#222299',
    color: 'white',
    width: '30rem',
    padding: '1rem',
    margin: '1rem',
    display: 'flex',
    flexDirection: 'column',
    placeContent: 'center',
    borderRadius: '2rem',
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessages([
      ...messages,
      {
        text: inputMessage,
        index: messages.length
      }
    ]);
    setInputMessage('');
  }

  const toTranslate = async () => {
    const translatedMessages = await Promise.all(messages.map(async (element) => {
      const translatedText = await translate(element.text, { from: 'fr', to: "en" });
      const newMessage = {
        text: translatedText,
        index: element.index,
      };
      return newMessage;
    }));
    setMessages(translatedMessages);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type='text' style={inputStyle} value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} />
        <button type='submit' style={btnStyle}>Ajouter un message</button>
        <button style={btnStyle} onClick={toTranslate}>Traduire en anglais</button>
      </form>

      <div style={msgStyle}>
        { messages.map(message => <p key={message.index}>{message.text}</p>) }
      </div>
    </div>
  );
}

export default App;
