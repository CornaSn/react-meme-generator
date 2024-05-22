import axios from 'axios';
import { useState } from 'react';

export default function TopBottomText(props) {
  const [topTextInput, setTopTextInput] = useState('');
  const [bottomTextInput, setBottomTextInput] = useState('');

  // Get random meme image
  function handleClickBigImg() {
    const randomImg = Math.floor(Math.random() * props.memesArray.length);
    props.setImageIndex(randomImg);
  }

  // Download image
  async function startDownload() {
    const memeNameString = props.memesArray[props.imageIndex].id;
    const urlString = `https://api.memegen.link/images/${memeNameString}/${topTextInput}/${bottomTextInput}.png`;
    // get data using axios
    const results = await axios({
      url: urlString,
      method: 'GET',
      responseType: 'blob',
    });
    const hiddenA = document.createElement('a');
    hiddenA.href = window.URL.createObjectURL(new Blob([results.data]));
    hiddenA.setAttribute('download', 'download_image.jpg');
    document.body.appendChild(hiddenA);
    hiddenA.click();
  }

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
            src={props.memesArray[props.imageIndex].blank}
            alt={props.memesArray[props.imageIndex].name}
            data-test-id="meme-image"
            role="presentation"
            onClick={handleClickBigImg}
          />
          <h1 className="image-text top">{topTextInput}</h1>
          <h1 className="image-text bottom">{bottomTextInput}</h1>
        </div>
        <br />
        <br />
        <br />
        <button
          className="download-button"
          type="button"
          onClick={startDownload}
        >
          Download
        </button>
      </div>
    </form>
  );
}
