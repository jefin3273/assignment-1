import { Menu, Search, Bell } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-blue-600 text-white p-4 z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Menu className="cursor-pointer" />
          <h1 className="text-2xl font-bold">90_North</h1>
        </div>
        <div className="flex items-center space-x-4">
          <Search className="cursor-pointer" />
          <Bell className="cursor-pointer" />
          <div className="w-8 h-8 bg-white rounded-full"></div>
        </div>
      </div>
    </nav>
  );
}
