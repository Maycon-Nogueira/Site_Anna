import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Avaliacoes.css';

// Componente para estrelas
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i <= rating ? "#fb5012" : "#d2e6c7"} xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    );
  }
  return <div className="star-rating">{stars}</div>;
};

// Dados dos depoimentos
const depoimentos = [
  {
    id: 1,
    nome: "Maycon Nogueira",
    localizacao: "São Paulo, SP",
    foto: "/foto_maycon.jpeg",
    perfilInstagram: "https://www.instagram.com/nogmaycon/",
    rating: 5,
    texto: "Depois de anos lutando contra a compulsão alimentar, finalmente encontrei equilíbrio! As consultas online foram essenciais para minha mudança. Obrigada, Dra. Anna! ❤️ #nutriçãoquetransforma",
    data: "21/06/2025"
  },
  {
    id: 2,
    nome: "João P.",
    localizacao: "Rio de Janeiro, RJ",
    foto: "/cenoura.png",
    perfilInstagram: "https://instagram.com/joaop_saude",
    rating: 5,
    texto: "Perdi 12kg em 6 meses com a Dra. Anna! O acompanhamento foi incrível e aprendi a ter uma relação saudável com a comida. Recomendo demais! 💪",
    data: "22/02/2024"
  },
  {
    id: 3,
    nome: "Ana L.",
    localizacao: "Belo Horizonte, MG",
    foto: "/morango.png",
    perfilInstagram: "https://instagram.com/anal_nutri",
    rating: 5,
    texto: "Como atleta, precisava de uma nutrição específica. A Dra. Anna entendeu perfeitamente minhas necessidades e melhorou muito meu desempenho! 🏃‍♀️",
    data: "08/03/2024"
  },
  {
    id: 4,
    nome: "Carlos M.",
    localizacao: "Curitiba, PR",
    foto: "/brocolis.png",
    perfilInstagram: "https://instagram.com/carlosm_saude",
    rating: 5,
    texto: "Tinha problemas de digestão há anos. Com a orientação da Dra. Anna, descobri intolerâncias e hoje me sinto muito melhor! 🙏",
    data: "01/03/2024"
  },
  {
    id: 5,
    nome: "Fernanda R.",
    localizacao: "Salvador, BA",
    foto: "/cebola.png",
    perfilInstagram: "https://instagram.com/fernandar_nutri",
    rating: 5,
    texto: "Consultas online que realmente funcionam! A Dra. Anna é super atenciosa e me ajudou a perder peso de forma saudável. Amo! ❤️",
    data: "14/02/2024"
  },
  {
    id: 6,
    nome: "Roberto S.",
    localizacao: "Porto Alegre, RS",
    foto: "/repolho.png",
    perfilInstagram: "https://instagram.com/robertos_saude",
    rating: 5,
    texto: "Aos 45 anos, finalmente aprendi a me alimentar corretamente. A Dra. Anna mudou minha vida! Energia renovada e saúde em dia! 💪",
    data: "28/02/2024"
  }
];

const DepoimentoCard = ({ depoimento }) => (
  <div className="depoimento-card">
    <div className="depoimento-header">
      <a 
        href={depoimento.perfilInstagram} 
        target="_blank" 
        rel="noopener noreferrer"
        className="foto-container"
      >
        <img 
          src={depoimento.foto} 
          alt={depoimento.nome} 
          className="foto-paciente"
          onError={(e) => {
            e.target.src = '/kiwi.png'; // Fallback para imagem local
          }}
        />
        <div className="instagram-badge">
          <img src="/instagram-avaliacoes.jpg" alt="Instagram" />
        </div>
      </a>
      <div className="info-paciente">
        <h4 className="nome-paciente">{depoimento.nome}</h4>
        <p className="localizacao">{depoimento.localizacao}</p>
      </div>
    </div>
    
    <div className="depoimento-rating">
      <StarRating rating={depoimento.rating} />
      <span className="data-depoimento">{depoimento.data}</span>
    </div>
    
    <div className="depoimento-texto">
      <p>"{depoimento.texto}"</p>
    </div>
  </div>
);

const Avaliacoes = () => {
  const [useCarousel, setUseCarousel] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setUseCarousel(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="avaliacoes" className="avaliacoes-section">
      <div className="avaliacoes-container">
        <div className="avaliacoes-header">
          <h2>Transformações Reais, Resultados Autênticos</h2>
          <p className="avaliacoes-subtitle">Veja o que nossos pacientes compartilham no Instagram</p>
        </div>

        <div className="carrossel-container">
          {useCarousel ? (
            <>
              <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                centeredSlides={true}
                breakpoints={{
                  768: {
                    slidesPerView: 2.2,
                    centeredSlides: false,
                  },
                }}
                autoplay={{
                  delay: 8000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                pagination={{
                  clickable: true,
                  el: '.swiper-pagination',
                }}
                loop={true}
                className="avaliacoes-swiper"
              >
                {depoimentos.slice(0, 3).map((depoimento) => (
                  <SwiperSlide key={depoimento.id}>
                    <DepoimentoCard depoimento={depoimento} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
              <div className="swiper-pagination"></div>
            </>
          ) : (
            <div className="avaliacoes-static-grid">
              {depoimentos.slice(0, 3).map((depoimento) => (
                <DepoimentoCard key={depoimento.id} depoimento={depoimento} />
              ))}
            </div>
          )}
        </div>

        <div className="avaliacoes-footer">
          <p className="texto-apoio">Depoimentos reais de nossos pacientes no Instagram</p>
          <a 
            href="https://www.instagram.com/annacastroz/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-instagram"
          >
            Ver mais no Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Avaliacoes; 