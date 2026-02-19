function Button({ children, onClick, variant = "primary" }) {
  return (
    <button
      onClick={onClick}
      className={variant === "primary" ? "btn-primary" : "btn-primary-outline"}
    >
      {children}
    </button>
  );
}

export default Button;
