import Slider from "./Slider";
import "./reviewsClient.css";

import image01 from "../../../app/assets/reviews/01.jpg";
import image02 from "../../../app/assets/reviews/02.jpg";

export const ReviewsClient = () => {
  const datas = [
    {
      image: image01,
      name: "Lorem bc",
      datetitle: "CEO, Luck IT",
      title01:
        "An outstanding full-stack web developer with a versatile skill set. Proficient in both front-end and back-end technologies, consistently delivering robust and visually appealing web applications. Strong problem-solving abilities and a keen eye for detail. Collaborative team player, with excellent communication skills. Proven track record in meeting project goals and deadlines. A top choice for comprehensive web development projects",
    },
    {
      image: image02,
      name: "Sheck Ali",
      datetitle: "CEO, Today Ltd",
      title01:
        "An outstanding full-stack web developer with a versatile skill set. Proficient in both front-end and back-end technologies, consistently delivering robust and visually appealing web applications. Strong problem-solving abilities and a keen eye for detail. Collaborative team player, with excellent communication skills. Proven track record in meeting project goals and deadlines. ",
    },
    {
      image: image01,
      name: "Lorem bc",
      datetitle: "CEO, Bangla IT",
      title01:
        "An outstanding full-stack web developer with a versatile skill set. Proficient in both front-end and back-end technologies, consistently delivering robust and visually appealing web applications. Strong problem-solving abilities and a keen eye for detail. Collaborative team player, with excellent communication skills. Proven track record in meeting project goals and deadlines. A top choice for comprehensive web development projects",
    },
  ];
  return (
    <div id="reviews" className=" flex justify-center items-center py-[20px]">
      <Slider slides={datas} datas={datas} size="large" slideInterval={6} />
    </div>
  );
};
