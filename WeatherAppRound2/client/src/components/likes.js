import { useState } from "react";
import heart from "./images/heart.png";
import notLiked from "./images/notLiked.png";

const LikeButton = () => {

  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  }

  return (
    <div>
      {liked ? (
        <img src={heart} className="icon" alt="favorites" onClick={handleLike} />
      ) : (<img src={notLiked} className="icon" alt="notfavorites" onClick={handleLike} />)
      }

    </div>
  )
}
export default LikeButton;