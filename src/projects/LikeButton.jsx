import { useState } from "react";

function LikeButton() {

    const [liked, setLiked] = useState(false);

    function handleClick() {
        setLiked(!liked);
    }

    return (
        <button className={`${
            liked ? "bg-red-500" : "bg-gray-500" }
            text-white px-4 py-2 rounded-lg`
        } 
         onClick={handleClick}
        >
            {liked ? "❤️ Liked" : "🤍 Like"}
        </button>
    );
}

export default  LikeButton;