import { useEffect, useState } from "react";

export default function Github() {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://api.github.com/users/nirdeshbhesaniya")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setData(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="text-center text-3xl p-8">Loading...</div>;
    }

    return (
        <div className="bg-gray-800 text-white min-h-screen p-6">
            <div className="text-center m-4 bg-gray-600 p-4 text-3xl rounded-lg">
                Github Profile: {data.name || "N/A"}
            </div>
            <div className="flex flex-col items-center">
                <img
                    src={data.avatar_url}
                    alt="Avatar"
                    className="rounded-full w-48 h-48 border-4 border-gray-500"
                />
                <h2 className="text-2xl mt-4 font-bold">{data.login}</h2>
                <p className="mt-2 text-gray-300">{data.bio || "No bio available."}</p>
                <div className="grid grid-cols-2 gap-4 mt-6 text-center w-3/4">
                    <div className="bg-gray-600 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold">Followers</h3>
                        <p className="text-xl">{data.followers}</p>
                    </div>
                    <div className="bg-gray-600 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold">Following</h3>
                        <p className="text-xl">{data.following}</p>
                    </div>
                    <div className="bg-gray-600 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold">Repositories</h3>
                        <p className="text-xl">{data.public_repos}</p>
                    </div>
                    <div className="bg-gray-600 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold">Location</h3>
                        <p className="text-xl">{data.location || "N/A"}</p>
                    </div>
                </div>
                <a
                    href={data.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg"
                >
                    View Profile
                </a>
            </div>
        </div>
    );
}
