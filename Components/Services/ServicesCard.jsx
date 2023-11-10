import Image from "next/image";
import frontEndImage from "../../app/assets/services/icon-lcd.png";
import Link from "next/link";

export const ServicesCard = () => {
  const services = [
    {
      id: "F1",
      name: "Front-end Web Development",
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
      name: "Back-end Web Development",
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
      name: "AWS Web Services",
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

  return (
    <>
      {services?.map((service) => (
        <>
          <div
            key={service?.id}
            className="services-box overflow-hidden md:w-full py-5 p-3 text-justify relative z-50"
          >
            <Image
              className="object-contain services-image"
              src={service?.image}
              alt=""
            />
            <div className="py-[34px]">
              <h1 className="services-text text-[18px] font-[600]  relative z-50 p-[3px]">
                {service?.name}
              </h1>
            </div>
            <p className="pb-5 text-[#5F6069]">
              Duis molestie enim mattis gravida viverra. Fusce ut eros mattis
              gravida viverra. Fusce ut eros augue. Sed id mauris vel neque
            </p>

            <span className="read-text  ms-[-80px] flex cursor-pointer">
              <Link href={`/service/${service?.id}`}>
                <span className="Readmore-text flex items-center justify-start text-[12px] font-[800] ">
                  {" "}
                  Read more
                  <span className="Redmore-left-width w-[45px] h-[1.6px] bg-[#F26C4F]  ms-[6px] mt-[6px]"></span>
                </span>
              </Link>
            </span>
          </div>
        </>
      ))}
    </>
  );
};
