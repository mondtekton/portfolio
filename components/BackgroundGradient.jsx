const BackgroundGradient = ({
  children,
  containerClass,
  innerClass,
  gradientClass,
  blurClass,
  applyBlur,
  borderRadiusClass,
  blurOpacityClass,
}) => {
  return (
    <div
      className={`relative p-1 group ${containerClass ? containerClass : ""}`}
    >
      {applyBlur && (
        <div
          className={` absolute inset-0 z-[1] group-hover:opacity-100 transition duration-500 will-change-transform ${
            borderRadiusClass ? borderRadiusClass : "rounded-3xl"
          } ${blurOpacityClass ? blurOpacityClass : "opacity-60"} ${
            blurClass ? blurClass : "blur-xl"
          } ${
            gradientClass
              ? gradientClass
              : "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
          }`}
        ></div>
      )}

      <div
        className={` absolute inset-0 z-[1] will-change-transform ${
          borderRadiusClass ? borderRadiusClass : "rounded-3xl"
        } ${
          gradientClass
            ? gradientClass
            : "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
        }`}
      ></div>
      <div
        className={`relative z-10 overflow-hidden ${
          innerClass ? innerClass : ""
        } ${borderRadiusClass ? borderRadiusClass : "rounded-3xl"} `}
      >
        {children}
      </div>
    </div>
  );
};

export default BackgroundGradient;
