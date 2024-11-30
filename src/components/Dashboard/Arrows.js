const Arrow = ({ direction, className = "w-8 h-8" }) => {
  const paths = {
    up: "M12 19V5M5 12l7-7 7 7",
    right: "M5 12h14M12 5l7 7-7 7",
    down: "M12 5v14M5 12l7 7 7-7",
    left: "M19 12H5M12 19l-7-7 7-7"
  };

  return (
    <svg 
      className={className}
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth={2}
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d={paths[direction]} />
    </svg>
  );
};

export default Arrow;
