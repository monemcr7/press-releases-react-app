import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import HomePage from '../../Pages/HomePage/HomePage';
import NewsListingPage from '../../Pages/NewsListingPage/NewsListingPage';
import NewsDetailsPage from '../../Pages/NewsDetailsPage/NewsDetailsPage';
import ScrollToTop  from '../../Components/ScrollToTop/ScrollToTop';

const MainApplicationLayout = () => {
    return (
        <React.Fragment>
            <ScrollToTop />
            <Header />
            <Route path='/' component={HomePage} exact />
            <Route path='/news-listing' component={NewsListingPage}/>
            <Route path='/news-details:id' component={NewsDetailsPage}/>
            <Footer />
        </React.Fragment>
    )
}

export default MainApplicationLayout;