import React, { useState } from 'react';
import './App.css';

export interface IMessage {
  text: string;
  index: number;
}

const App: React.FC = () => {
  const [inputMessage, setInputMessage] = useState<string>('');
  const [messages, setMessages] = useState<IMessage[]>([]);

  const inputStyle: React.CSSProperties = {
    width: '30rem',
    height: '1rem',
    padding: '1rem',
    margin: '1rem',
    display: 'flex',
    flexDirection: 'column',
    placeContent: 'center',
  };

  const btnStyle: React.CSSProperties = {
    width: '15rem',
    padding: '1rem',
    margin: '1rem',
    display: 'flex',
    flexDirection: 'column',
    placeContent: 'center',
  };

  const msgStyle: React.CSSProperties = {
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

  const handleSubmit: (event: React.FormEvent) => void = (event: React.FormEvent) => {
    event?.preventDefault();
    setMessages([...messages, { text: inputMessage, index: messages.length}]);
    setInputMessage('');
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type='text' style={inputStyle} value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} />
        <button type='submit' style={btnStyle}>Ajouter un message</button>
      </form>

      <div style={msgStyle}>
        { messages.map(message => <p key={message.index}>{message.text}</p>) }
      </div>
    </div>
  );
}

export default App;
