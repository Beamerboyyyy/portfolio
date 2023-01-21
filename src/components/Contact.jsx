import React from "react";

export default function Contact(){
        const contact_info = [
          { logo: "mail", text: "owaisahmed142002@gmail.com" },
          { logo: "logo-whatsapp", text: "+92 3122029205" },
          {
            logo: "location",
            text: "Karachi, Pakistan",
          },
        ];
        function sendMail(){
          window.location.href = `mailto:owaisahmed142002@gmail.com?subject=${document.getElementById('subject').textContent}&body=From ${document.getElementById('name').textContent},${document.getElementById('bodyText').textContent}}`;
          
        }
        return (
          <section id="contact" className="py-10 px-3 text-white">
            <div className="text-center mt-8">
              <h3 className="text-4xl font-semibold">
                Contact <span className="text-cyan-600">Me</span>
              </h3>
              <p className="text-gray-400 mt-3 text-lg">Get in touch</p>
      
              <div
                className="mt-4 flex md:flex-row flex-col
               gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
              >
                <form className="flex flex-col flex-1 gap-5">
                  <input type="text" placeholder="Your Name" className="p-2 rounded-sm text-black" id="name"/>
                  <input type="text" placeholder="Subject" className="p-2 rounded-sm text-black" id="subject" />
                  <textarea placeholder="Your Message" className="p-2 rounded-sm text-black" rows={10} id='bodyText'></textarea>
                  <button className="btn-primary w-fit" onClick={sendMail}>Send Message</button>
                </form>
                <div className="flex flex-col  gap-7 ">
                  {contact_info.map((contact, i) => (
                    <div
                      key={i}
                      className="flex flex-row  
                        text-left gap-4 flex-wrap items-center"
                    >
                      <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                        <ion-icon name={contact.logo}></ion-icon>
                      </div>
                      <p className="md:text-base text-sm  break-words">
                        {contact.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      };