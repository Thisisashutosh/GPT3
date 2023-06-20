const Footer = () => {
  return (
    <div className="bg-cyan-950 flex flex-col items-center justify-center h-fit">
      <div className="h-40 w-2/4 mt-28">
        <h1 className="font-semibold text-5xl text-center break-keep text-transparent leading-normal bg-clip-text bg-gradient-to-r from-[#ae67fa] to-[#f49867]">
          Do you want to step in to the future before others
        </h1>
      </div>
      <div className="mt-10 mb-44">
        <button className="p-3 hover:scale-110 duration-300 border-white bg-orange-600 rounded text-white">
          Request Early Access
        </button>
      </div>
      <div className="link flex items-start justify-center gap-40 mb-44">
        <div className="logo">
          <h1 className="text-white text-4xl font-semibold">GPT-3</h1>
          <p className="text-white w-60">
            Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
          </p>
        </div>
        <div className="linksContainer flex items-start justify-center gap-36">
          <div className="links">
            <h1 className="text-white font-semibold mb-10">Links</h1>
            <ul className="text-white flex flex-col gap-5">
              <li>Overons</li>
              <li>Social Media</li>
              <li>Counters</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="company">
            <h1 className="text-white font-semibold mb-10">Company</h1>
            <ul className="text-white flex flex-col gap-5">
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="getintouch">
            <h1 className="text-white font-semibold mb-10">Get in touch</h1>
            <ul className="text-white flex flex-col gap-5">
              <li>Crechterwoord K12 182 DK Alknjkcb</li>
              <li>085-132567</li>
              <li>info@payme.net</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright mb-10">
        <p className="text-white">© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
