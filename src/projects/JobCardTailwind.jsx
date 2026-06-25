import { FaRegHeart } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

 const jobs =[
    {
      brandLogo:"https://freepnglogo.com/images/all_img/1723808808meta-logo-transparent-PNG.png",
      company: "Meta",
      role: "Frontend Engineer",
      salary: "$65/hour",
      location: "Mumbai, India"
    },
    {
      brandLogo:"https://toppng.com/uploads/preview/amazon-logo-transparent-background-116589592271nenw0vuo4.png",
      company: "Amazon",
      role: "Backend Developer",
      salary: "$70/hour",
      location: "Bangalore, India"
    },
     {
      brandLogo:"https://www.pngarts.com/files/11/Google-Logo-Icon-PNG-Photo.png",
      company: "Google",
      role: "Cloud Engineer",
      salary: "$85/hour",
      location: "Hyderabad, India"
    },
     {
    brandLogo: "https://static.vecteezy.com/system/resources/previews/019/017/459/large_2x/microsoft-transparent-logo-free-png.png",
    company: "Microsoft",
    role: "Data Scientist",
    salary: "$90/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://i.pinimg.com/originals/38/5d/86/385d8697caa605fa7ea766753b94729c.jpg",
    company: "Apple",
    role: "iOS Developer",
    salary: "$95/hour",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://e7.pngegg.com/pngimages/335/855/png-clipart-netflix-logo-thumbnail-tech-companies.png",
    company: "Netflix",
    role: "Machine Learning Engineer",
    salary: "$110/hour",
    location: "Remote"
  },
  {
    brandLogo: "https://e7.pngegg.com/pngimages/732/884/png-clipart-tesla-logo-transport-cars.png",
    company: "Tesla",
    role: "Software Engineer",
    salary: "$100/hour",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://toppng.com/uploads/preview/ibm-logo-png-free-11659996009tahlknxzfa.png",
    company: "IBM",
    role: "AI Research Engineer",
    salary: "$80/hour",
    location: "Noida, India"
  },
  {
    brandLogo: "https://www.pngmart.com/files/23/Oracle-Logo-PNG-Image.png",
    company: "Oracle",
    role: "Full Stack Developer",
    salary: "$88/hour",
    location: "Gurugram, India"
  },
  {
    brandLogo: "https://www.pngall.com/wp-content/uploads/13/Adobe-Logo-PNG-File.png",
    company: "Adobe",
    role: "Frontend Developer",
    salary: "$92/hour",
    location: "Remote"
  },
   {
      brandLogo:"https://freepnglogo.com/images/all_img/1723808808meta-logo-transparent-PNG.png",
      company: "Meta",
      role: "Frontend Engineer",
      salary: "$65/hour",
      location: "Mumbai, India"
    },
    {
      brandLogo:"https://toppng.com/uploads/preview/amazon-logo-transparent-background-116589592271nenw0vuo4.png",
      company: "Amazon",
      role: "Backend Developer",
      salary: "$70/hour",
      location: "Bangalore, India"
    }
  ];


function JobCardTailwind() {
    return (
        <div className="min-h-screen bg-black p-8">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
                {jobs.map((job,index) => {
                    return (
                        <div
                        key = {index}
                        className="bg-white p-6 rounded-2xl shadow-lg"
                        >            
                <div className="flex justify-between ">
                    <img
                  className="w-12 h-12 mb-4"
                  src={job.brandLogo}
                  alt="Meta"                
                />

                <button className="flex items-center gap-2 bg-gray-100 p-1.5 rounded-lg">
                    <FaRegHeart />
                    <span>Save</span>
                </button>
                </div>

                <div className="flex gap-3 text-sm mt-2">
                    <span className=" bg-gray-100 px-3 py-1 rounded-md">Full Time</span>
                    <span className=" bg-gray-100 px-3 py-1 rounded-md">Junior Level</span>
                </div>
 
                <h2 className="text-3xl font-bold">{job.company}</h2>

                <p className="text-gray-500 mt-1 text-lg">
                    {job.role}
                </p>

                <div className="">
                    <p className="text-xl font-medium mt-1">{job.salary}</p>
                    <p className="flex items-center gap-2 mt-1"><FaLocationDot />{job.location}</p>
                </div>

                <button className="bg-black text-white px-4 py-2 rounded-lg mt-4 w-full">
                    Apply
                </button>

                </div>      
             
                )
                })}
            </div>
        </div>
    )
}

export default JobCardTailwind;