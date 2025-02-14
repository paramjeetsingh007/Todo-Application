import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      {/* Animated Heading */}
      <motion.h1 
        className="dashboard-title"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Welcome to MyTodos Application 
      </motion.h1>
      <motion.p className="dashboard-subtitle"  initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}>
        Manage your daily tasks efficiently and stay organized!
      </motion.p>
      
      {/* Animated Button */}
      <motion.button 
        className="dashboard-button"
        onClick={() => navigate("/todo")}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Go to Application
      </motion.button>
    </div>
  );
}

export default Dashboard;
