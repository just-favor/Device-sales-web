import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./NotificationBar.css";

function NotificationBar({ message, show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -60, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="notification-bar"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default NotificationBar;
