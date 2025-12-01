import { useState } from "react";

export default function Main() {
  const [meme, setMeme] = useState({
    topText: "Shut up",
    bottomText: "Your mouth",
    imgUrl: "/meme.png",
  });
  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input type="text" placeholder="Shut up" name="topText" />
        </label>
        <label>
          Bottom Text
          <input type="text" placeholder="Your mouth" name="topText" />
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
