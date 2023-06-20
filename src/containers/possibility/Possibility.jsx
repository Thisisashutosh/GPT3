const Possibility = () => {
  return (
    <div className="possibilutyContainer container flex justify-center items-center h-full pr-20 pl-20 pt-5 pb-5 bg-gradient-to-r from-[#002145] to-[#040c18]">
      <div className="left w-2/5">
        <div className="imgContainer flex items-center justify-start">
          <img
            src="../../../assets/Feature Image.png"
            alt="feature image"
            className=""
          />
        </div>
      </div>
      <div className="right flex flex-col justify-center gap-5 items-start w-2/5 h-full">
        <p className="text-cyan-400">Request Early Access to Get Started</p>
        <h1 className="font-semibold text-4xl break-keep text-transparent leading-snug bg-clip-text bg-gradient-to-r from-[#ae67fa] to-[#f49867]">
          The possibilities are beyond your imagination
        </h1>
        <p className="text-cyan-400">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <a href="#" className="text-orange-500">
          Request Early Access to Get Started
        </a>
      </div>
    </div>
  );
};

export default Possibility;
