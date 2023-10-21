import React from 'react';
import about from '../../assets/about.png';
 import html from '../../assets/skills/html_100px.png';
 import css from '../../assets/skills/css3_100px.png';
 import js from '../../assets/skills/js_100px.png';
//  import jquery from '../../assets/skills/jquery.jpeg';
 import php from '../../assets/skills/php_100px.png';
 import java from '../../assets/skills/java_100px.png';
 import react from '../../assets/skills/react_100px.png';
 import json from '../../assets/skills/json_100px.png';
//  import mysql from '../../assets/skills/mysql.jpeg';
 import node from '../../assets/skills/nodejs_100px.png';
 import twin from '../../assets/skills/twin.jpeg';
//  import git from '../../assets/skills/git.jpeg';
 import sublime from '../../assets/skills/sublime_text_new_logo_100px.png';
 import vs from '../../assets/skills/visual_studio_code_2019_100px.png';
 import window from '../../assets/skills/windows_10_100px.png';

//  import css from '../../assets/skills/css3_logo_32.png';
//  import js from '../../assets/skills/javascript_32.png';
//  import ajax from '../../assets/skills/jquery.ico';
//  import jQuery from '../../assets/skills/jquery_32.png';
//  import json from '../../assets/skills/json_32.png';
//  import php from '../../assets/skills/logo_32.png';
//  import mysql from '../../assets/skills/mysql_32.png';
//  import mysql from '../../assets/skills/mysql_32.png';


const About = () => {
   
    return (
       <>
         <section className='About'>
            <div className="p-2" id="about">
                <div className="container mx-auto">
                <h2 className="mx-auto text-6xl justify-center text-slate-200 w-1/4 flex flex-1 md:w-full md:mb-7  border-b-purple-500 hover:underline-offset-4 font-serif p-2" id="about-title">About Me</h2>
                    <div className="xl:flex lg:flex lg:flex-row md:flex-col sm:flex-col  justify-center items-center w-[90%]">
                        <div className="container mx-7 px-6 md:px-3 sm:px-1">
                            {/* text */}
                            <h1 className="text-center text-gray-100 font-medium text-5xl mb-2 hover:text-6xl">Know Who 
                                <span className="text-blue-500 ms-1">I'M</span>
                            </h1>
                            <p className="text-xl font-serif text-slate-100 text-justify">
                                Hi Everyone, I am ADJI Durand from yaoundé, cameroun.
                                I am a first year student pursuing an Integrated MSc (IMSc) in Maths and Computing at BIT Mesra.
                                Additionally, I am currently employed as a software developer at Juspay.
                            </p>
                            <br />
                            <h2 className="text-2xl text-gray-100">Apart from coding, some other activities that I love to do!</h2>
                                <ul className="text-lg text-slate-50  font-serif">
                                    <li className="">👉 Playing Games</li>
                                    <li className="">👉 Playing football</li>
                                    <li className="">👉 Travelling</li>
                                </ul>
                        </div>
                        <div className="columns-1">
                            {/* image */}
                            <img src={about} alt="" className="" />
                        </div> 
                    </div>
                    <div className="container">
                    <h2 className="mx-auto text-4xl justify-center text-slate-200 w-1/4 flex flex-1 md:w-full md:mb-7  border-1-purple-500 border-1 hover:underline-offset-4 font-serif p-2" id="about-title">Professionals Skillset</h2>
                        <div className="w-full p-5" id="skills" >
                            <div className="grid grid-cols-5 gap-10">
                                <div className="justify-center transition ease-in-out delay-150 bg-black/20  bg-cover p-3 hover:-translate-y-1 hover:scale-110  duration-300 rounded-xl">
                                    <img src={html} alt="html" className="object-cover w-full h-full" />
                                </div>
                                <div className="justify-center transition ease-in-out delay-150 bg-black/20  bg-cover p-3 hover:-translate-y-1 hover:scale-110  duration-300 rounded-xl">
                                    <img src={css} alt="html" className= "object-cover w-full h-full" />
                                </div>
                                <div className="justify-center transition ease-in-out delay-150 bg-black/20 bg-cover p-3 hover:-translate-y-1 hover:scale-110  duration-300 rounded-xl">
                                    <img src={js} alt="html" className="w-full h-full" />
                                </div>
                                <div className="justify-center transition ease-in-out delay-150 bg-black/20 bg-cover p-3 hover:-translate-y-1 hover:scale-110  duration-300 rounded-xl">
                                    <img src={json} alt="html" className="object-cover w-full h-full" />
                                </div>
                                <div className="justify-center transition ease-in-out delay-150 bg-black/10 bg-cover p-3 hover:-translate-y-1 hover:scale-110  duration-300 rounded-xl">
                                    <img src={node} alt="html" className="object-cover w-full h-full" />
                                </div>
                                <div className="justify-center transition ease-in-out delay-150 bg-black/20 bg-cover p-3 hover:-translate-y-1 hover:scale-110  duration-300 rounded-xl">
                                    <img src={react} alt="html" className="object-cover w-full h-full" />
                                </div>
                                <div className="justify-center transition ease-in-out delay-150 bg-black/20 bg-cover p-3 hover:-translate-y-1 hover:scale-110  duration-300 rounded-xl">
                                    <img src={twin} alt="html" className="object-cover w-full h-full" />
                                </div>
                                <div className="justify-center transition ease-in-out delay-150 bg-black/20  bg-cover p-3 hover:-translate-y-1 hover:scale-110  duration-300 rounded-xl">
                                    <img src={php} alt="html" className="object-cover w-full h-full" />
                                </div>
                                <div className="justify-center transition ease-in-out delay-150 bg-black/20 bg-cover p-3 hover:-translate-y-1 hover:scale-110  duration-300 rounded-xl">
                                    <img src={java} alt="html" className="object-cover w-full h-full" />
                                </div>
                                
                            </div>
                            <h2 className="mx-auto text-4xl justify-center text-slate-200 my-3 w-1/4 flex flex-1 md:w-full md:mb-7  border-1-purple-500 border-1 hover:underline-offset-4 font-serif p-2" id="about-title">Tools I using</h2>
                            <div className="grid grid-cols-5 gap-10 mx-auto">
                                <div className="justify-center transition ease-in-out delay-150 bg-black/20  bg-cover p-3 hover:-translate-y-1 hover:scale-110  duration-300 rounded-xl">
                                    <img src={sublime} alt="html" className="object-cover w-full h-full" />
                                </div>
                                <div className="justify-center transition ease-in-out delay-150 bg-black/20  bg-cover p-3 hover:-translate-y-1 hover:scale-110  duration-300 rounded-xl">
                                    <img src={vs} alt="html" className= "object-cover w-full h-full" />
                                </div>
                                <div className="justify-center transition ease-in-out delay-150 bg-black/20 bg-cover p-3 hover:-translate-y-1 hover:scale-110  duration-300 rounded-xl">
                                    <img src={window} alt="html" className="w-full h-full" />
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       </>
    );
}

export default About;
