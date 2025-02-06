import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-5">
      <h2 className="text-lg font-semibold">Menu</h2>
      <ul className="mt-4 space-y-3">
        <li className="p-2 hover:bg-gray-700 rounded">Dashboard</li>
        <li className="p-2 hover:bg-gray-700 rounded">Subscriptions</li>
        <li className="p-2 hover:bg-gray-700 rounded">Settings</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
