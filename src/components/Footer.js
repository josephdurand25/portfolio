import React from "react";
import { FaGithub } from "react-icons/fa";

function Footer() {
    return  <div className="bottom-0 w-full bg-black/30 py-2">
                <div className="container mx-auto">
                    <div className="flex flex-row text-white gap-x-10">
                        <div className="flex-1 py-3">
                            <span>
                            Designed and Developed by Durand Kushiki
                            </span>
                        </div>
                        <div className="flex-1 justify-center items-center py-3 ">
                            <span className="flex justify-center">
                                Copyright &copy; 2023 DKJ
                            </span>
                        </div>
                        <div className="flex-1 flex flex-row justify-center items-center gap-x-16">
                            <FaGithub />
                            <FaGithub />
                            <FaGithub />
                        </div>
                    </div>
                </div>
            </div>;
}

export default Footer;