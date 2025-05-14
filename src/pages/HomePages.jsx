// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import JobCard from "../components/JobCard";
// import { toast } from "react-toastify";
// import Loader from "../components/Loader";
// import Navbar from "../components/Navbar";
// import { SERVER } from "../server";

// const HomePage = () => {
//   const [jobs, setJobs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchJobs = async () => {
//     try {
//       const res = await axios.get(`${SERVER}/api/jobs`);
//       setJobs(res.data);
//     } catch (error) {
//       toast.error("Failed to fetch jobs. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchJobs();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />

//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {/* Page Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
//             Latest Job Listings
//           </h1>
//           <p className="text-lg text-gray-600">
//             Find your dream job today
//           </p>
//         </div>

//         {/* Content Area */}
//         {loading ? (
//           <div className="flex justify-center items-center h-64">
//             <Loader />
//           </div>
//         ) : jobs.length === 0 ? (
//           <div className="text-center py-12">
//             <p className="text-gray-500 text-lg">No jobs found. Please check back later.</p>
//           </div>
//         ) : (
//           <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//             {jobs.map((job) => (
//               <JobCard key={job._id} job={job} />
//             ))}
//           </div>
//         )}
//       </main>

//       {/* Footer (optional) */}
//       <footer className="bg-white border-t border-gray-200 py-6 mt-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
//           © {new Date().getFullYear()} Job Board. All rights reserved.
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default HomePage;

import React, { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "../components/JobCard";
import { toast } from "react-toastify";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import { SERVER } from "../server";
import { Search } from "lucide-react";

const HomePage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchJobs = async () => {
    try {
      const res = await axios.get(`${SERVER}/api/jobs`);
      setJobs(res.data);
    } catch (error) {
      toast.error("Failed to fetch jobs. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // Filter jobs based on search term
  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Latest Job Listings
          </h1>
          <p className="text-lg text-gray-600">Find your dream job today</p>
        </div>

        {/* Search Bar */}
        {/* <div className="mb-8 flex justify-end">
          <input
            type="text"
            placeholder="Search by job title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div> */}

        <div className="mb-8 flex justify-end">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search />
            </div>
            <input
              type="text"
              placeholder="Search by job title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Content Area */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader />
          </div>
        ) : filteredJobs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No jobs found. Please check back later.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 mt-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredJobs.map((job) => (
              <JobCard key={job._id} job={job} />
            ))}
          </div>
        )}
      </main>

      {/* Footer (optional) */}
      <footer className="bg-white border-t border-gray-200 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Job Board. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
