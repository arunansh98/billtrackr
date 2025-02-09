import { useState } from "react";

const AddSubscriptionForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    billingCycle: "monthly",
    nextPaymentDate: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!formData.name || !formData.price || !formData.nextPaymentDate) {
      alert("Please fill in all required fields.");
      return;
    }

    // Generate unique ID and pass data to parent
    onAdd({
      ...formData,
      id: Date.now(),
      price: parseFloat(formData.price),
    });

    // Reset form
    setFormData({
      name: "",
      price: "",
      billingCycle: "monthly",
      nextPaymentDate: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Add New Subscription</h2>

      <label className="block mb-2">
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </label>

      <label className="block mb-2">
        Price:
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </label>

      <label className="block mb-2">
        Billing Cycle:
        <select
          name="billingCycle"
          value={formData.billingCycle}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </label>

      <label className="block mb-2">
        Next Payment Date:
        <input
          type="date"
          name="nextPaymentDate"
          value={formData.nextPaymentDate}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </label>

      <button
        type="submit"
        className="mt-3 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Add Subscription
      </button>
    </form>
  );
};

export default AddSubscriptionForm;
