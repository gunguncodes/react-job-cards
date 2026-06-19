import './App.css';
import { FaRegHeart } from "react-icons/fa";
function Card(props) {
  return (
    <div>
      <div className = "card">
        <div className="top">
            <img src={props.brandLogo} alt={props.company}/>

         <button className="save-btn">
           <FaRegHeart />
            Save  
         </button>
        </div>
       
        <h3>{props.company}</h3> 
       
        <h2>{props.role}</h2>

        <div className="tags">
          <span>Full time</span>
          <span>Junior Level</span>
        </div>

        <div className = "card-footer">
          <div>
            <h3>{props.salary}</h3>
            <p> {props.location}</p>
          </div>
          <button>Apply</button>
        </div>
        
      </div>
    </div>
  )
}
export default Card;