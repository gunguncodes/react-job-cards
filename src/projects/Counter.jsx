import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(prev => prev+1);
  }

  function decrease() {
    setCount(prev => prev-1);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-pink-100">
      <div className="rounded-2xl bg-red-200 p-8 shadow-lg">
        <h1 className="mb-8 text-center text-6xl font-bold text-gray-800">
          {count}
        </h1>

        <div className="flex gap-4">
          <button
            onClick={decrease}
            className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-200 text-3xl font-semibold text-gray-700 transition hover:bg-gray-300 active:scale-95"
          >
            −
          </button>

          <button
            onClick={increase}
            className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-200 text-3xl font-semibold text-gray-700 transition hover:bg-gray-800 active:scale-95"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;