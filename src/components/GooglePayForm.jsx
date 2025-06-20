// src/components/GooglePayForm.jsx
import React, { useState } from "react";

export default function GooglePayForm({ onBack, onPaymentSuccess }) {
  const [googleAccount, setGoogleAccount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onPaymentSuccess({
      name: "Google Pay",
      icon: "fab fa-google",
      iconColor: "text-blue-600 dark:text-blue-400",
      details: googleAccount,
      isDefault: false,
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md space-y-4"
    >
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
        Pay with Google Pay
      </h2>
      <div>
        <label className="block text-sm text-gray-700 dark:text-gray-300">
          UPI ID
        </label>
        <input
          type="email"
          required
          placeholder="example@upi.id"
          value={googleAccount}
          onChange={(e) => setGoogleAccount(e.target.value)}
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
