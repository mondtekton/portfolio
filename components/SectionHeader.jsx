const SectionHeader = ({ title }) => {
  return (
    <div className="bg-gradient-to-r from-[#262649] to-[#10212c] w-full bg-[length:200%_200%] relative overflow-clip">
      <h2 className="text-center text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 tracking-wide p-8 relative">
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;
