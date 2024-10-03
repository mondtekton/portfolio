const Button = ({
  children,
  onClick,
  className,
  type,
  childrenContainerClass,
  borderRadiusClass,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={
        (className
          ? className
          : "w-[320px] sm:w-[500px] md:w-[600px] max-w-[800px] lg:w-full") +
        " " +
        (borderRadiusClass ? borderRadiusClass : "rounded-lg")
      }
    >
      <div className="bg-gradient-to-r hover:bg-gradient-to-l from-[#12c2e98f] via-[#c471ed8f] to-[#f163aa8f] p-[1.6px] rounded-[inherit]">
        <div
          className={
            "rounded-[inherit] overflow-clip px-6 py-3" +
            " " +
            (childrenContainerClass ? childrenContainerClass : "") +
            " " +
            "bg-button hover:button-hover"
          }
        >
          {children}
        </div>
      </div>
    </button>
  );
};

export default Button;
