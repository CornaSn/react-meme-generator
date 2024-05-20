import { useState } from 'react';
import FetchData from './Components/FetchData';
import Header from './Components/Header';
import Memes from './Components/Memes';
import TopBottomText from './Components/TopBottomText';
import styles from './styles.modules.scss';

export default function App() {
  const [memesArray, setMemesArray] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className="body">
      <br />
      <br />
      <Header />
      <br />
      <FetchData memesArray={memesArray} setMemesArray={setMemesArray} />
      <br />
      <br />
      <br />
      <div className="container">
        {/* Check if fetched array is loaded */}
        {memesArray.length > 0 && (
          <TopBottomText
            memesArray={memesArray}
            imageIndex={imageIndex}
            setImageIndex={setImageIndex}
          />
        )}
      </div>

      <br />
      <br />
      <Memes memesArray={memesArray} setImageIndex={setImageIndex} />
      <br />
    </div>
  );
}
