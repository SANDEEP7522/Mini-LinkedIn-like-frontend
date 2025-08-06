import { Navbar } from "@/components/atoms/Navebar/Navebar";
import LinkedInPost from "@/components/organisms/homePageCards/linkedInPost";

export const Home = () => {
  return (
    <div className="h-screen w-screen flex flex-col">
      <Navbar />
      <LinkedInPost />
    </div>
  );
};
