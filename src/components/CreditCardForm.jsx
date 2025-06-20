// src/components/CreditCardForm.jsx
import React, { useState } from "react";

export default function CreditCardForm({ onBack, onPaymentSuccess }) {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onPaymentSuccess({
      name: "Credit Card",
      icon: "far fa-credit-card",
      iconColor: "text-blue-600 dark:text-blue-400",
      details: `**** **** **** ${cardNumber.slice(-4)}`,
      isDefault: false,
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-4"
    >
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
        Enter Card Details
      </h2>
      <div>
        <label className="block text-sm text-gray-700 dark:text-gray-300">
          Card Number
        </label>
        <input
          type="text"
          required
          maxLength="16"
          placeholder="1234 5678 9012 3456"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-700 dark:text-gray-300">
            Expiry Date
          </label>
          <input
            type="text"
            placeholder="MM/YY"
            required
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-700 dark:text-gray-300">
            CVV
          </label>
          <input
            type="password"
            required
            placeholder="123"
            maxLength="4"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700 dark:text-white"
          />
        </div>
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