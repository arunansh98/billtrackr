import { useState, useEffect } from "react";
import { saveAs } from "file-saver";
import EditSubscriptionForm from "../forms/EditSubscriptionForm";
import Papa from "papaparse";

const ActiveSubscriptions = ({ subscriptions, onDelete, onEdit }) => {
  const [editingSubscription, setEditingSubscription] = useState(null);
  const [filter, setFilter] = useState("all");
  const [sortOption, setSortOption] = useState("none");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [alerts, setAlerts] = useState([]);
  const itemsPerPage = 5;

  useEffect(() => {
    const today = new Date();
    const upcomingAlerts = subscriptions
      .filter((sub) => {
        const paymentDate = new Date(sub.nextPaymentDate);
        const daysUntilDue = (paymentDate - today) / (1000 * 60 * 60 * 24);
        return daysUntilDue > 0 && daysUntilDue <= 7; // Alert for payments within 7 days
      })
      .map(
        (sub) => `Upcoming payment for ${sub.name} on ${sub.nextPaymentDate}`
      );

    setAlerts(upcomingAlerts);
  }, [subscriptions]);

  // Filtering logic
  const filteredSubscriptions = subscriptions.filter((sub) => {
    if (filter === "all") return true;
    const today = new Date();
    const paymentDate = new Date(sub.nextPaymentDate);
    return filter === "active" ? paymentDate >= today : paymentDate < today;
  });

  // Sorting logic
  const sortedSubscriptions = [...filteredSubscriptions].sort((a, b) => {
    if (sortOption === "price-asc") return a.price - b.price;
    if (sortOption === "price-desc") return b.price - a.price;
    if (sortOption === "date-asc")
      return new Date(a.nextPaymentDate) - new Date(b.nextPaymentDate);
    if (sortOption === "date-desc")
      return new Date(b.nextPaymentDate) - new Date(a.nextPaymentDate);
    return 0;
  });

  // Search Logic
  const searchedSubscriptions = sortedSubscriptions.filter((sub) =>
    sub.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination Logic
  const totalPages = Math.ceil(searchedSubscriptions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedSubscriptions = searchedSubscriptions.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Export to CSV Function
  const exportToCSV = () => {
    const csvData = subscriptions.map((sub) => ({
      Name: sub.name,
      Price: `$${sub.price}`,
      "Billing Cycle": sub.billingCycle,
      "Next Payment Date": sub.nextPaymentDate,
    }));

    const csvString = Papa.unparse(csvData);
    const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "subscriptions.csv");
  };

  return (
    <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Active Subscriptions</h2>

      {/* Alert Messages */}
      {alerts.length > 0 && (
        <div className="mb-4 p-3 bg-yellow-100 text-yellow-800 rounded">
          {alerts.map((alert, index) => (
            <p key={index}>{alert}</p>
          ))}
        </div>
      )}

      {/* Export Button */}
      <button
        onClick={exportToCSV}
        className="bg-green-500 text-white px-4 py-2 rounded mb-4 hover:bg-green-600"
      >
        Download CSV
      </button>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search subscriptions..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setCurrentPage(1);
        }}
        className="mb-4 p-2 border rounded w-full"
      />

      {/* Subscription List */}
      {paginatedSubscriptions.length === 0 ? (
        <p className="text-gray-500">No subscriptions found.</p>
      ) : (
        <ul>
          {paginatedSubscriptions.map((sub) => (
            <li
              key={sub.id}
              className="flex justify-between items-center p-3 border-b"
            >
              <div>
                <p className="font-semibold">{sub.name}</p>
                <p className="text-gray-500">
                  ${sub.price} / {sub.billingCycle}
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500"
                  onClick={() => setEditingSubscription(sub)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  onClick={() => onDelete(sub.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Edit Subscription Form Modal */}
      {editingSubscription && (
        <EditSubscriptionForm
          subscription={editingSubscription}
          onUpdate={(updatedSub) => {
            onEdit(editingSubscription.id, updatedSub);
            setEditingSubscription(null);
          }}
          onClose={() => setEditingSubscription(null)}
        />
      )}
    </div>
  );
};

export default ActiveSubscriptions;
