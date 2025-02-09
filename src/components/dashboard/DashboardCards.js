import { CreditCard, Calendar, DollarSign, PiggyBank } from "lucide-react";

const DashboardCards = () => {
  const cards = [
    {
      title: "Total Subscriptions",
      value: "12",
      icon: <CreditCard className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "Upcoming Bills",
      value: "₹4,500",
      icon: <Calendar className="w-8 h-8 text-yellow-500" />,
    },
    {
      title: "Total Spending",
      value: "₹25,000",
      icon: <DollarSign className="w-8 h-8 text-red-500" />,
    },
    {
      title: "Savings",
      value: "₹5,000",
      icon: <PiggyBank className="w-8 h-8 text-green-500" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4"
        >
          {card.icon}
          <div>
            <p className="text-gray-600">{card.title}</p>
            <h2 className="text-2xl font-semibold">{card.value}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
