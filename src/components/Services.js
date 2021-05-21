import React, { Component } from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title'

export default class Services extends Component {
    state={
services:[
    {
        icon:<FaCocktail/>,
        title:"free cocktails",
        info:'lorem sdflafd asfh ajkd sasdnf anfns ehwefeq afcdns nanf asdf sdfa eijr qej fna! '
    },   
    {
        icon:<FaHiking/>,
        title:"Endless Hiking",
        info:'lorem sdflafd asfh ajkd sasdnf anfns ehwefeq afcdns nanf asdf sdfa eijr qej fna! '
    },         
        
    {
        icon:<FaShuttleVan/>,
        title:"Free shuttle",
        info:'lorem sdflafd asfh ajkd sasdnf anfns ehwefeq afcdns nanf asdf sdfa eijr qej fna! '
    },
    {
        icon:<FaBeer/>,
        title:"Strongest Beer",
        info:'lorem sdflafd asfh ajkd sasdnf anfns ehwefeq afcdns nanf asdf sdfa eijr qej fna! '
    }
    ]
    }
    render() {
        return (
            <sectoin className ="services" id="services_sec">
                <Title title='services'/>
                <div className="services-center">
                {this.state.services.map((item, index) => {
                    return (
                        <article key ={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    );
                })}

                </div>
                
            </sectoin>
        );
    }
}
