import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">BillTrackr</h1>
        <div>
          <button className="bg-white text-blue-600 px-4 py-2 rounded-md">
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
