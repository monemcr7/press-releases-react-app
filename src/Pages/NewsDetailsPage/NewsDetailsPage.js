import React  from 'react';
import { NavLink, Link } from 'react-router-dom';
import TopicCard from '../../Components/TopicCard/TopicCard';

const NewsDetailsPage = (info) => {
    let data = info.location.state.info

    let urlImage = data.urlToImage == null ? process.env.PUBLIC_URL + "/assets/images/default.jpg" : data.urlToImage;
    console.log(info) 
    return (
        <React.Fragment>
            <nav className="navbar-link">
                <div className="container">
                    <ul className="list-unstyled">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link" exact >Home</NavLink>
                    </li>

                    <li className="nav-item">&#62;</li>

                    <li className="nav-item">
                        <NavLink to='/news-listing' exact className="nav-link">News</NavLink>
                    </li>

                    <li className="nav-item">&#62;</li>

                    <li className="nav-item">
                        <NavLink to='/news-details' exact className="nav-link active">News Details</NavLink>
                    </li>
                </ul>
                </div>
            </nav>

            <section className="news details-news">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>News Details</h1>
                        </div>
                    </div>
                    <div className="row">
                       <div className="col-12">
                            <div className="news_card">
                                <div className="news-img" style={{backgroundImage: "url(" + urlImage + ")"}}>
                                        {/* <img 
                                        className="d-block w-100"
                                        src={urlImage}
                                        alt={data.title} /> */}
                                </div>
                                <div className="card-content">
                                    <div className="card-actions">
                                    <button type="button"><i className="far fa-heart"></i></button>
                                    <button type="button"><img src={process.env.PUBLIC_URL + "/assets/images/share.png"}
                                        alt="share" /></button>
                                </div>
                                <div className="card-category">
                                      <span>Category Name</span>    
                                </div>
                                <div className="card_title">
                                    {data.title}
                                </div>
                                
                                <div className="card_discretion">
                                    <p>
                                        {data.description}
                                    </p>
                                    <p>
                                    {data.content}
                                    </p>
                                </div>
                                </div>
                            </div>
                        </div>
                                    
                    </div>
                </div>
            </section>

            <section className="topic">
                <div className="container">
                    <div className="col-12">
                        <h2>
                            Related Topics
                        </h2>
                    </div>

                    <div className="col-12">
                        <div className="row">
                            <TopicCard />
                        </div>
                    </div>
                </div>
            </section>     
        </React.Fragment>
    )
}

export default NewsDetailsPage;