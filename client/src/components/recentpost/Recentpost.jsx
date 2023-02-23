import React, { useState, useEffect } from 'react';
import './recentpost.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import moment from 'moment';

const Recentpost = () => {
    const PF = "http://localhost:5000/images/";

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/posts");
            setPosts(res.data);
        };
        fetchPosts();
    }, []);


    return (
        <div className="recentPost">
            <h1>Recent Posts</h1>
            <hr className="line" />
            {
                posts.sort().slice(0, 3).map((p, i) => {
                    return (
                        <Link key={i} to={`/post/${p._id}`} className="recentPostWrapper">
                            {p.photo && <img className="recentPostImg" src={PF + p.photo} alt="" />}
                            <div className="postDetails">
                                <h3 className="posttitle">{p.title.substring(0, 20)+"..."}</h3>
                                <div className="postdate">
                                    <i className="far fa-clock"></i>
                                    <span style={{ paddingLeft: ".5rem" }}>{moment(p.createdAt).fromNow()}</span>
                                </div>
                                <p className="posttext" dangerouslySetInnerHTML={{ __html: p.desc.substring(0, 40)+"..." }}></p>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Recentpost