const Header = () => {
  return (
    <div className="headerContainer container flex items-center justify-around pl-20 pr-20 pt-5">
      <div className="textContainer flex flex-col items-start gap-10 w-3/4">
        <h1 className="title font-semibold text-7xl break-keep text-transparent leading-normal bg-clip-text bg-gradient-to-r from-[#ae67fa] to-[#f49867]">
          Let&apos;s build something amazing with GPT3 OpenAI
        </h1>
        <p className="desc text-cyan-600 font-thin text-xl">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="headerContact">
          <input
            type="text"
            placeholder="Your Email Address"
            className="p-3 pr-28 bg-cyan-950 outline-none border-none text-cyan-800 rounded rounded-r-none placeholder-cyan-800"
          />
          <button className="headerContactButton bg-orange-600 p-3 rounded-l-none pr-7 pl-7 rounded text-white">
            Get Started
          </button>
        </div>
      </div>
      <div className="imageContainer flex items-center justify-center">
        <img src="../../../assets/headerImage.png" alt="header image" />
      </div>
    </div>
  );
};

export default Header;
