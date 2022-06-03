import React from 'react'
import './HomeScreen.css';
import NavBar from '../NavBar';
import Banner from '../Banner';
import Row from '../Row';
import requests from '../requests';

export default function HomeScreen() {
    return (
        <div className='homeScreen'>
            <NavBar />
            <Banner />
            <Row title='Netflix Originals' fetchUrl={requests.fetchOriginals} isLargeRow />
            <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
            <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
            <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
            <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
            <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
            <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />


        </div>
    );
};
