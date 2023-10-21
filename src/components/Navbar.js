import React, { useState } from "react";
import { TiHomeOutline, TiUserOutline, TiMessage, TiCameraOutline, TiCogOutline } from 'react-icons/ti';

function Navigation () {
    const Menu=[
       { name: "Home", icon: <TiHomeOutline />, dis:"translate-x-0"},
       { name: "Profile", icon: <TiUserOutline />, dis:"translate-x-16"},
       { name: "Message", icon: <TiMessage />, dis:"translate-x-32"},
       { name: "Photo", icon: <TiCameraOutline />, dis:"translate-x-48"},
       { name: "Settings", icon: <TiCogOutline />, dis:"translate-x-64"},
    ];
    const [active, setActive] = useState(0);

    return (
        <div className=" bg-white border-2 w-2/4 max-h-[4.4rem] px-6 rounded-tl-xl">
            <ul className="flex relative">
                {
                    Menu.map((menu,i) => (
                        <li key={i} className="w-16">
                            <button
                                className="flex flex-col text-center pt-6"
                                onClick={()=> setActive(i) }
                            >
                                <span className={`text-xl cursor-pointer duration-500 ${i === active && "-mt-6"}`}>
                                    {menu.icon}
                                </span>
                                <span 
                                    className={` ${active === i ? "translate-y-4 duration-700 opacity-100 " : "opacity-0 translate-y-10"
                                    }` } >{menu.name}
                                </span>
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Navigation;
