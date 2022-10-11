import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import a from '../images/card-01.jpg';

function Cards() {
  return (
    <div className='cards'>
      <h1 className='titulo-2' > ¡Planes Disponibles!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-11.jpg'
              text='Plan Básico'
              label='Mystery'
              path='/'
            />
            <CardItem
              src='../images/img-11.jpg'
              text='Plan Médio'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='../images/img-11.jpg'
              text='Plan Crack'
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
