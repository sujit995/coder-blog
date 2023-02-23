import React from 'react'
import "./footer.css";
const Footer = () => {
    return (
        <section className="footer">
            <div className="follow">
                <a href="#" className="fab fa-facebook-f"></a>
                <a href="#" className="fab fa-twitter"></a>
                <a href="#" className="fab fa-instagram"></a>
                <a href="#" className="fab fa-linkedin"></a>
            </div>
            <div className="credit">created by <span>Sujit Mishra</span> | all rights reserved</div>
        </section>
    )
}

export default Footer