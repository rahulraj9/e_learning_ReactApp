
import style from './Courses.module.css'
import coursesData from '../../data/courses.json'
import Card from '../../components/Cards/Card';
import { Link } from 'react-router-dom';


export default function Courses(){
  return (
    <div className={style.courses_container}>
    <div className={style.heading}>
      <h1>Popular Courses</h1>
    </div>
    <div className={style.courses}>
      {coursesData.map((course, index) => {
        return (
          <div key={index} className={style.card_container}>
          <Link to={course.id}>
            <Card
              key={course.id}
              id={course.id}
              title={course.title}
              img={course.img}
            />
            </Link>
          </div>
        );
      })}
    </div>
  </div>
  )
}