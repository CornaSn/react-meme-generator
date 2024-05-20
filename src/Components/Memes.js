export default function Memes(props) {
  return (
    <>
      <div>Meme Template: Choose your favorite Meme</div>
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
