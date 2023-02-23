import { Link } from "react-router-dom";
import "./post.css";
import moment from 'moment';

export default function Post({ post }) {
    const PF = "http://localhost:5000/images/";

    return (
        <>
            <div className="card">
                <div className="card__header">
                    {post.photo && <img src={PF + post.photo} alt="card__image" className="card__image" width="600" />}
                </div>
                <div className="card__body">
                    <span className="tag tag-red">{post.categories}</span>
                    <h4>{post.title}</h4>
                    <p dangerouslySetInnerHTML={{ __html: post.desc.substring(0, 150)+"..." }}></p>
                    <Link to={`/post/${post._id}`} className="blogLink">[Read More...]</Link>
                </div>
                <div className="card__footer">
                    <div className="user">
                        <div className="user__info">
                            <h5>{post.username}</h5>
                            <small>{moment(post.createdAt).fromNow()}</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}