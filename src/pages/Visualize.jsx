import React from "react";
// import Header from "../components/Header";
import AlgoTypeWriter from "../components/AlgoTypeWriter";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Visualize = () => {
  const topics = [
    {
      title: "Sorting",
     
      link: "/visualize/sort",
      image: "/sort.png"
    },
    {
      title: "Recursive Sorting",
     
      link: "/visualize/recursive-sort",
      image: "recursion.jpeg"
    },
    {
      title: "Searching",
     
      link: "/visualize/search",
      image: "/search.jpg"
    },
    {
      title: "Pathfinding",
     
      link: "/visualize/pathfind",
      image: "/pathfind.jpg"
    },
   
  ];

  return (
    <>
      {/* <Header /> */}
      <section className="py-24 -mb-16 bg-[#05DBFC]">
        <div className="text-center">
          <h1 className="text-3xl px-2 md:text-5xl font-extrabold mb-4">
            Explore the Visualization
          </h1>
          <p className="text-xl text-gray-700 tracking-tighter">
            <i>
              "Visualize DSA Like Never Before: Where Algorithms Become a Work
              of Art!"
            </i>
          </p>
          <div className="bg-black p-2 mt-4 md:p-4">
            <AlgoTypeWriter />
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-7 lg:grid-cols-4 p-6 mt-5">
          {
            topics.map((algo, id) => {
              return (
                <div key={id} className="w-full max-w-sm bg-gray-100 border border-gray-200 rounded-lg shadow hover:scale-105 transition-all duration-200">
                  <img
                    src={algo.image}
                    className="rounded-t-lg w-full h-[39vh] sm:h-[20vh] lg:h-[39vh] min-h-[250px] object-cover object-center"
                    alt="algorithm"
                  />
                  <div className="px-5 pb-5 flex mt-4 flex-col justify-center items-center">
                    <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
                      {algo.title}
                    </h3>
                    <div>
                      <p className="text-gray-600 mb-4 ">
                        {algo.description}
                      </p>
                    </div>

                    <Link to={algo.link}>
                      <button className="text-blue-700 hover:text-white border border-blue-500 bg-white hover:bg-blue-600 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-4 py-1.5 text-center">
                        Visualize
                      </button>
                    </Link>
                  </div>
                </div>
              )
            })
          }

        </div>
      </section>
      <Footer />
    </>
  );
};

export default Visualize;
