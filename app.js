import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDh9Rye2aR7YMEW8x05Tz4P-5BMoiygmlw",
  authDomain: "pizza-order-system-80a7a.firebaseapp.com",
  projectId: "pizza-order-system-80a7a",
  storageBucket: "pizza-order-system-80a7a.firebasestorage.app",
  messagingSenderId: "562066801142",
  appId: "1:562066801142:web:204d617e9795001b7547d7"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// MAKE FUNCTION GLOBAL (important for HTML button)
window.sendOrder = async function() {
  
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const pizza = document.getElementById("pizza").value;
  const quantity = document.getElementById("quantity").value;
  
  if (!name || !phone || !quantity) {
    alert("Please fill all fields");
    return;
  }
  
  try {
    await addDoc(collection(db, "orders"), {
      name,
      phone,
      pizza,
      quantity,
      status: "pending",
      createdAt: Date.now()
    });
    
    alert("Order sent successfully!");
    document.getElementById("orderForm").reset();
    
  } catch (error) {
    console.error(error);
    alert("Error sending order");
  }
};