import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfileCard = () => {
  return (
    <div className="flex flex-col items-center p-4 bg-white dark:bg-zinc-900 shadow rounded-xl w-80">
      <Avatar className="mb-3">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <h2 className="font-semibold">Sandeep Kumar Sahu</h2>
      <p className="text-sm text-zinc-500">
        Full-Stack Developer (Frontend & Backend)
      </p>
      <p className="text-xs mt-1 text-zinc-400">Prayagraj, Uttar Pradesh</p>
    </div>
  );
};

export default ProfileCard;

