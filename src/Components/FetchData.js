import { useEffect, useState } from 'react';

export default function FetchData() {
  const [memes, setMemes] = useState([]);

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

  return (
    <div>
      {memes.map((meme) => (
        <img key={meme.id} src={meme.blank} alt="alt" width={100} />
      ))}
    </div>
  );
}
