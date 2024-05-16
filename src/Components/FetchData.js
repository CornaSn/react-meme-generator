import { useEffect, useState } from 'react';

export default function FetchData() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    fetch('https://api.memegen.link/templates/')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const memeUrls = data.map((meme) => meme.blank);
        setMemes(memeUrls);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {memes.map((imageUrl, index) => (
        <img
          key="Meme.id"
          src={imageUrl}
          alt={`Meme ${index}`}
          height={80}
          data-test-id="meme-image"
        />
      ))}
    </div>
  );
}
