import { useState } from 'react';

export default function MemesTemplate(props) {
  const [userSearch, setUserSearch] = useState('');

  function findMatchingMeme(memesData, name) {
    if (memesData.name.includes(name)) {
      return true;
    } else {
      return false;
    }
  }

  function handleClickSearch(event) {
    const searchMemeIndex = props.memesArray.findIndex((element) => {
      return findMatchingMeme(element, userSearch);
    });
    props.setImageIndex(searchMemeIndex);
  }

  return (
    <>
      <div className="search-label">
        <label>
          Meme template
          <input
            className="input-search-label"
            type="search"
            name="q"
            placeholder="Search for memes"
            aria-label="Search through meme template"
            value={userSearch}
            onChange={(event) => setUserSearch(event.currentTarget.value)}
          />
          <button
            className="button-search-label"
            type="button"
            onClick={handleClickSearch}
          >
            Search
          </button>
        </label>
      </div>
      <div>
        {props.memesArray.length > 0 &&
          props.memesArray.map((meme, index) => (
            <img
              key={meme.index}
              src={meme.blank}
              alt="meme"
              height={100}
              role="presentation"
              // Select Image from Image Template
              onClick={(event) => {
                props.setImageIndex(index);
                console.log(event);
              }}
            />
          ))}
      </div>
    </>
  );
}
