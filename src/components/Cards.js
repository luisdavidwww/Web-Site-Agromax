import React from 'react';
import './Cards.css';
import { Link } from 'react-router-dom';
import IniciatuProyecto from '../images/iniciatuproyecto-1.jpg';
import Garantia from '../images/garantia-1.jpg';
import Contribucion from '../images/contribucion-1.jpg';


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
                    alt='Inicia tu Proyecto'
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
                    alt='Garantia de Inversión'
                    /*{ src={'../' + props.src} }*/
                    src={ Garantia }
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
                    alt='Contribución'
                    /*{ src={'../' + props.src} }*/
                    src={ Contribucion }
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
