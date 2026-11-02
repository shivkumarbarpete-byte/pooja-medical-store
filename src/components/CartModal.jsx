const handleRazorpayCheckout = async () => {
  try {
    // 1. Request order creation from your Express backend
   const response = await fetch("/api/payment/create-order", {
  method: "POST", // <-- Ensure this is POST
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ 
    amount: cartTotal, 
    items: cartItems 
  })
});
  const data = await response.json();
if (!data.success) { // Double check if your backend returns { success: true, ... }
  alert("Failed to create order");
  return;
}

    // 2. Configure Razorpay options using backend response
    const options = {
      key: data.keyId,
      amount: data.amount,
      currency: data.currency,
      name: "Pooja & Shree Shayam Medical Store",
      description: "Medicine Purchase Checkout",
      order_id: data.orderId,
      handler: async function (response) {
        // 3. Send payment details back to backend for verification
        const verifyRes = await fetch("http://localhost:5000/api/payment/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          })
        });

        const verifyData = await verifyRes.json();
        if (verifyData.success) {
          alert("Payment Successful & Verified!");
          // Clear cart state here
        } else {
          alert("Payment verification failed!");
        }
      },
      prefill: {
        name: "Customer",
        email: "customer@example.com",
        contact: "9876543210"
      },
      theme: {
        color: "#2563EB"
      }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();

  } catch (error) {
    console.error("Checkout error:", error);
  }
};