import { Link } from "react-router-dom";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const JobCard = ({ job }) => {
  return (
    <Link
      to={`/job/${job._id}`}
      className="block border border-gray-200 rounded-xl shadow-sm p-5 hover:shadow-md transition duration-200 bg-white"
    >
      <div className="flex items-start gap-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src={job?.image?.url}
            alt={`${job.company} logo`}
            className="w-14 h-14 rounded-lg object-cover border"
          />
        </div>

        {/* Job Info */}
        <div className="flex-grow">
          <h2 className="text-lg font-semibold text-gray-900">{job.title}</h2>
          <p className="text-sm text-gray-600">{job.company}</p>

          <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <Briefcase className="w-4 h-4" />
              {job.type}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {job.location}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(job.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
