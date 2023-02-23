import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './categories.css';

const Categories = () => {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories");
            setCats(res.data);
        };
        getCats();
    }, []);

    return (
        <>
            <div className="category">
                {cats.map((c, i) => (
                    <Link key={i} to={`/?cat=${c.name}`} className="link">
                    <i className="far fa-folder"> &nbsp;{c.name}</i>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default Categories