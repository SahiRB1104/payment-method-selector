// src/App.jsx
import React, { useState, useEffect, useRef } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import PaymentMethodList from "./components/PaymentMethodList";
import AddNewPaymentMethods from "./components/AddNewPaymentMethods";
import CreditCardForm from "./components/CreditCardForm";
import PayPalForm from "./components/PayPalForm";
import GooglePayForm from "./components/GooglePayForm";
import ApplePayForm from "./components/ApplePayForm";
import PaymentSuccess from "./components/PaymentSuccess";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [page, setPage] = useState("list");
  const [savedMethods, setSavedMethods] = useState([
    {
      name: "Visa",
      icon: "far fa-credit-card",
      iconColor: "text-blue-600 dark:text-blue-400",
      details: "****1234 Exp: 12/25",
      isDefault: true,
      onDelete: () => {},
    },
    {
      name: "PayPal",
      icon: "far fa-envelope",
      iconColor: "text-blue-600 dark:text-blue-400",
      details: "john.doe@email.com",
      isDefault: false,
      onDelete: () => {},
    },
  ]);
  const [showSuccess, setShowSuccess] = useState(false);

  const nodeRef = useRef(null); // 👈 Required for transition

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  function handleDelete(index) {
    setSavedMethods((prev) => prev.filter((_, i) => i !== index));
  }

  function handlePay(name) {
    switch (name) {
      case "Credit Card":
      case "Visa":
        setPage("creditCardForm");
        break;
      case "PayPal":
        setPage("paypalForm");
        break;
      case "Google Pay":
        setPage("gpayForm");
        break;
      case "Apple Pay":
        setPage("applePayForm");
        break;
      default:
        alert(`You selected ${name}. Form not implemented.`);
    }
  }

  const savedMethodsWithHandlers = savedMethods.map((m, i) => ({
    ...m,
    onDelete: () => handleDelete(i),
    onPay: () => handlePay(m.name),
    payIcon: "fas fa-arrow-right-to-bracket", // updated pay button icon
  }));

  function handlePaymentSuccess(newMethod) {
    setSavedMethods((prev) => [...prev, newMethod]);
    setShowSuccess(true);
    setPage("list");
  }

  const renderPage = () => {
    switch (page) {
      case "list":
        return (
          <PaymentMethodList
            savedMethods={savedMethodsWithHandlers}
            onAddNew={() => setPage("addNew")}
          />
        );
      case "addNew":
        return (
          <AddNewPaymentMethods
            onBack={() => setPage("list")}
            onSelectMethod={handlePay}
          />
        );
      case "creditCardForm":
        return (
          <CreditCardForm
            onBack={() => setPage("addNew")}
            onPaymentSuccess={handlePaymentSuccess}
          />
        );
      case "paypalForm":
        return (
          <PayPalForm
            onBack={() => setPage("addNew")}
            onPaymentSuccess={handlePaymentSuccess}
          />
        );
      case "gpayForm":
        return (
          <GooglePayForm
            onBack={() => setPage("addNew")}
            onPaymentSuccess={handlePaymentSuccess}
          />
        );
      case "applePayForm":
        return (
          <ApplePayForm
            onBack={() => setPage("addNew")}
            onPaymentSuccess={handlePaymentSuccess}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-5xl mx-auto p-6">
        <header className="flex justify-between items-center mb-6">
          <div className="text-center flex-1">
            <h1 className="text-3xl font-extrabold text-[#111827] dark:text-gray-100">
              Choose Your Payment Method
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              Select your preferred way to pay securely
            </p>
          </div>
          <button
            aria-label="Toggle theme"
            className="ml-6 bg-white dark:bg-gray-700 p-3 rounded-md shadow-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 hoverable"
            onClick={() => setDarkMode(!darkMode)}
            type="button"
          >
            <i className={darkMode ? "fas fa-moon" : "fas fa-sun"}></i>
          </button>
        </header>

        <SwitchTransition mode="out-in">
          <CSSTransition
            key={page}
            timeout={300}
            classNames="fade"
            nodeRef={nodeRef}
            unmountOnExit
          >
            <div ref={nodeRef}>{renderPage()}</div>
          </CSSTransition>
        </SwitchTransition>

        {showSuccess && <PaymentSuccess onClose={() => setShowSuccess(false)} />}
      </div>
    </div>
  );
}