import { useState } from "react";

function LikeButton() {
  const [liked, setLiked] = useState(false);

  function handleClick() {
    setLiked(!liked);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-pink-50">
      <button
        onClick={handleClick}
        className={`flex items-center gap-2 rounded-full px-6 py-3 text-lg font-medium shadow-md transition-all duration-300 active:scale-95 ${
          liked
            ? "bg-pink-500 text-white hover:bg-pink-600"
            : "bg-white text-pink-500 border border-pink-200 hover:bg-pink-100"
        }`}
      >
        <span className="text-xl">
          {liked ? "❤️" : "🤍"}
        </span>
        {liked ? "Liked" : "Like"}
      </button>
    </div>
  );
}

export default LikeButton;