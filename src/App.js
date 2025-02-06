import React from "react";
import Navbar from "./components/NavBar";
import Sidebar from "./components/SideBar";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="p-5">
          <h2 className="text-2xl font-bold">Welcome to BillTrackr</h2>
        </main>
      </div>
    </div>
  );
}

export default App;
