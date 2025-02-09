import { Home, FileText, CreditCard, Settings } from "lucide-react";

const Sidebar = ({ isOpen }) => {
  return (
    <aside
      className={`h-screen bg-gray-900 text-white transition-all duration-300 ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      <ul className="space-y-2 p-5">
        <li className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded">
          <Home className="w-6 h-6" />
          {isOpen && <span>Dashboard</span>}
        </li>
        <li className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded">
          <FileText className="w-6 h-6" />
          {isOpen && <span>Subscriptions</span>}
        </li>
        <li className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded">
          <CreditCard className="w-6 h-6" />
          {isOpen && <span>Billing</span>}
        </li>
        <li className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded">
          <Settings className="w-6 h-6" />
          {isOpen && <span>Settings</span>}
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
