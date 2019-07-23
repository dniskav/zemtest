import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MessageBar from '../../components/MessageBar';
import SendCandidateForm from '../../components/SendCandidateForm';
import VotingBox from '../../components/VotingBox';
import { Provider } from 'unstated';
import '../../styles/main.css';

const Home = () => (
    <div className="App">
        <Provider>
            <Header />
            <MessageBar />
            <VotingBox />
            <SendCandidateForm />
            <Footer />
        </Provider>
    </div>
);

export default Home;
