import React from 'react';
import Header from '../components/Header';
import '../styles/globals.css';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>Welcome to My Portfolio</h1>
        <p>This is a showcase of my work and projects.</p>
      </main>
    </div>
  );
};

export default Home;