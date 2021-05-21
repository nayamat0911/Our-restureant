import React from 'react'
import Hero from '../components/Hero';
import Banner from "../components/Banner";
import {Link} from 'react-router-dom';
import RoomContainer from'../components/RoomContainer';
import Footer from './Footer'

const Rooms = () => {
    return (
        <>
        <Hero hero="roomsHero">
            <Banner title="Our Rooms">
                <Link to='/' className='btn-primary'>
                    retrun Room
                </Link>
            </Banner>
        </Hero>
        <RoomContainer/>
        <Footer/>
        </>
        
    )
}

export default Rooms
