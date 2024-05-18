import { useState } from 'react';

export default function TopBottomText() {
  const [topTextInput, setTopTextInput] = useState('');
  const [bottomTextInput, setBottomTextInput] = useState('');

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <div className="style-form">
        <label className="text-label">
          Top text
          <input
            className={'text-input'}
            placeholder="Insert top text here..."
            value={topTextInput}
            onChange={(event) => setTopTextInput(event.currentTarget.value)}
          />
        </label>
        <br />
        <label className="text-label">
          Bottom text
          <input
            className={'text-input'}
            placeholder="Insert bottom text here..."
            value={bottomTextInput}
            onChange={(event) => setBottomTextInput(event.currentTarget.value)}
          />
        </label>
        <br />
        <div className="image-wrapper">
          <h1 className="image-text top">{topTextInput}</h1>
          <div>
            <img
              className="image"
              src="https://api.memegen.link/images/aag.png"
              alt="testOverlay"
              height={500}
            />
          </div>
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
