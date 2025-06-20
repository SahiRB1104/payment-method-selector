// src/components/ApplePayForm.jsx
import React, { useState } from "react";

export default function ApplePayForm({ onBack, onPaymentSuccess }) {
  const [appleId, setAppleId] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onPaymentSuccess({
      name: "Apple Pay",
      icon: "fab fa-apple",
      iconColor: "text-gray-900 dark:text-gray-300",
      details: appleId,
      isDefault: false,
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-4"
    >
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
        Pay with Apple Pay
      </h2>
      <div>
        <label className="block text-sm text-gray-700 dark:text-gray-300">
          Apple ID
        </label>
        <input
          type="email"
          required
          placeholder="you@example.com"
          value={appleId}
          onChange={(e) => setAppleId(e.target.value)}
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
          className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-900"
        >
          Pay
        </button>
      </div>
    </form>
  );
}
