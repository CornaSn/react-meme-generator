import { useState } from 'react';

export default function TopBottomText() {
  const [topTextInput, setTopTextInput] = useState('');
  const [bottomTextInput, setBottomTextInput] = useState('');

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <label>
        Top text
        <input
          value={topTextInput}
          onChange={(event) => setTopTextInput(event.currentTarget.value)}
        />
      </label>
      <br />
      <label>
        Bottom text
        <input
          value={bottomTextInput}
          onChange={(event) => setBottomTextInput(event.currentTarget.value)}
        />
      </label>
      <br />
      <br />
      <br />
      <br />
      <br />
      <button>Download</button>
    </form>
  );
}
