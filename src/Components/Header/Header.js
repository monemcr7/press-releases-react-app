import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
const Header = () => {
    return (
        <section className="header" >
            <Navbar expand="lg" fixed="top">
                <a href="#" className="menubar"><img src={process.env.PUBLIC_URL + "/assets/images/Menu_2_.png"}/></a> 
                <Link to='/' className='logo-header'>
                    <img src={process.env.PUBLIC_URL + "/assets/images/Link_logo.png"}/>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav className="">
                    <Nav.Link href="#search"><i className="fas fa-search"></i></Nav.Link>
                    <Nav.Link href="#notification" className="notification"><span className="alert-color"></span><i className="far fa-bell"></i></Nav.Link>
                    <Nav.Link hre="#user" className="userNav">
                        <img src={process.env.PUBLIC_URL + "/assets/images/user.png"}/>
                        <span className="userName">User Name</span> 
                    </Nav.Link>
                    <Nav.Link href="#link"><i className="fas fa-cog"></i></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
        </section>
    )
}

export default Header;