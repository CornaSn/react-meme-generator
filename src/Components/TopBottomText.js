import axios from 'axios';
import { useState } from 'react';

export default function TopBottomText(props) {
  const [topTextInput, setTopTextInput] = useState('');
  const [bottomTextInput, setBottomTextInput] = useState('');
  const [downloadLink, setDownloadLink] = useState(
    'https://api.memegen.link/images/fetch/its/impossible',
  );

  // Get random meme image
  function handleClickBigImg() {
    const randomImg = Math.floor(Math.random() * props.memesArray.length);
    props.setImageIndex(randomImg);
  }

  // Update meme  link
  function onChangeMemeLinkTop(event) {
    const memeLink =
      'https://api.memegen.link/images' +
      '/' +
      props.memesArray[props.imageIndex].id +
      '/' +
      topTextInput +
      '/' +
      bottomTextInput;

    setDownloadLink(memeLink.replace(' ', '_'));
  }

  function onChangeMemeLinkBottom(event) {
    const memeLink =
      'https://api.memegen.link/images' +
      '/' +
      props.memesArray[props.imageIndex].id +
      '/' +
      topTextInput +
      '/' +
      bottomTextInput;

    setDownloadLink(memeLink.replace(' ', '_'));
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
            onChange={(event) => {
              setTopTextInput(event.currentTarget.value);
              onChangeMemeLinkTop();
            }}
          />
        </label>
        <br />
        <label className="text-label">
          Bottom text
          <input
            className="text-input bottom-input"
            placeholder="Insert bottom text here..."
            value={bottomTextInput}
            onChange={(event) => {
              setBottomTextInput(event.currentTarget.value);
              onChangeMemeLinkBottom();
            }}
          />
        </label>
        <br />
        <div className="image-wrapper">
          <img
            className="image"
            src={downloadLink}
            alt={props.memesArray[props.imageIndex].name}
            data-test-id="meme-image"
            role="presentation"
            onClick={handleClickBigImg}
          />
        </div>
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
