import React , { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import NewsCard from '../../Components/NewsCard/NewsCard';
import SearchBar from '../../Components/SearchBar/SearchBar';
import Pagination from '../../Components/Pagination/Pagination';

const NewsListingPage = () => {
    const [cards,setCards]=useState([]);
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [newsPerPage] = useState(9);
    
    const [categoryValue, setCategoryValue] = useState('');
    const [search, setSearch] = useState("");

    const nameForm = useRef(null);

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
                const updatedCard = myJson.articles.map(cards => {
                    return {
                        ...cards
                    }
                });

                setCards(updatedCard);
                setCategory(myJson.sourceCategory);
                // console.log(myJson.sourceCategory)  
                setLoading(false);
            });
        }
    
    useEffect(()=>{
        getData();
    },[]);

    

    const filterDropdown =  () => {
        if(!categoryValue) {
            // console.log("All");
            return cards;
        }
        return cards.filter( result => {
            return result.sourceID == categoryValue
        });
     }

    //  console.log(filterDropdown())
    // setCards(filterDropdown())
    const finalResult = filterDropdown();
    const filterInput = finalResult.filter (i => {
        return i.title.toLowerCase().includes(search.toLowerCase())
    });
    
    // Get Current Cards
    const indexOfLastCard = currentPage * newsPerPage;
    const indexOfFirstCard = indexOfLastCard - newsPerPage;
    const currentCards = filterInput.slice(indexOfFirstCard, indexOfLastCard);
    //Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);


  
     const keyPress = (e) => {
        // e.preventDefault();
        if(e.keyCode == 13){
        //    console.log('value', e.target.value);
           setSearch(e.target.value)
           e.preventDefault();
           // put the login here
        } else if (e.keyCode == 8) {
            setSearch(e.target.value)
        }
     }

     const handleClickEvent = (e) => {
        
        const form = nameForm.current
        // alert(`${form['search'].value}`)
        setSearch(`${form['search'].value}`);
        // console.log(searchBtn)
        e.preventDefault();
        
     }

    
     
    //  console.log(filterInput)
    let cardNewsRow;
    if (finalResult) {
        cardNewsRow = currentCards.map(card => {
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

            <nav className="navbar-link">
                <div className="container">
                    <ul className="list-unstyled">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link" exact>Home</NavLink>
                    </li>
                    <li className="nav-item">&#62;</li>
                    <li className="nav-item">
                        <NavLink to='/news-listing' exact className="nav-link">News</NavLink>
                    </li>
                </ul>
                </div>
            </nav>

            <SearchBar category={category}
             categoryValue={categoryValue}
              onChange={(e) => setCategoryValue(e.target.value)}
              keyPress={keyPress}
              click={search}
              handleClickEvent={handleClickEvent}
              nameForm={nameForm}
              />
            
            <section className="news">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>News</h1>
                        </div>
                    </div>
                    <div className="row">
                    {cardNewsRow}
                    <div className="col-12 d-flex justify-content-center">
                    <Pagination 
                    newsPerPage={newsPerPage}
                    totalCards={filterInput.length}
                     paginate = {paginate}
                     currentPage={currentPage}
                     />
                    </div>
                    </div>
                </div>
            </section>        
        </React.Fragment>
    )
}

export default NewsListingPage;
