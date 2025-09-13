const ToastStyles = {
  style: {
    padding: "16px 24px",
    borderRadius: "10px",
    fontSize: "20px",
    fontWeight: "500",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
    textAlign: "center",
  },
  success: {
    style: {
      background: "linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)",
      color: "#065f46",
    },
    iconTheme: {
      primary: "#10b981",
      secondary: "#fff",
    },
  },
  error: {
    style: {
      background: "linear-gradient(135deg, #f85032 0%, #e73827 100%)",
      color: "#fff",
    },
    iconTheme: {
      primary: "#fff",
      secondary: "#f87171",
    },
  },
};

export default ToastStyles;
