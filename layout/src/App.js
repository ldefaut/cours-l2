import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './user.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  render() {
    // const { error, isLoaded, items } = this.state;
    const pic = data.results[0].picture.large;
    const ardess = "habitant au " + data.results[0].location.street.number + " " + data.results[0].location.street.name + ", " + data.results[0].location.city + " " + data.results[0].location.country;
    const nom = data.results[0].name.title + " " + data.results[0].name.first + " " + data.results[0].name.last;
    const email = data.results[0].email;
    const mystyle = {
      backgroundImage : pic,
    };
    console.log(pic)
    
    return (
        

      <article className="card card--2" style={{backgroundImage: pic}}>
        <div className="card__info-hover">
            <div className="card__clock-info">
              <span className="card__time">5 min</span>
            </div>
          
        </div>
        <div className="card__img" data-testid="img" style={{backgroundImage: `url(${pic})`}}></div>
        <a href="#" className="card_link">
           <div className="card__img--hover" style={{backgroundImage: `url(${pic})`}}></div>
         </a>
        <div className="card__info">
          <span className="card__category">  {nom}</span>
          <h5 className="card__title" data-testid='adresse'>{ardess}</h5>
          <span className="card__by"><a href={email} className="card__author" title="author">Email</a></span>
        </div>
      </article>
    );
  }
}


export default App;
