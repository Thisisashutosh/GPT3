import "./blog.css";

const Blog = () => {
  return (
    <div className="blogContainer container bg-gradient-to-r from-[#002145] to-[#040c18] p-20">
      <div className="title w-2/5">
        <h1 className="font-semibold text-5xl break-keep text-transparent leading-normal bg-clip-text bg-gradient-to-r from-[#ae67fa] to-[#f49867]">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="cards duration-500 flex items-center justify-center pt-24 w-full gap-10">
        <div className="card duration-500 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center rounded-xl w-1/4 overflow-hidden cursor-pointer">
          <img
            src="../../../assets/mountain.jpg"
            className="object-cover overflow-hidden"
            alt="image 22"
          />
          <div className="p-10">
            <p className="text-black">Sep 26, 2021</p>
            <h1 className="font-bold text-black text-3xl">
              GPT-3 and Open AI is the future. Let us exlore how it is?
            </h1>
          </div>
        </div>
        <div className="card duration-500 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center rounded-xl w-1/4 overflow-hidden cursor-pointer">
          <img
            src="../../../assets/mountain.jpg"
            className="object-cover overflow-hidden"
            alt="image 22"
          />
          <div className="p-10">
            <p className="text-black">Sep 26, 2021</p>
            <h1 className="font-bold text-black text-3xl">
              GPT-3 and Open AI is the future. Let us exlore how it is?
            </h1>
          </div>
        </div>
        <div className="card duration-500 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center rounded-xl w-1/4 overflow-hidden cursor-pointer">
          <img
            src="../../../assets/mountain.jpg"
            className="object-cover overflow-hidden"
            alt="image 22"
          />
          <div className="p-10">
            <p className="text-black">Sep 26, 2021</p>
            <h1 className="font-bold text-black text-3xl">
              GPT-3 and Open AI is the future. Let us exlore how it is?
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
