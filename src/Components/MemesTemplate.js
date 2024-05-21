import { useState } from 'react';

export default function MemesTemplate(props) {
  const [userSearch, setUserSearch] = useState('');

  function findMatchingMeme(memesData, name) {
    const memesDataLowerCase = memesData.name.toLowerCase();
    if (memesDataLowerCase.includes(name.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  }

  function handleClickSearch(event) {
    const searchMemeIndex = props.memesArray.findIndex((element) => {
      return findMatchingMeme(element, userSearch);
    });
    if (searchMemeIndex >= 0) {
      props.setImageIndex(searchMemeIndex);
    } else {
      props.setImageIndex(0);
    }
  }

  return (
    <>
      <div className="search-label">
        <label>
          Meme template
          <input
            className="input-search-label"
            type="search"
            name="searchField"
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
      <div className="Meme-template">
        {props.memesArray.length > 0 &&
          props.memesArray.map((meme, index) => (
            <img
              key={meme.index}
              src={meme.blank}
              alt="meme"
              height={200}
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
