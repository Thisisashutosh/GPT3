const Cta = () => {
  return (
    <div className="ctaContainer container p-20 bg-gradient-to-r from-[#002145] to-[#040c18]">
      <div className="bg-gradient-to-r from-[#ae67fa] to-[#f49867] flex items-center justify-between rounded-xl">
        <div className="left flex flex-col items-start justify-start p-10">
          <p className="text-black">Request Early Access to Get Started</p>
          <h1 className="font-bold text-black text-3xl">
            Register today & start exploring the endless possiblities.
          </h1>
        </div>
        <div className="right p-10">
          <button className="bg-black text-white p-4 pl-10 pr-10 rounded-full hover:scale-110 duration-300">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cta;
