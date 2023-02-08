import { useEffect, useState } from "react";

function Card() {
  function loadCat() {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10")
      .then((res) => res.json())
      .then((data) => setCatImg(data[0].url));
  }

  const [catImg, setCatImg] = useState([]);
  useEffect(() => {
    loadCat();
  }, []);

  return (
    <div>
      <h1>un chat</h1>
      <img src={catImg} alt="c un chat" />
      <button onClick={loadCat}> click</button>
    </div>
  );
}
export default Card;
