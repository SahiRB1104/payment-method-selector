import React, { useEffect } from "react";

export default function PaymentSuccess({ onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4"
      aria-modal="true"
      role="dialog"
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-md w-full text-center animate-fade-in">
        <i className="fas fa-check-circle text-green-500 text-6xl mb-4"></i>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
          Payment Successful!
        </h2>
        <p className="text-gray-700 dark:text-gray-300">Thank you for your payment.</p>
      </div>
    </div>
  );
}