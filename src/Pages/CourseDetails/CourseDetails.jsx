import React from "react";
import style from "./CourseDetails.module.css";
import data from "../../data/courses.json";
import { useParams } from "react-router-dom";
export default function CourseDetails() {
  const parms = useParams();
  let courseDetails = data.find((item) => item.id === parms.id);
  return (
    <>
      {courseDetails ? (
        <div className={style.courses_container}>
          <div className={style.card_container}>
            <div className={style.card_image}>
              <div className={style.image_container}>
                <img src={courseDetails.img} alt="icons" />
              </div>
            </div>
            <div className={style.card_content}>
              <h1 className={style.card_title}>{courseDetails.title}</h1>
              <p className={style.card_description}>{courseDetails.description}</p>
            </div>
          </div>
          <button className={style.button}>Start Learning</button>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
