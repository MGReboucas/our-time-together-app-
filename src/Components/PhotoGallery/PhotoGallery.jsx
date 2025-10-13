import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import './PhotoGallery.css'
//imports das photos
import Foto1 from '../../assets/images/foto1.png'
import Foto2 from '../../assets/images/foto2.png'
import Foto3 from '../../assets/images/foto3.png'
import Foto4 from '../../assets/images/foto4.png'
import Foto5 from '../../assets/images/foto5.png'
import Foto6 from '../../assets/images/foto6.png'
import Foto7 from '../../assets/images/foto7.png'
import Foto8 from '../../assets/images/foto8.png'
import Foto9 from '../../assets/images/foto9.png'
import Foto10 from '../../assets/images/foto10.png'
import Foto11 from '../../assets/images/foto11.png'
import Foto12 from '../../assets/images/foto12.png'

export default function PhotoGallery() {
  //função de array photos
  const photos = [
    { id: 1, src: Foto1, alt: 'jantar no Natal Shopping' },
    { id: 2, src: Foto2, alt: 'Corrida Via costeira' },
    { id: 3, src: Foto3, alt: 'Dia da doideira no arena' },
    { id: 4, src: Foto4, alt: 'Viagem a pipa' },
    { id: 5, src: Foto5, alt: 'Andando na Tr4' },
    { id: 6, src: Foto6, alt: 'Açai da Doideira' },
    { id: 7, src: Foto7, alt: 'Caçamba da torosexuada' },
    { id: 8, src: Foto8, alt: 'Genipabu perto do inicio' },
    { id: 9, src: Foto9, alt: 'Reencontro da gente' },
    { id: 10, src: Foto10, alt: 'Natal Shopping de novo' },
    { id: 11, src: Foto11, alt: 'Cinema com meu amor' },
    { id: 12, src: Foto12, alt: 'Cinema' },
  ]

  return (
    <div className="photo-gallery">
      <div className="photo-Text">
        <h2 className="photo-title">Galeria do nosso amor:</h2>
        <p className="photo-subtitle">
          Olhar para trás e ver o quanto crescemos, rimos e nos tornamos
          melhores juntos é a minha maior alegria. Você é a minha melhor
          decisão, meu porto seguro e meu amor para todas as vidas.
        </p>
      </div>
      <div className="photos-grid">
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={3000}
          swipeable={true}
          emulateTouch={true}
        >
          {photos.map(photo => (
            <div key={photo.id} className="carousel-item">
              <img src={photo.src} alt={photo.alt} className="carousel-image" />
              <p className="legend">{photo.alt}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}
