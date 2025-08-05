import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Menu,
  User,
  Bell,
  Home,
  Users,
  Briefcase,
  MessageSquare,
  LogOut,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/context/useAuth";

export const Navbar = () => {
  const { auth } = useAuth();

  const navItems = [
    { to: "/home", icon: <Home className="h-4 w-4" />, label: "Home" },
    {
      to: "/employees",
      icon: <Users className="h-4 w-4" />,
      label: "Employees",
    },
    { to: "/jobs", icon: <Briefcase className="h-4 w-4" />, label: "Jobs" },
    {
      to: "/messages",
      icon: <MessageSquare className="h-4 w-4" />,
      label: "Messages",
    },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="px-4 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/home" className="flex items-center gap-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            alt="LinkedIn"
            className="h-6 w-6"
          />
          <span className="text-xl font-bold">Mini LinkedIn</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4">
          {navItems.map(({ to, icon, label }) => (
            <Link to={to} key={label}>
              <Button variant="ghost" className="text-sm gap-1">
                {icon} {label}
              </Button>
            </Link>
          ))}

          <div className="relative">
            <Button variant="ghost" size="icon" aria-label="Notifications">
              <Bell />
              <span className="absolute -top-1 -right-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-xs text-white">
                3
              </span>
            </Button>
          </div>

          {/* Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span className="text-sm font-medium">
                  {auth?.user?.name || "User"}
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem disabled>{auth?.user?.email}</DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/logout">
                  <LogOut className="h-4 w-4 mr-2" /> Logout
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Sheet Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <Link to="/home" className="flex items-center gap-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                    alt="LinkedIn"
                    className="h-6 w-6"
                  />
                  <span className="text-xl font-bold">Mini LinkedIn</span>
                </Link>
              </SheetHeader>
              <div className="mt-6 space-y-4">
                {navItems.map(({ to, icon, label }) => (
                  <Link to={to} key={label}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start gap-2"
                    >
                      {icon} {label}
                    </Button>
                  </Link>
                ))}
                <Link to="/logout">
                  <Button
                    variant="ghost"
                    className="w-full justify-start gap-2"
                  >
                    <LogOut className="h-4 w-4" /> Logout
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
