import { useEffect, useState } from "react";

function GitHubProfileFinder() {

    const[profile, setProfile] = useState(null);
    const[username, setUsername] = useState("");

    function fetchProfile() {
    fetch(`https://api.github.com/users/${username}`)
        .then((response) => response.json())
        .then((data) => {
            setProfile(data);
        });
    }

    useEffect(() => {
    fetchProfile();
    }, []);

    if (profile === null) {
    return (
        <h1 className="text-3xl font-bold text-center mt-20">
            Loading...
        </h1>
    );
    }

    function handleSubmit(event) {
        event.preventDefault();
        if(username.trim()==="") return;
        fetchProfile();
    }

    return (
    <div className="min-h-screen bg-linear-to-br from-blue-200 via-purple-200 to-pink-200 flex justify-center items-center">
        <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-md w-full text-center">
            <form onSubmit={handleSubmit}>

                <input
                 type="text"
                 placeholder="Enter GitHub username"
                 value={username}
                 onChange={(event) => setUsername(event.target.value)}
                 className="border border-gray-300 rounded-lg px-4 py-2 w-full mb-4"
                 />
                <button
                   type="submit"
                   className="bg-purple-500 text-white px-4 py-2 mb-8 rounded-lg w-full hover:bg-purple-600"
                >
                    Search
                </button>

            </form>

            <img
                src={profile.avatar_url}
                alt={profile.login}
                className="w-32 h-32 rounded-full mx-auto border-4 border-purple-300"
            />

            <h1 className="text-3xl font-bold mt-5">
                {profile.name}
            </h1>

            <p className="text-gray-500 mt-2">
                @{profile.login}
            </p>

          <div className="grid grid-cols-3 gap-4 mt-6">

              <div>
                    <h2 className="text-xl font-bold">
                       {profile.followers}
                    </h2>
                    <p className="text-gray-500">Followers</p>
               </div>

               <div>
                    <h2 className="text-xl font-bold">
                       {profile.following}
                    </h2>
                    <p className="text-gray-500">Following</p>
               </div>

              <div>
                    <h2 className="text-xl font-bold">
                      {profile.public_repos}
                    </h2>
                    <p className="text-gray-500">Repos</p>
               </div>

            </div>
             <p className="mt-6 text-gray-700">
                {profile.bio}
            </p>

            <p className="mt-2 text-gray-500">
               {profile.location}
            </p>

        </div>

    </div>
);
    
}

export default GitHubProfileFinder;