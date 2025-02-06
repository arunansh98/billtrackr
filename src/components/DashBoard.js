import { useState } from "react";
import Sidebar from "./SideBar";
import Navbar from "./NavBar";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col bg-gray-100">
        {/* Navbar with toggle button */}
        <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        {/* Dashboard Content */}
        <div className="p-6">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <p className="text-gray-600">Welcome to BillTrackr!</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
