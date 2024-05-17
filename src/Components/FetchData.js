import { useEffect, useState } from 'react';

export default function FetchData() {
  const [memes, setMemes] = useState([]);
  const [changeImg, setChangeImg] = useState(0);

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

  console.log(FetchData);

  function handleClick(event) {
    if (memes.length > 0) {
      const randomImg = Math.floor(Math.random() * memes.length);
      setChangeImg(randomImg);
    }
  }

  return (
    <>
      <div>
        <div>
          {memes.length > 0 && (
            <img
              key={memes.id}
              src={memes[changeImg].blank}
              alt={memes[changeImg]}
              height={350}
              role="presentation"
              onClick={handleClick}
            />
          )}
        </div>
        <br />
        <br />
        <br />
      </div>
      <div>
        {memes.map((meme, index) => (
          <img key={meme.index} src={meme.blank} alt="meme" height={100} />
        ))}
      </div>
    </>
  );
}
