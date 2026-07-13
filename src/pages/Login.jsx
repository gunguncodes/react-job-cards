import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    return (
        <div className="flex justify-center items-center min-h-screen">
            <button
            onClick={() => navigate("/dashboard")}
            className="bg-purple-500 text-white px-6 py-3 rounded-lg"
            >
                Login
            </button>
        </div>
    )
}

export default Login;