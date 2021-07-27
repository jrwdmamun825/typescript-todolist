import React from 'react';
import './App.css';
import SContactList from './Components/SContactList/SContactList';
import NewsComponent from './Components/NewsComponent/NewsComponent';


function App() {
  return (
    <div className="mt-3">
      <header className="text-center">
        <h1 className="text-primary mb-4">TypeScript Todo Apps </h1>
        <SContactList></SContactList>
      </header>
      <section className="mt-5">
        <NewsComponent></NewsComponent>
      </section>
    </div>
  );
}

export default App;
