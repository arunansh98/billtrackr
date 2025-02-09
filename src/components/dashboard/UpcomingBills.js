const upcomingBills = [
  { id: 1, service: "Spotify", amount: 199, dueDate: "2025-02-20" },
  { id: 2, service: "Amazon Prime", amount: 999, dueDate: "2025-03-05" },
  {
    id: 3,
    service: "Adobe Creative Cloud",
    amount: 1350,
    dueDate: "2025-03-10",
  },
];

const UpcomingBills = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
      <h2 className="text-xl font-semibold mb-4">Upcoming Bill Reminders</h2>

      {upcomingBills.length > 0 ? (
        <ul>
          {upcomingBills.map((bill) => (
            <li
              key={bill.id}
              className="flex justify-between items-center p-3 border-b last:border-none"
            >
              <span className="font-medium">{bill.service}</span>
              <span className="text-gray-500">Due: {bill.dueDate}</span>
              <span className="text-blue-600 font-semibold">
                ₹{bill.amount}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No upcoming bills.</p>
      )}
    </div>
  );
};

export default UpcomingBills;
