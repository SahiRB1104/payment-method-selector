import React, { useState } from "react";

export default function PayPalForm({ onBack, onPaymentSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // 👈 Add password state

  function handleSubmit(e) {
    e.preventDefault();
    onPaymentSuccess({
      name: "PayPal",
      icon: "fab fa-paypal",
      iconColor: "text-blue-500 dark:text-blue-300",
      details: `${email} /••••`, // optional: hide password display
      isDefault: false,
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-4"
    >
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
        Pay with PayPal
      </h2>

      <div>
        <label className="block text-sm text-gray-700 dark:text-gray-300">
          PayPal Email
        </label>
        <input
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-700 dark:text-gray-300">
          Password
        </label>
        <input
          type="password"
          required
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
        />
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          onClick={onBack}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-500"
        >
          Back
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Pay
        </button>
      </div>
    </form>
  );
}
