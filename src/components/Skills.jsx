import React from "react";
import {SiMongodb} from "react-icons/si"
import {FaReact,FaNode} from "react-icons/fa"
import {SiExpress,SiMysql,SiPostgresql} from "react-icons/si"
import {SiTailwindcss,SiFuturelearn,SiFlask,SiTensorflow,SiPytorch,SiKeras} from "react-icons/si"
import {GiArtificialIntelligence} from "react-icons/gi"
import {TbApi} from "react-icons/tb"
import {DiDjango} from "react-icons/di"


export default function Skills() {
    const skills=[
        {
            logo:<SiFuturelearn/>,
            text:"ML",
            count: 80
        },
        {
            logo:<GiArtificialIntelligence/>,
            text:"AI",
            count: 75
        },
        {
            logo:<SiExpress/>,
            text:"Express js",
            count: 90
        },
        {
            logo:<FaNode/>,
            text:"Node js",
            count: 90
        },
        {
            logo:<FaReact/>,
            text:"React js",
            count: 85
        },
        {
            logo:<SiTailwindcss/>,
            text:"Tailwind CSS",
            count: 95
        },
        {
            logo:<TbApi/>,
            text:"REST APIs",
            count: 95
        },
        {
            logo:<SiFlask/>,
            text:"Flask",
            count: 95
        },
        {
            logo:<DiDjango/>,
            text:"Django",
            count: 65
        },
        {
            logo:<SiTensorflow/>,
            text:"TensorFlow",
            count: 75
        },
        {
            logo:<SiPytorch/>,
            text:"Pytorch",
            count: 70
        },
        {
            logo:<SiKeras/>,
            text:"Keras",
            count: 86
        },
        {
            logo:<SiPostgresql/>,
            text:"PostgreSQL",
            count: 95
        },
        {
            logo:<SiMysql/>,
            text:"My SQL",
            count: 95
        },
        {
            logo:<SiMongodb/>,
            text:"Mongo DB",
            count: 95
        },
        
    ]
  return (
    <section id="skills" className="py-10 bg-gray-800 relative ">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My Dexterity</p>
        <div className="mt-4 flex flex-wrap
               gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto items-center justify-center">
            {
                skills?.map((skill,i)=>(
                    <div key={i} className="border-2 group border-cyan-600 relative  min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl">
                    <div style={{
                        background:`conic-gradient(rgb(8,145,170) ${skill.count}%, #ddd ${skill.count}%)`
                    }}
                     className="w-32 h-32 flex items-center justify-center rounded-full">
                        <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                            {skill.logo}
                        </div>
                    </div>
                    <p className="text-xl mt-3 ">{skill.text}</p>
                </div>
                ))
            }
        </div>
      </div>
    </section>
  );
}
