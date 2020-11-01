import React from 'react';
import {Link, useHistory } from 'react-router-dom';

const NewsCard = ({title, description,urlToImage,publishedAt, loading, moreInfo, content, id}) => {
    const history = useHistory();
    if(loading) {
        return <h2>Loading......</h2>
    }
    let urlImage = urlToImage == null ? process.env.PUBLIC_URL + "assets/images/default.jpg" : urlToImage;

    let descriptionDefault = description == '' ? content : description;
    return (
        <React.Fragment>
            <div className="col-lg-4 col-md-6 col-12" >
                    <div className="news_card">
                        <div className="news-img">
                            <img 
                            className="d-block w-100"
                            src={urlImage}
                            alt={title} />
                        </div>
                        <div className="card-content">
                            <div className="card-actions">
                            <button type="button"><i className="far fa-heart"></i></button>
                            <button type="button"><img src={process.env.PUBLIC_URL + "assets/images/share.png"}
                            alt="share" /></button>
                        </div>
                        <div className="card_title">
                            <Link to="/news-listing">
                                {title}
                            </Link>
                        </div>
                        <div className="card-label">
                            <span>News</span>    
                        </div>
                        <div className="card_discretion">
                            <p>
                            {descriptionDefault}
                            </p>
                            <button
                                onClick={() => history.push({
                                    pathname:`/news-details${id}`,
                                     state: {info: moreInfo }
                                     })}
                            >
                                Read More <i className="fas fa-long-arrow-alt-right"></i>
                            </button>
                        </div>
                        <div className="card_date">
                            <i className="far fa-calendar-alt"></i> <span>{publishedAt}</span>
                        </div>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    )
}

export default NewsCard;
