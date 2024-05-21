import './styles.modules.scss';
import { useState } from 'react';
import FetchData from './Components/FetchData';
import Header from './Components/Header';
import MemesTemplate from './Components/MemesTemplate';
import TopBottomText from './Components/TopBottomText';

export default function App() {
  const [memesArray, setMemesArray] = useState([]);
  const [imageIndex, setImageIndex] = useState(9);
  const [searchMeme, setSearchMeme] = useState('');

  return (
    <div className="body">
      <br />
      <br />
      <Header />
      <br />
      <FetchData memesArray={memesArray} setMemesArray={setMemesArray} />
      <br />2
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
      <div>
        {memesArray.length > 0 && (
          <MemesTemplate
            memesArray={memesArray}
            setImageIndex={setImageIndex}
            searchMeme={searchMeme}
            setSearchMeme={setSearchMeme}
          />
        )}
      </div>
      <br />
    </div>
  );
}
