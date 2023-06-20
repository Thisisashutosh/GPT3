// import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="navbar text-white">
      <div className="navbarContainer flex items-center justify-evenly">
        <div className="navbarLinks">
          <ul className="flex items-center justify-center p-10 cursor-pointer gap-10">
            <li>Home</li>
            <li>What is GPT?</li>
            <li>OpenAI</li>
            <li>Case Studies</li>
            <li>Library</li>
          </ul>
        </div>
        <div className="navbarButtons ">
          <button className="signinButton hover:scale-110 duration-300 p-2 pr-7 pl-7 rounded">
            Sign in
          </button>
          <button className="signupButton hover:scale-110 duration-300 bg-orange-600 p-2 pr-7 pl-7 rounded">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
