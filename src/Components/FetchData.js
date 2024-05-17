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

  // console.log(FetchData);

  function handleClick(event) {
    const randomImg = Math.floor(Math.random() * memes.length);
    setChangeImg(randomImg);
  }

  return (
    <>
      <div>
        <div>
          <img
            src={memes[changeImg].blank}
            alt={memes[changeImg].name}
            height={500}
            role="presentation"
            onClick={handleClick}
          />
        </div>
        <br />
        <br />
        <br />
      </div>
      <div>
        {memes.map((meme) => (
          <img key={meme[0]} src={meme.blank} alt="alt" height={100} />
        ))}
      </div>
    </>
  );
}
