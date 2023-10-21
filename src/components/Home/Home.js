import React from "react";
import home from '../../assets/home-main.svg';
import Header from "../Header";
import { TypeAnimation } from "react-type-animation";
import About from "../About/About";
import Footer from "../Footer";
// import About from "../About/About";
function Home() {
    return ( <>
                {/* header */}
                <Header />
                {/* greeting */}
                <section className="">
                    <div className="" id="presentation">
                        <div className="container mx-auto">
                            <div className="flex lg:flex-row md:flex-col sm:flex-col ">
                                <div className="justify-center items-center my-auto">
                                    {/* text */}
                                    <h3 className="px-7 md:ps-20 md:text-left sm:text-center text-gray-50 font-serif text-6xl"> Hi There 👋</h3>
                                    <h3 className="px-7 md:ps-20 md:text-left sm:text-center text-6xl font-serif text-indigo-200">I'M ADJI DURAND</h3>
                                    <span className="px-7 text-pink-600  font-serif text-5xl md:text-left md:ps-20 sm:text-center">
                                        <TypeAnimation sequence={['Developper',2000, 'Freelancer',2000,'Youtuber',2000,]}
                                            speed={50}
                                            className="text-secondary"
                                            wrapper="span"
                                            repeat={Infinity} />
                                    </span>
                                </div>
                                <div className="flex-1 w-4/5">
                                    {/* image */}
                                    <img src={home} alt="about"  className="rounded-full"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* about*/}
                <About />
                {/* project */}
                {/* Resume */}
                {/* contact */}
                <Footer />


           </>
    );
}

export default Home;