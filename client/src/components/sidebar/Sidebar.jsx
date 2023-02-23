import "./sidebar.css";
import user from '../../images/user.jpg';
import Categories from "../categories/Categories";
import Recentpost from "../recentpost/Recentpost";


export default function Sidebar() {

  return (
    <div className="sidebar">
      <Recentpost />
      <div className="categories">
        <h1>Categories</h1>
        <hr className="line" />
        <Categories />
      </div>
    </div>
  );
}
