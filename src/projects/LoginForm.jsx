import { useState } from "react";

function LoginForm() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    function handleChange(event) {
        const { name,value } = event.target;

        setUser({
            ...user,
            [name]: value
        });
    }

    const [success, setSuccess] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        if(
            user.name === "" ||
            user.email === "" ||
            user.password === "" 
        ) {
            setError("Please fill in all the fields.");
            return;
        }

        setError("");
        setSuccess("Login Successful");
        console.log(user);

    }

    const[error, setError] = useState("");

    return(
        <div className="min-h-screen bg-linear-to-br from-blue-200 via-purple-200 to-pink-200 flex justify-center items-center">
            <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-md w-full">
               <form onSubmit={handleSubmit}>
                 <h1 className="text-3xl font-bold text-center mb-6">
                    Login Form
                 </h1>

                 <input
                  name="name"
                  type = "text"
                  placeholder="Enter your name"
                  value={user.name}
                  onChange={handleChange}
                  
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-4 outline-none focus:ring-2 focus:ring-purple-300"
                 />
                 <input
                  name="email"
                  type = "email"
                  placeholder="Enter your email"
                  value={user.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-4 outline-none focus:ring-2 focus:ring-purple-300"
                 />
                 <input
                  name="password"
                  type = "password"
                  placeholder="Enter your password"
                  value={user.password}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-4 outline-none focus:ring-2 focus:ring-purple-300"
                 />
                 
                 {
                    error && (
                        <p className="text-red-500 mb-4">
                            {error}
                        </p>
                    )
                 }

                 {
                    success && (
                          <p className="text-green-500 mb-4">
                              {success}
                          </p>
                    )
                 }

                 <button
                 type="submit"
                 className="w-full bg-purple-500 text-white py-3 rounded-xl hover:bg-purple-600 transition"
                 >
                    Login
                 </button>

                </form>

            </div>


        </div>
    )
}

export default LoginForm;