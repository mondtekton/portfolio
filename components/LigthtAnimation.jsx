const LightAnimation = ({ colors, blurClass, sizeClass }) => {
  const blur = blurClass ? blurClass : "blur-[xl]";

  return (
    <div
      className={`${
        sizeClass ? `${sizeClass} ${sizeClass}` : "w-20 h-20"
      } ${blur} aspect-square animate-bg-light-animate absolute`}
    >
      <div
        className={`bg-[${
          colors ? colors[0] : "#2ec0b9"
        }] w-1/2 aspect-square absolute top-0 left-0`}
      ></div>
      <div
        className={`bg-[${
          colors ? colors[1] : "#181141"
        }] w-1/2 aspect-square absolute top-1/2`}
      ></div>
      <div
        className={`bg-[${
          colors ? colors[2] : "#4568DC"
        }] w-1/2 aspect-square absolute left-1/2`}
      ></div>
      <div
        className={`bg-[${
          colors ? colors[3] : "#B06AB3"
        }] w-1/2 aspect-square absolute top-1/2 left-1/2`}
      ></div>
    </div>
  );
};

export default LightAnimation;
