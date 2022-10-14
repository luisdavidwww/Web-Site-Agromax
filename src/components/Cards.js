import React from 'react';
import './Cards.css';
import { Link } from 'react-router-dom';
import IniciatuProyecto from '../images/IniciatuProyecto.jpg';
import GarantíadeInversión from '../images/GarantíadeInversión.jpg';
import ContribuciónSustentable from '../images/ContribuciónSustentable.jpg';


function Cards() {
  return (
    <div className='cards'>
      <h1 className='titulo-2' > Financiamos tu Proyecto </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>

            <li className='cards__item'>
              <Link className='cards__item__link' to="#">
                <figure className='cards__item__pic-wrap'>
                  <img
                    className='cards__item__img'
                    alt='Travel Image'
                    /*{ src={'../' + props.src} }*/
                    src={ IniciatuProyecto }
                  />
                </figure>
                <div className='cards__item__info'>
                  <h5 className='cards__item__text'> Inicia tu Proyecto </h5>
                </div>
              </Link>
            </li>

            <li className='cards__item'>
              <Link className='cards__item__link' to="#">
                <figure className='cards__item__pic-wrap'>
                  <img
                    className='cards__item__img'
                    alt='Travel Image'
                    /*{ src={'../' + props.src} }*/
                    src={ GarantíadeInversión }
                  />
                </figure>
                <div className='cards__item__info'>
                  <h5 className='cards__item__text'> Garantía en tu inversión</h5>
                </div>
              </Link>
            </li>

            <li className='cards__item'>
              <Link className='cards__item__link' to="#">
                <figure className='cards__item__pic-wrap'>
                  <img
                    className='cards__item__img'
                    alt='Travel Image'
                    /*{ src={'../' + props.src} }*/
                    src={ ContribuciónSustentable }
                  />
                </figure>
                <div className='cards__item__info'>
                  <h5 className='cards__item__text'>Contribución sustentable</h5>
                </div>
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
