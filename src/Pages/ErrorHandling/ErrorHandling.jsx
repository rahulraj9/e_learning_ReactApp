import style from './ErrorHandling.modules.css'
import { useLocation, useNavigate } from "react-router-dom";
export default function ErrorHandling(){
  const location = useLocation();
  const navigate = useNavigate();
  return(
      <div className={style.errorPage}>
      <h1>Oops! Something went Wrong.</h1>
      <h2>Page Not Found</h2>
      <h4>
        The page <code>{location.pathname}</code> does not exist.
      </h4>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go to Home
      </button>
    </div>
  )
}