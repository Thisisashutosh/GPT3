import Navbar from "./components/navbar/Navbar.jsx";
import Brand from "./components/brand/Brand.jsx";
import Header from "./containers/Header/Header.jsx";
import WhatGPT3 from "./containers/whatGPT3/WhatGPT3.jsx";
import Features from "./containers/features/Features.jsx";
import Possibility from "./containers/possibility/Possibility.jsx";
import Cta from "./components/cta/Cta.jsx";
import Blog from "./containers/blog/Blog.jsx";
import Footer from "./containers/footer/Footer.jsx";
import './index.css'

function App() {
  return (
    <>
      <div className="box-border m-0 p-0 scroll-smooth bg-[var(--color-bg)] h-screen bg-gradient">
        <div className="gradient_bg h-screen">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
      </div>
    </>
  );
}

export default App;
