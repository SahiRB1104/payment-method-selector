import React from "react";

const baseCardClasses = "rounded-lg shadow-sm p-4 transition-colors duration-300";
const baseCardBorder = "border border-gray-300 dark:border-gray-600";

export default function PaymentMethodList({ savedMethods, onAddNew }) {
  return (
    <section>
      <h2 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
        Saved Payment Methods
      </h2>

      {savedMethods.length === 0 && (
        <p className="text-gray-600 dark:text-gray-400 mb-4">No saved payment methods.</p>
      )}

      {savedMethods.map((method, idx) => (
        <div
          key={idx}
          className={`${baseCardClasses} ${baseCardBorder} bg-white dark:bg-gray-800 mb-4 flex justify-between items-center hoverable`}
          role="region"
          aria-label={`${method.name} payment method`}
        >
          <div className="flex items-center space-x-3">
            <i className={`${method.icon} ${method.iconColor} text-xl`}></i>
            <div>
              <p className="font-semibold text-gray-900 dark:text-gray-100">
                {method.name}{" "}
                {method.isDefault && (
                  <span className="ml-2 inline-block bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-0.5 rounded-md">
                    Default
                  </span>
                )}
              </p>
              {method.details && (
                <p className="text-gray-600 dark:text-gray-400 text-sm">{method.details}</p>
              )}
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button
              className="text-blue-600 hover:text-blue-800 dark:hover:text-blue-400 transition-colors duration-200"
              aria-label={`Pay with ${method.name}`}
              onClick={method.onPay}
              type="button"
            >
              <i className="fas fa-money-bill-wave mr-1"></i> Pay
            </button>
            <button
              aria-label={`Delete ${method.name} payment method`}
              className="text-red-500 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200"
              type="button"
              onClick={() => method.onDelete(idx)}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
      ))}

      <div className="flex justify-center mt-8">
        <button
          className="bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 font-semibold px-5 py-3 rounded-md shadow-sm flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 hoverable"
          type="button"
          onClick={onAddNew}
        >
          <i className="fas fa-plus"></i>
          <span>Add New Payment Method</span>
        </button>
      </div>
    </section>
  );
}
