import React, { useState } from 'react';
import './App.css';

const REGION_A = 'regionA';
const REGION_B = 'regionB';

const removeWhitespace = str => str.replace(/\s+/g, '');

const App = () => {
  const [inputValue, setInputValue] = useState('This is a test announcement');

  const [message, setMessage] = useState('');
  const [liveRegion, setLiveRegion] = useState(REGION_A);

  const makeAnnouncement = (newMessage) => {
    if (removeWhitespace(message) === removeWhitespace(newMessage)) {
      if (liveRegion === REGION_A) setLiveRegion(REGION_B);
      if (liveRegion === REGION_B) setLiveRegion(REGION_A);
      return;
    }
    setMessage(newMessage)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="form">
          <label>
            Message:
            <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} size="50"/>
          </label>
          <button onClick={() => makeAnnouncement(inputValue)}>Announce</button>
        </div>
        <div className="announcements">
          <div aria-live="polite" id="regionA">{liveRegion === REGION_A && message}</div>
          <div aria-live="polite" id="regionB">{liveRegion === REGION_B && message}</div>
        </div>
      </header>
    </div>
  );
}

export default App;
