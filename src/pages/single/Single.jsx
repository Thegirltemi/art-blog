import "./single.css";
import SideBar from "../../sidebar/sideBar"
import SinglePost from "../../singlePost/singlePost"


export default function Single() {
  return (
    <div className="single">
      <SinglePost/>
      <SideBar/>
    </div>
  )
}
