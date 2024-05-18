import { useState } from 'react';

export default function TopBottomText() {
  const [topTextInput, setTopTextInput] = useState('');
  const [bottomTextInput, setBottomTextInput] = useState('');

  return (
    <form onSubmit={(event) => event.preventDefault()} className="style-form">
      <div className="container">
        <label className="text-label">
          Top text
          <input
            className="text-input top-input"
            placeholder="Insert top text here..."
            value={topTextInput}
            onChange={(event) => setTopTextInput(event.currentTarget.value)}
          />
        </label>
        <br />
        <label className="text-label">
          Bottom text
          <input
            className="text-input bottom-input"
            placeholder="Insert bottom text here..."
            value={bottomTextInput}
            onChange={(event) => setBottomTextInput(event.currentTarget.value)}
          />
        </label>
        <br />
        <div className="image-wrapper">
          <img
            className="image"
            src="https://api.memegen.link/images/aag.png"
            alt="testOverlay"
          />
          <h1 className="image-text top">{topTextInput}</h1>
          <h1 className="image-text bottom">{bottomTextInput}</h1>
        </div>
        <br />
        <br />
        <br />
        <button className="download-button">Download</button>
      </div>
    </form>
  );
}
