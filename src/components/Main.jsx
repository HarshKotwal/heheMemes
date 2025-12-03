import { useState } from "react";

export default function Main() {
  const [meme, setMeme] = useState({
    topText: "Shut up",
    bottomText: "Your mouth",
    imgUrl: "/meme.png",
  });

  function handleChange(event) {
    const { value, name } = event.currentTarget;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input
            type="text"
            placeholder="Shut up"
            name="topText"
            onChange={handleChange}
            value={meme.topText}
          />
        </label>
        <label>
          Bottom Text
          <input
            type="text"
            placeholder="Your mouth"
            name="bottomText"
            onChange={handleChange}
            value={meme.bottomText}
          />
        </label>
        <button>Get a new Meme image</button>
      </div>
      <div className="meme">
        <img src={meme.imgUrl} />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
}
