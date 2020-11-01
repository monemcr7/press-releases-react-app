import React from 'react';

const TopicCard = () => {
    return (
        <React.Fragment>
            <div className="col-md-4">
                <div className="topic-card">
                    <img src={process.env.PUBLIC_URL + "assets/images/img1.png"} alt="img" />
                    <div className="card-content">
                        <span>Category</span>
                        <h3>New Artificial Intelligence Apps</h3>
                        <a>View Details <i className="fas fa-long-arrow-alt-right"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="topic-card">
                    <img src={process.env.PUBLIC_URL + "assets/images/img2.png"} alt="img" />
                    <div className="card-content">
                        <span>Category</span>
                        <h3>Technology Development Seminar</h3>
                        <a>View Details <i className="fas fa-long-arrow-alt-right"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="topic-card">
                    <img src={process.env.PUBLIC_URL + "assets/images/img3.png"} alt="img" />
                    <div className="card-content">
                        <span>Category</span>
                        <h3>Next Step Of IOT [Internet O Things]</h3>
                        <a>View Details <i className="fas fa-long-arrow-alt-right"></i></a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default TopicCard;