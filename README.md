# 💳 React Payment Method Selector

A modern, responsive React-based payment method selector that allows users to:
- View and manage saved payment methods
- Add new methods like Credit Card, PayPal, Google Pay, and Apple Pay
- Toggle dark/light theme
- Enter payment details and confirm with credentials

---

## ✨ Features

- 🔘 **Dark Mode Toggle**
- 💾 **Saved Payment Method List**
- ➕ **Add New Payment Method**
- 🔐 **Secure Input Fields** (e.g., password, CVV)
- ✅ **Payment Confirmation UI**
- 📱 **Responsive Design**
- 🎨 **Modern Tailwind CSS Styling**

---

## 📸 Preview

> Add screenshots or a screen recording here

---

## 🚀 Tech Stack

- [React.js](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Transition Group](https://reactcommunity.org/react-transition-group/)
- FontAwesome Icons

---

## 📂 Project Structure

- src/
│
├── components/
│ ├── AddNewPaymentMethods.jsx
│ ├── ApplePayForm.jsx
│ ├── CreditCardForm.jsx
│ ├── GooglePayForm.jsx
│ ├── PayPalForm.jsx
│ ├── PaymentMethodList.jsx
│ └── PaymentSuccess.jsx
│
└── App.jsx


---

## 🛠️ Setup Instructions

1. **Clone the repository**
  
  - step: Clone the repository
    command: git clone https://github.com/your-username/react-payment-ui.git

  - step: Install dependencies
    command: npm install
    dependencies:
      react: "^18.2.0"
      react-dom: "^18.2.0"
      react-scripts: "5.0.1"
      react-transition-group: "^4.4.5"
      tailwindcss: "^3.3.2"
      postcss: "^8.4.24"
      autoprefixer: "^10.4.14"
      font-awesome: "^4.7.0"
    devDependencies:
      eslint: "^8.0.0"
      prettier: "^3.0.0"


  - step: Start the development server
    command: npm start

  - step: Open in browser
    url: http://localhost:3000

build_instructions:
  - step: Build for production
    command: npm run build

deployment:
  platforms:
    - Vercel
    - Netlify
    - GitHub Pages

tech_stack:
  frontend:
    - React.js
    - Tailwind CSS
    - React Transition Group
  icons:
    - FontAwesome

features:
  - Dark Mode Toggle
  - Saved Payment Method List
  - Add New Payment Method
  - Smooth Page Transitions
  - Responsive Design
