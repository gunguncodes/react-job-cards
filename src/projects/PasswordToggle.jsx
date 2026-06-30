import { useState } from "react";

function PasswordToggle() {
  const [showPassword, setShowPassword] = useState(false);

  function handleClick() {
    setShowPassword(!showPassword);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-80 rounded-2xl bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-center text-xl font-semibold text-gray-800">
          Password
        </h2>

        <div className="flex items-center gap-3">
          <input
            type={showPassword ? "text" : "password"}
            value="myPassword123"
            readOnly
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-black"
          />

          <button
            onClick={handleClick}
            className="rounded-lg bg-black px-4 py-2 text-white transition hover:bg-gray-800 active:scale-95"
          >
            {showPassword ? "🙈" : "👁"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PasswordToggle;