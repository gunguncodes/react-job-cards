function JobCardTailwind() {
    return (
        <div className="min-h-screen bg-black flex justify-center items-center">
            <div className="bg-white p-6 rounded-2xl w-80 shadow-lg">

                <img
                  className="w-12 h-12 mb-4"
                  src="https://freepnglogo.com/images/all_img/1723808808meta-logo-transparent-PNG.png"
                  alt="Meta"                
                />
                <h2 className="text-3xl font-bold">Meta</h2>

                <p className="text-gray-500 mt-2">
                    Frontend Engineer
                </p>

                <button className="bg-black text-white px-4 py-2 rounded-lg mt-4">
                    Apply
                </button>

            </div>
        </div>
    )
}

export default JobCardTailwind;