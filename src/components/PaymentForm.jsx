import React, { useState } from 'react';
import { toast } from 'react-toastify';

// The PaymentForm component handles user input and initiates the Paystack payment
const PaymentForm = ({ amount, onPaymentSuccess, onPaymentClose }) => {
  // State to manage form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Handler for form submission
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Simple validation to ensure all fields are filled
    if (!name || !email || !phone) {
      toast.error("Please fill in all fields.", { position: "bottom-center" });
      return;
    }

    if (amount <= 0) {
      toast.error("Cart total must be greater than zero.", { position: "bottom-center" });
      return;
    }

    // Paystack requires the amount in pesewas (smallest currency unit), so we multiply by 100
    const amountInPesewas = Math.round(amount * 100);

    // Check if the Paystack script is loaded
    if (window.PaystackPop) {
      // It's crucial to replace this public key with your actual one
      const publicKey = 'pk_live_e4054f9b8719b3ea679749dd95fa28df4f7ea6ed';

      const handler = window.PaystackPop.setup({
        key: publicKey,
        email: email,
        amount: amountInPesewas,
        currency: 'GHS', // Ghanaian Cedi
        channels: ['card', 'bank', 'ussd', 'qr', 'mobile_money'],
        metadata: {
          name: name,
          phone: phone,
        },
        callback: (response) => {
          // This function is called on a successful payment
          toast.success('Payment was successful! Reference: ' + response.reference, {
            position: "bottom-center",
            style: {
              background: "#2A1103",
              color: "white",
              fontWeight: "500",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              fontFamily: "Outfit"
              
            }
          });
          if (onPaymentSuccess) {
            onPaymentSuccess(); // Call the success handler passed as a prop
          }
        },
        onClose: () => {
          // This function is called if the user closes the payment widget
          toast.info('Are you sure you want to close?', {
            position: "bottom-center",
            style: {
              background: "#2A1103",
              color: "white",
              fontWeight: "500",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              fontFamily: "Outfit"
            }
          });
          if (onPaymentClose) {
            onPaymentClose(); // Call the close handler passed as a prop
          }
        },
      });
      handler.openIframe();
    } else {
      toast.error('Paystack script not loaded. Please check your index.html.', { position: "bottom-center" });
    }
  };

  return (
    <div className="p-6 bg-white shadow-md max-w-sm mx-auto my-8 font-[outfit]">
      <h2 className="text-xl font-bold mb-4 text-[#2A1103]">Payment Details</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-[#2A1103]">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-[#2A1103] shadow-sm focus:outline-none focus:ring-[#ec8733] focus:border-[#ec8733] sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-[#2A1103]">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-[#2A1103] shadow-sm focus:outline-none focus:ring-[#ec8733] focus:border-[#ec8733] sm:text-sm"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="phone" className="block text-sm font-medium text-[#2A1103]">Phone Number</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-[#2A1103] shadow-sm focus:outline-none focus:ring-[#ec8733] focus:border-[#ec8733] sm:text-sm"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 font-medium bg-[#2A1103] border-2 border-[#2A1103] text-sm shadow-lg text-white transition-all duration-300 ease-in-out hover:bg-transparent hover:border-[#2A1103] hover:text-[#2A1103]"
        >
          Pay GH₵ {amount.toFixed(2)}
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
