import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import a from '../images/card-01.jpg';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/card-01.jpg'
              text='Plan Básico'
              label='Mystery'
              path='/'
            />
            <CardItem
              src='images/card-02.jpg'
              text='Plan Médio'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/card-03.jpg'
              text='Plan crack'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
