import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MessageBar from '../../components/MessageBar';
import VotingBox from '../../components/VotingBox';
import SendCandidateForm from '../../components/SendCandidateForm';
import '../../styles/main.css';

const Home = () => (
    <div className="App">
        <Header />
        <MessageBar />
        <VotingBox />
        <SendCandidateForm />
        <Footer />
    </div>
);

export default Home;
