import { useState } from "react";
import heart from "./images/heart.png";
import notLiked from "./images/notLiked.png";

const LikeButton = () => {

  const [liked, setLiked] = useState(false);

  //Toggle Liked/Not Liked
  const handleLike = () => {
    setLiked(!liked);
  }

  return (
    <div>
      {liked ? (
        <img src={heart} className="favicon" alt="favorites" onClick={handleLike} />
      ) : (<img src={notLiked} className="favicon" alt="notfavorites" onClick={handleLike} />)
      }

    </div>
  )
}
export default LikeButton;