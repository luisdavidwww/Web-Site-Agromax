import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1 className='titulo-2' > Financiamos tu Proyecto </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-11.jpg'
              text='Inicia tu proyecto'
              path='/#' 
              /*path=''*/
            />
            <CardItem
              src='../images/img-11.jpg'
              text='Garantía en tu inversión'
              path='/#'
            />
            <CardItem
              src='../images/img-11.jpg'
              text='Contribución sustentable'
              path='/#'  
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
