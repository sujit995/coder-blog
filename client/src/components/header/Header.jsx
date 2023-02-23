import "./header.css";
import Background from "../../images/banner.png";

export default function Header() {
  return (
    <section className="banner" id="banner" style={{backgroundImage: `url(${Background})`}}>
      <div className="content">
        <h3>explore the nature</h3>
        <p>One touch of nature makes the whole world kin</p>
        <a href="#" className="btn">Write your blogs</a>
      </div>
    </section>
  );
}
