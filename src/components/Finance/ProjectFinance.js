import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import '../Finance/ProjectFinance.css';



function ProjectFinance() {

  const IniciatuProyecto = "images/financiaTuProyecto/iniciatuproyecto-1.jpg"
  const Garantia = "images/financiaTuProyecto/garantia-1.jpg"
  const Contribucion = "images/financiaTuProyecto/contribucion-1.jpg"

  React.useEffect(() => { 
    AOS.init({duration:1500});
    },[]);

  return (
    <div className='cards'>
      <h1  data-aos="zoom-in-up" className='titulo-2' > Financiamos tu Proyecto </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>

            {/*-------------------------Inicia tu Proyecto-------------------------*/}
            <li data-aos="fade-up" className='cards__item'>
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

            {/*-------------------------Garantía en tu inversión-------------------------*/}
            <li data-aos="fade-up" className='cards__item'>
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
                  <h5 className='cards__item__text'> Garantía en tu inversión </h5>
                </div>
              </Link>
            </li>

            {/*-------------------------Contribución sustentable-------------------------*/}
            <li data-aos="fade-up" className='cards__item'>
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

export default ProjectFinance;
