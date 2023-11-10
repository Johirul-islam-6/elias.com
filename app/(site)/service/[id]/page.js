"use client"
import { useParams } from 'next/navigation'
import frontEndImage from "../../../assets/services/icon-lcd.png";
import './services.css'
import { useEffect, useState } from 'react'
 const Services = () => {
    const [singelServices, setSingelServices] = useState()
    const {id} = useParams()


     const services = [
    {
      id: "F1",
      name: "Front-end ",
      image: frontEndImage,
      title: `Frontend development is an essential aspect of modern web and software development, where user interfaces are created and optimized for a seamless and engaging user experience. In this dynamic field, technology and programming languages play a pivotal role in shaping the digital landscape. JavaScript is the cornerstone of frontend development, enabling interactive and responsive web applications. It has a rich ecosystem of libraries and frameworks like React, Angular, and Vue.js that simplify development and enhance performance. Additionally, HTML and CSS are fundamental technologies for structuring web content and styling it, respectively. Asynchronous programming techniques, such as Promises and async/await, are essential for managing data flow and enhancing user responsiveness.`,
      feature: [
        "feature 01",
        "feature 02",
        "feature 03",
        "feature 04",
        "feature 05",
        "feature 06",
        "feature 07",
        "feature 08",
      ],
      project: ["https/project01", "https/project01", "https/project01"],
    },
    {
      id: "B2",
      name: "Back-end ",
      image: frontEndImage,
      title: `Frontend development is an essential aspect of modern web and software development, where user interfaces are created and optimized for a seamless and engaging user experience. In this dynamic field, technology and programming languages play a pivotal role in shaping the digital landscape. JavaScript is the cornerstone of frontend development, enabling interactive and responsive web applications. It has a rich ecosystem of libraries and frameworks like React, Angular, and Vue.js that simplify development and enhance performance. Additionally, HTML and CSS are fundamental technologies for structuring web content and styling it, respectively. Asynchronous programming techniques, such as Promises and async/await, are essential for managing data flow and enhancing user responsiveness.`,
      feature: [
        "feature 01",
        "feature 02",
        "feature 03",
        "feature 04",
        "feature 05",
        "feature 06",
        "feature 07",
        "feature 08",
      ],
      project: ["https/project01", "https/project01", "https/project01"],
    },
    {
      id: "A1",
      name: "AWS",
      image: frontEndImage,
      title: `Frontend development is an essential aspect of modern web and software development, where user interfaces are created and optimized for a seamless and engaging user experience. In this dynamic field, technology and programming languages play a pivotal role in shaping the digital landscape. JavaScript is the cornerstone of frontend development, enabling interactive and responsive web applications. It has a rich ecosystem of libraries and frameworks like React, Angular, and Vue.js that simplify development and enhance performance. Additionally, HTML and CSS are fundamental technologies for structuring web content and styling it, respectively. Asynchronous programming techniques, such as Promises and async/await, are essential for managing data flow and enhancing user responsiveness.`,
      feature: [
        "feature 01",
        "feature 02",
        "feature 03",
        "feature 04",
        "feature 05",
        "feature 06",
        "feature 07",
        "feature 08",
      ],
      project: ["https/project01", "https/project01", "https/project01"],
    },
    {
      id: "H1",
      name: " Hosting Management",
      image: frontEndImage,
      title: `Frontend development is an essential aspect of modern web and software development, where user interfaces are created and optimized for a seamless and engaging user experience. In this dynamic field, technology and programming languages play a pivotal role in shaping the digital landscape. JavaScript is the cornerstone of frontend development, enabling interactive and responsive web applications. It has a rich ecosystem of libraries and frameworks like React, Angular, and Vue.js that simplify development and enhance performance. Additionally, HTML and CSS are fundamental technologies for structuring web content and styling it, respectively. Asynchronous programming techniques, such as Promises and async/await, are essential for managing data flow and enhancing user responsiveness.`,
      feature: [
        "feature 01",
        "feature 02",
        "feature 03",
        "feature 04",
        "feature 05",
        "feature 06",
        "feature 07",
        "feature 08",
      ],
      project: ["https/project01", "https/project01", "https/project01"],
    },
    {
      id: "D1",
      name: " Database Management",
      image: frontEndImage,
      title: `Frontend development is an essential aspect of modern web and software development, where user interfaces are created and optimized for a seamless and engaging user experience. In this dynamic field, technology and programming languages play a pivotal role in shaping the digital landscape. JavaScript is the cornerstone of frontend development, enabling interactive and responsive web applications. It has a rich ecosystem of libraries and frameworks like React, Angular, and Vue.js that simplify development and enhance performance. Additionally, HTML and CSS are fundamental technologies for structuring web content and styling it, respectively. Asynchronous programming techniques, such as Promises and async/await, are essential for managing data flow and enhancing user responsiveness.`,
      feature: [
        "feature 01",
        "feature 02",
        "feature 03",
        "feature 04",
        "feature 05",
        "feature 06",
        "feature 07",
        "feature 08",
      ],
      project: ["https/project01", "https/project01", "https/project01"],
    },
    {
      id: "S1",
      name: " Serverless for deploying",
      image: frontEndImage,
      title: `Frontend development is an essential aspect of modern web and software development, where user interfaces are created and optimized for a seamless and engaging user experience. In this dynamic field, technology and programming languages play a pivotal role in shaping the digital landscape. JavaScript is the cornerstone of frontend development, enabling interactive and responsive web applications. It has a rich ecosystem of libraries and frameworks like React, Angular, and Vue.js that simplify development and enhance performance. Additionally, HTML and CSS are fundamental technologies for structuring web content and styling it, respectively. Asynchronous programming techniques, such as Promises and async/await, are essential for managing data flow and enhancing user responsiveness.`,
      feature: [
        "feature 01",
        "feature 02",
        "feature 03",
        "feature 04",
        "feature 05",
        "feature 06",
        "feature 07",
        "feature 08",
      ],
      project: ["https/project01", "https/project01", "https/project01"],
    },
  ];
 

  useEffect( () =>{
   
    const filterServeics = services.filter(one => one.id === id)
    setSingelServices(filterServeics[0])
    console.log(filterServeics)

  }, [id])
   

  return (
    <>
    
    <div id="services" className="Services pt-[100px] ">
        <div className="block px-3 md:ps-[40px]  ">
          <h1 className="text-[36px] font-[600] text-center text-[#fff]">
           {singelServices?.name}
          </h1>
          <div className="divider w-[150px] mx-auto my-1 mt-4 bg-[#EE6A50] h-1"></div>

          <div
            id=""
            className="all-services flex flex-col gap-x-8 gap-y-5 justify-center items-center mt-[60px]"
          > 
        <div>
            
           <h1 className='text-[25px] font-[600] text-[#EE6A50]'> {singelServices?.name} Details  </h1>
           <h5 className='text-[20px] text-[#dedede] py-2'>Services paragrap : {singelServices?.title}</h5>
             {/* ---------------------- feature this services ------------ */}
            <div className="pt-5">
           
            {
                singelServices?.feature?.map((feature, index )=>{
                    return <>
                          <p key={index}>➢ {feature}</p>
                    </>
                })
            }
            </div>
          {/* ---------------- project map ----------- */}
         <h1 className='text-[20px] flex pt-5 relative z-50'>Live Project : <span className='text-amber-700 underline flex flex-wrap gap-3'>
           
            {
                singelServices?.project?.map((pro, index) =>{
                    return <>
                     <a key={index} className='' href=""> project-{index + 1}</a>
                    
                    </>
                })
            }
           </span></h1>

        </div>

        {/* ------------ gradient div------- */}
      <div className="flex justify-between absolute">
        <div className="gradient-rounded-div-left left-[0px] background_color_animation"></div>
        <div className="gradient-rounded-div-right right-[0px] background_color_animation "></div>
      </div>

          </div>
        </div>
      </div>
    
    
    
    </>
  )
}

export default Services;
