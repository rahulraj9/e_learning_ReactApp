import styles from './Chapter.module.css'
import {useParams,useOutletContext} from 'react-router-dom'
export default function Chapter() {
  const  params = useParams()
  const course = useOutletContext()
  console.log(course)
  // console.log("params",params.chapter)
  const chapter = course.chapters.find(item=>String(item.chapter) === params.chapter
  )
  console.log("chapter",chapter)
  return (
    <div>
      <h1>{chapter.title}</h1>
      <h2>{chapter.description}</h2>
      <p className={styles.para}>{chapter.details}</p>
      <br />
      <br />
      <div className={styles.videos}>
        {/*TASK:5 CHAPTER VIDEO SRC SHOULD BE GIVEN IN THE SOURCE */}
        <iframe
          width="800"
          height="560"
          src="https://classroom.codingninjas.com/app/classroom/me/22756/content/514929/offering/7882974?leftPanelTabValue=PROBLEM&customSource=studio_nav"
          title="React Video"
          frameborder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
