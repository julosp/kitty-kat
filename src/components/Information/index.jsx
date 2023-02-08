import { useEffect, useState } from "react";

function Information() {
  function loadCat() {
    fetch("https://meowfacts.herokuapp.com/")
      .then((res) => res.json())
      .then((data) => setCatInfo(data.data));
  }

  const [catInfo, setCatInfo] = useState([]);
  useEffect(() => {
    loadCat();
  }, []);
  console.log(catInfo);
  return (
    <div>
      <p>{catInfo} </p>
    </div>
  );
}
export default Information;
