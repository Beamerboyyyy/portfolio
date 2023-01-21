import React from "react";
// import image from "../static/image.jpg"
import {SiUpwork} from "react-icons/si"
import {AiFillGithub} from "react-icons/ai"
import {BsStackOverflow} from "react-icons/bs"
export default function Hero(){
    const social_media=[
        ["logo-instagram","https://www.instagram.com/aspisowais67/"],
        ["logo-facebook","https://www.facebook.com/profile.php?id=100023133354215"],
        ["logo-linkedin","https://www.linkedin.com/feed/"],
        ["logo-twitter","https://twitter.com/aspis2002"],
    ];
    return(
        <section id="home" className="min-h-screen flex py-10 md:flex-row flex-col items-center">
            <div className="flex-1 flex items-center justify-center h-full ">
                <img src="https://scontent.fkhi16-1.fna.fbcdn.net/v/t39.30808-6/261104014_1035097263938042_3599685883210987265_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_eui2=AeE2OTJhtlD61KG5bIJiEwBlc6wgwm-UIhZzrCDCb5QiFivgYgdVPVcYAgVJirgrXfuWzDLwmuWNU3I0oYQpXxDw&_nc_ohc=RMkrbmUUSvYAX8T9Atx&_nc_ht=scontent.fkhi16-1.fna&oh=00_AfB-eYK1KS2EJCfybQMz5piaFYcngS-kdcjPwNQ5ORM08Q&oe=63CFE552" alt="" className=" md-:w-11/12 p-2 pt-4 h-full rounded-full object-cover"/>
            </div>
            <div className="flex-1 ">
                <div className="md:text-left text-center">
                    <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
                        <span className="text-cyan-600 md:text-6xl text-5xl">
                            Hello!
                            <br/>
                        </span>
                        My Name is <span>Owais Ahmed</span>
                    </h1>
                    <h4 className="md:text-2xl text-lg  md:leading-normal leading-5 mt-4 font-bold text-gray-600">Machine Learning Engineer, Full Stack Developer</h4>
                    <button className="btn-primary mt-8">Contact Me</button>
                    <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-4 ">
                        {
                            social_media?.map(icon=>(
                                <a key={icon[0]} href={icon[1]} target="_blank" className="text-gray-600 hover:text-white cursor-pointer">
                                    <ion-icon name={icon[0]}></ion-icon>
                                </a>
                            ))
                        }
                        <a target="_blank" href="https://www.upwork.com/freelancers/~01c67e7e5c16971fe2"  className="text-gray-600 hover:text-white cursor-pointer">
                            <SiUpwork/>
                        </a>
                        <a target="_blank" href="https://github.com/Beamerboyyyy"  className="mb-1.5 text-gray-600 hover:text-white cursor-pointer">
                            <AiFillGithub/>
                        </a>
                        <a target="_blank" href="https://stackoverflow.com/users/17405119/owais-ahmed"  className="mb-2 text-gray-600 hover:text-white cursor-pointer">
                            <BsStackOverflow/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}