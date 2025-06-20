// src/components/AddNewPaymentMethods.jsx
import React from "react";

const baseCardClasses = "rounded-lg shadow-sm p-4 transition-colors duration-300";
const baseCardBorder = "border border-gray-300 dark:border-gray-600";

export default function AddNewPaymentMethods({ onBack, onSelectMethod }) {
  const methods = [
    {
      name: "Credit Card",
      description: "Pay with your credit or debit card",
      icon: "far fa-credit-card",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      name: "PayPal",
      description: "Use your PayPal account",
      icon: "far fa-envelope",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      name: "Google Pay",
      description: "Pay using Google Pay",
      icon: "fab fa-google",
      iconColor: "text-red-600 dark:text-red-400",
    },
    {
      name: "Apple Pay",
      description: "Pay using Apple Pay",
      icon: "fab fa-apple",
      iconColor: "text-gray-900 dark:text-gray-300",
    },
  ];

  return (
    <section>
      <header className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-extrabold text-[#111827] dark:text-gray-100">
          Add New Payment Method
        </h2>
        <button
          onClick={onBack}
          className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 font-semibold px-4 py-2 rounded-md shadow-sm hover:bg-gray-100 dark:hover:bg-gray-600 hoverable"
        >
          Back
        </button>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {methods.map(({ name, description, icon, iconColor }) => (
          <div
            key={name}
            className={`${baseCardClasses} ${baseCardBorder} bg-white dark:bg-gray-800 flex items-center space-x-4 hoverable p-6`}
            role="button"
            tabIndex={0}
            onClick={() => onSelectMethod(name)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onSelectMethod(name);
              }
            }}
          >
            <i className={`${icon} ${iconColor} text-3xl flex-shrink-0`}></i>
            <div>
              <p className="font-semibold text-gray-900 dark:text-gray-100">{name}</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
