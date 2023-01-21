import React from "react";
import { SiPython } from "react-icons/si";
import {IoLogoJavascript} from "react-icons/io"


export default function ProgrammingLang() {
    const prog=[
        {
            logo:<SiPython/>,
            text:"Python",
            count: 99
        },
        {
            logo:<IoLogoJavascript/>,
            text:"JavaScript",
            count: 95
        }
    ]
  return (
    <section id="programminglang" className="py-10 bg-gray-800 relative mt-10 ">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
        Programming <span className="text-cyan-600">Languages</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My Proficient Programming Languages</p>
        {/* <p className="text-gray-400 mt-3 text-lg">My Dexterity</p> */}
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
            {
                prog?.map((lang,i)=>(
                    <div key={i} className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl">
                    <div style={{
                        background:`conic-gradient(rgb(8,145,170) ${lang.count}%, #ddd ${lang.count}%)`
                    }}
                     className="w-32 h-32 flex items-center justify-center rounded-full">
                        <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                            {lang.logo}
                        </div>
                    </div>
                    <p className="text-xl mt-3 ">{lang.text}</p>
                </div>
                ))
            }
        </div>
      </div>
    </section>
  );
}
