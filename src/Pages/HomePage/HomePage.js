import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Carousels from '../../Components/Carousels/Carousels';
import NewsCard from '../../Components/NewsCard/NewsCard';

const HomePage = () => {
    const [cards,setCards]=useState([]);
    const [loading, setLoading] = useState(false);
    const [showOnPage] = useState(true);
    // const [cardNewsNum] = useState();
    const getData=()=>{
        setLoading(true);
        fetch('/data.json'
        ,{
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
                'Access-Control-Request-Method': 'GET, POST, DELETE, PUT, OPTIONS',
                'Accept': 'application/json'
            }
            }
            )
            .then(function(response){
                // console.log(response)
                return response.json();
            })
            .then(function(myJson) {
                // console.log(myJson.sourceCategory);
                
                const updatedCard = myJson.articles.filter(cards => cards.showOnHomepage == showOnPage)
                .map((cards, index) => {
                    return {
                        ...cards
                    }
                });
                const currentPosts = updatedCard.slice(0, 6);
                setCards(currentPosts);
                // console.log("test" + updatedCard)  
                setLoading(false)
            });
        }
  
    useEffect(()=>{
        
        getData();
    },[]);

    // console.log(cards)

    let cardNewsRow;
    if (cards) {
            cardNewsRow = cards.map(card => {
                const date = new Date(card.publishedAt).toDateString();
                return <NewsCard
                title={card.title}
                key={card.id}
                description={card.description}
                publishedAt = {date} 
                urlToImage = {card.urlToImage}
                loading = {loading}
                moreInfo = {card}
                content = {card.content}
                id = {card.id}
                />
            });
    }
      
    return (
        <React.Fragment>
            <Carousels/>
            <section className="news">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h1>Latest News</h1>
                        </div>
                        <div className="col-6 text-right">
                            <Link to="/news-listing" className="view-link">View All <i className="fas fa-long-arrow-alt-right"></i></Link>
                        </div>
                    </div>
                    <div className="row">
                        {cardNewsRow}
                    </div>
                </div>
            </section>
            <section className="help-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2>
                                How we have helped
                            </h2>
                            <p>
                                See how Al Foundation have promoted change locally and to the world
                            </p>
                           <img 
                        className="d-block"
                        src={process.env.PUBLIC_URL + "/assets/images/img.png"}
                        alt="image" />
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default HomePage;
