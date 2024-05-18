import { useEffect, useState } from 'react';

export default function FetchData() {
  // Initialize states variables
  const [memes, setMemes] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);

  //Fetch image data from website into an array as an object
  useEffect(() => {
    fetch('https://api.memegen.link/templates/')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMemes(data);
      })
      .catch((err) => console.log(err));
  }, []);

  // Check fetch data
  memes.length > 0 ? console.log(memes) : console.log('Not loaded');

  //Get random meme image
  function handleClickBigImg(event) {
    const randomImg = Math.floor(Math.random() * memes.length);
    setImageIndex(randomImg);
  }

  return (
    <>
      <div>
        <div>
          {/* Check if fetched array is loaded */}
          {memes.length > 0 && (
            <img
              key={memes[imageIndex].id}
              src={memes[imageIndex].blank}
              alt={memes[imageIndex].name}
              height={350}
              role="presentation"
              onClick={handleClickBigImg}
            />
          )}
        </div>
        <br />
        <br />
        <br />
      </div>
      <div>Meme Template: Choose your favorite Meme</div>
      <div>
        {memes.length > 0 &&
          memes.map((meme, index) => (
            <img
              key={meme.index}
              src={meme.blank}
              alt="meme"
              height={100}
              role="presentation"
              // Select Image from Image Template
              onClick={(event) => {
                setImageIndex(index);
                console.log(event);
              }}
            />
          ))}
      </div>
    </>
  );
}
