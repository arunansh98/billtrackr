import { useState, useEffect } from "react";
import DashboardCards from "../components/dashboard/DashboardCards";
import SpendingChart from "../components/dashboard/SpendingChart";
import ActiveSubscriptions from "../components/dashboard/ActiveSubscriptions";
import UpcomingBills from "../components/dashboard/UpcomingBills";
import ExpenseChart from "../components/dashboard/ExpenseChart";
import Sidebar from "../components/layout/SideBar";
import AddSubscriptionForm from "../components/forms/AddSubscriptionForm"; // Import Form
import Navbar from "../components/layout/NavBar";

const Dashboard = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    const storedSubscriptions = JSON.parse(
      localStorage.getItem("subscriptions")
    );
    if (storedSubscriptions) {
      setSubscriptions(storedSubscriptions);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("subscriptions", JSON.stringify(subscriptions));
  }, [subscriptions]);

  const handleAdd = (newSubscription) => {
    setSubscriptions([...subscriptions, newSubscription]);
  };

  const handleDelete = (id) => {
    setSubscriptions(subscriptions.filter((sub) => sub.id !== id));
  };

  const handleEdit = (id, updatedSubscription) => {
    setSubscriptions(
      subscriptions.map((sub) => (sub.id === id ? updatedSubscription : sub))
    );
  };

  return (
    <div className="flex h-screen">
      <Sidebar isOpen={isSideBarOpen} />
      <div className="flex-1 flex flex-col bg-gray-100">
        <Navbar toggleSidebar={() => setIsSideBarOpen(!isSideBarOpen)} />
        <div className="p-6">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
          <p className="text-gray-600">Welcome to BillTrackr!</p>
          <AddSubscriptionForm onAdd={handleAdd} />{" "}
          {/* Add Subscription Form */}
          <DashboardCards />
          <SpendingChart />
          <ActiveSubscriptions
            subscriptions={subscriptions}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
          <UpcomingBills />
          <ExpenseChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
