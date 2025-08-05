import { Navbar } from "@/components/atoms/Navebar/Navebar";
import JobAd from "@/components/organisms/homePageCards/jobAd";
import LinkedInPost from "@/components/organisms/homePageCards/linkedInPost";
import ProfileCard from "@/components/organisms/homePageCards/profileCard";

export const Home = () => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        <div className="flex flex-col space-y-4">
          <ProfileCard />
        </div>
        <div className="flex flex-col space-y-4">
          <LinkedInPost />
        </div>
        <div className="flex flex-col space-y-4">
          <JobAd />
        </div>
      </div>
    </div>
  );
};

