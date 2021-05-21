import React from 'react'
import Hero from "../components/Hero";
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRoom from '../components/FeaturedRoom';
import Footer from './Footer';




const Home = () => {
    return (
        
        <>
            <Hero hero="defaultHero">
                <Banner title="Luxurious rooms" subtitle="deluxe rooms starting at $299">
                    <Link to ='/rooms' className="btn-primary">
                        Our Rooms
                    </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRoom/>
            <Footer/>
            
        </>
        
    )
}

export default Home
