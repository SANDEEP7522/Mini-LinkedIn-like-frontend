import jobs from "@/assets";
import { Navbar } from "@/components/atoms/Navebar/Navebar";

const JobsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Available Jobs</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div className="gradient-border rounded-xl p-[2px]" key={job.id}>
              <div className="bg-white shadow p-5 rounded-xl">
                <h2 className="text-xl font-semibold text-blue-600">
                  {job.title}
                </h2>
                <p className="text-sm text-gray-500">
                  {job.company} – {job.location}
                </p>

                <p className="mt-2 text-gray-700">
                  <strong>Type:</strong> {job.type} <br />
                  <strong>Experience:</strong> {job.experience} <br />
                  <strong>Skills:</strong> {job.skills.join(", ")} <br />
                  <strong>Posted:</strong> {job.postedAt}
                </p>

                <button className="myButton mt-4 w-full">Apply Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
