import { CreditCard, Calendar, DollarSign, PiggyBank } from "lucide-react";
import { useContext } from "react";
import { Context } from "../../pages/DashBoard";
import UseGetLocalStorage from "../../hooks/UseGetLocalStorage";

const DashboardCards = () => {
  const { subscriptions } = useContext(Context);

  const storedIncome = UseGetLocalStorage("income");

  const { type, value } = storedIncome ? storedIncome : { type: "", value: "" };

  const monthlyIncome = type === "yearly" ? value / 12 : value;

  function isDateInCurrentMonth(dateString) {
    const givenDate = new Date(dateString);
    const currentDate = new Date();

    return (
      givenDate.getFullYear() === currentDate.getFullYear() &&
      givenDate.getMonth() === currentDate.getMonth()
    );
  }

  const getUpcomingBills = () => {
    return subscriptions
      ?.filter((subs) => {
        let paymentDate = new Date(subs.nextPaymentDate);
        const today = new Date();
        return (
          paymentDate >= today &&
          paymentDate <= new Date(today.setDate(today.getDate() + 7))
        );
      })
      ?.reduce((acc, curr) => acc + parseInt(curr?.price), 0);
  };

  const getTotalSpending = () => {
    return subscriptions
      ?.filter((subs) => {
        const today = new Date();
        return (
          isDateInCurrentMonth(subs.nextPaymentDate) &&
          new Date(subs.nextPaymentDate) <= today
        );
      })
      ?.reduce((acc, curr) => acc + parseInt(curr?.price), 0);
  };

  const getSavings = () => {
    return monthlyIncome - (getTotalSpending() + getUpcomingBills());
  };

  const cards = [
    {
      title: "Total Subscriptions",
      value: subscriptions?.length,
      icon: <CreditCard className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "Upcoming Bills",
      value: "₹ " + getUpcomingBills(),
      icon: <Calendar className="w-8 h-8 text-yellow-500" />,
    },
    {
      title: "Total Spending",
      value: "₹ " + getTotalSpending(),
      icon: <DollarSign className="w-8 h-8 text-red-500" />,
    },
    {
      title: "Savings",
      value: "₹ " + getSavings(),
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
