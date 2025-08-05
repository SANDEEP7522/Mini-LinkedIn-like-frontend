
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CreatePostForm from "../posts/createPostForm";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";

const ProfileCard = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Optional: toggle modal state manually if needed later

  return (
    <>
      {/* ✅ Desktop version */}
      <div className="hidden md:block fixed z-10 p-4 bg-white dark:bg-zinc-800 shadow rounded-xl md:mr-10 md:ml-10 md:w-[300px]">
        <Avatar className="mb-3">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <h2 className="font-semibold">Sandeep Kumar Sahu</h2>
        <p className="text-sm text-zinc-500">
          Full-Stack Developer (Frontend & Backend)
        </p>
        <p className="text-xs mt-1 text-zinc-400">Prayagraj, Uttar Pradesh</p>

        <div className="px-4">
          <CreatePostForm />
        </div>
      </div>

      {/* ✅ Mobile FAB (Floating Action Button) */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <Dialog>
          <DialogTrigger className="p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none">
            <Plus className="w-6 h-6" />
          </DialogTrigger>
          <DialogContent className="max-w-sm mx-auto">
            <h2 className="text-lg font-semibold mb-2">Create Post</h2>
            <CreatePostForm />
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default ProfileCard;
