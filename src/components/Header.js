import React from "react";
import logo from "../assets/logo.png";
// import Navbar from "./Navbar";
import Navigation from "./Navbar";

function Header() {
    return  <header className="sticky top-0 top bg-black/30 py-2 hover:z-40">
                <div className="container mx-auto">
                    <div className="flex flex-row mx-auto justify-around items-center my-1">
                        <div className="">
                            {/* image */}
                            <img src={logo} alt="" className="rounded-full w-28"/>
                        </div>
                        <Navigation />                        
                    </div>
                </div>
            </header>;
}

export default Header;

