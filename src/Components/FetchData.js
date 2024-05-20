import { useEffect } from 'react';

export default function FetchData(props) {
  // Initialize states variables

  //Fetch image data from website into an array as an object
  useEffect(() => {
    fetch('https://api.memegen.link/templates/')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        props.setMemesArray(data);
      })
      .catch((err) => console.log(err));
  }, [props.memesArray]);

  // Check fetch data
  props.memesArray.length > 0
    ? console.log(props.memesArray)
    : console.log('Not loaded');
}
