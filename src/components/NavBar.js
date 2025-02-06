import { Menu } from "lucide-react";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="p-2 rounded-md hover:bg-gray-200"
      >
        <Menu className="w-6 h-6" />
      </button>

      <h1 className="text-xl font-bold">BillTrackr</h1>

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
