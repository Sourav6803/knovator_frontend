import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
import { ArrowLeft, Briefcase, MapPin, Calendar } from "lucide-react";

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchJobDetails = async () => {
    try {
      const res = await axios.get(`https://knovator-backend.onrender.com/api/jobs/${id}`);
      setJob(res.data);
    } catch (err) {
      toast.error("Failed to fetch job details.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobDetails();
  }, [id]);

  if (loading) return <Loader />;

  if (!job) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10 text-center">
        <p className="text-gray-500">No job details found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 flex items-center text-blue-600 hover:underline"
      >
        <ArrowLeft className="w-4 h-4 mr-1" />
        Back
      </button>

      <div className="bg-white p-6 shadow-md rounded-xl border border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-5">
          <img
            src={job?.image?.url}
            alt="Company Logo"
            className="w-20 h-20 rounded-md border"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{job.title}</h1>
            <p className="text-gray-600 text-sm">{job.company}</p>
            <div className="flex flex-wrap gap-4 text-sm mt-2 text-gray-600">
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
                Posted on {new Date(job.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>

        <hr className="my-4" />

        <h2 className="text-lg font-semibold text-gray-700 mb-2">Job Description</h2>
        <p className="text-gray-700 leading-relaxed">{job.description}</p>
      </div>
    </div>
  );
};

export default JobDetails;
