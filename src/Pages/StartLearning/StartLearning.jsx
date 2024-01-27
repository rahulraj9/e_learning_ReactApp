import { Link, Outlet, useParams } from "react-router-dom";
import style from "./StartLearning.module.css";
import data from "../../data/courses.json";
export default function StartLearning() {
  const params = useParams();
  console.log("params",params)
  let course = data.find((item) => item.id === params.id);
  return (
    <>
      {course ? (
        <div className={style.courses_container}>
          <div className={style.top_head}>
            {/* Task4: Create Link to go back to the Courses page */}
            <h2 className={style.back}>
              <Link to="/courses">{"<<"}</Link>
            </h2>

            {/* Task4: Title of the Course */}
            <h1 className={style.heading}>{params.course}</h1>
          </div>

          <div className={style.chapter_box}>
            <div className={style.chapters}>
              <h1>Chapters</h1>
              <hr />
              <ul>
                {course.chapters.map((item, i) => {
                  return (
                    <div className={style.chapterId} key={i}>
                      <Link to={`chapter/${item.chapter}`}>{item.title}</Link>
                    </div>
                  );
                })}
              </ul>
            </div>

            <div className={style.courses}>
              <Outlet context={{...course}}/>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
