import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

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
              path=''
            />
            <CardItem
              src='../images/img-11.jpg'
              text='Plan Médio'
              path=''
            />
            <CardItem
              src='../images/img-11.jpg'
              text='Plan Crack'    
              path=''
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
