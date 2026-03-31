import './Home.css'

const Home = () => {
  return (
    <main>
      
      {/* HERO */}
      
      <section id="home" className="hero">
        
        <h1>Bem-vindo à HENRYCAR</h1>
        <p>Carros e motos com os melhores preços</p>
        <button onClick={() => document.getElementById('cards').scrollIntoView({ behavior: 'smooth' })}> {/* scrol pra ROLAGEM  */}
          Ver veículos
        </button>
      </section>
      

      {/* SOBRE A EMPRSA */}
      <section id="sobre" className="about">
        <div className="about-container">
          <div className="about-text">
            <h2>Sobre a HenryCar</h2>
            <p>
              A <strong>HenryCar</strong> é uma empresa especializada na venda de carros e motos de alta qualidade. 
              Nosso objetivo é oferecer veículos confiáveis, modernos e com preços competitivos, garantindo 
              uma experiência de compra transparente e segura.
            </p>
            <p>
              Com anos de experiência no mercado automotivo, nossa equipe está pronta para atender 
              cada cliente de forma personalizada, ajudando na escolha do veículo ideal.
            </p>
          </div>

          <div className="about-image">
            <img src="/logoHenry2.png" alt="Veículos HenryCar" />
          </div>
        </div>
      </section>

      {/* CARDSS */}
      <section id="cards" className="cards">
  <h2 className="section-title">Nossos Veículos</h2>

  <div className="cards-container">

    {/* CARROS */}
    <div className="card">
      <img src="/mercedesP.jpg" alt="Mercedes AMG SUV" />
      <div className="card-content">
        <h3>Mercedes AMG SUV</h3>
        <p>$ 350.000</p>
        <button>Ver detalhes</button>
      </div>
    </div>

    <div className="card">
      <img src="/mercedes2.jpg" alt="Mercedes Sport" />
      <div className="card-content">
        <h3>Mercedes Sport</h3>
        <p>$ 320.000</p>
        <button>Ver detalhes</button>
      </div>
    </div>

    <div className="card">
      <img src="/mercedes5.jpg" alt="Mercedes Black" />
      <div className="card-content">
        <h3>Mercedes Black</h3>
        <p>$ 400.000</p>
        <button>Ver detalhes</button>
      </div>
    </div>

    <div className="card">
      <img src="/mercedesLuxo.jpg" alt="Mercedes Luxo" />
      <div className="card-content">
        <h3>Mercedes Luxo</h3>
        <p>$ 450.000</p>
        <button>Ver detalhes</button>
      </div>
    </div>

    <div className="card">
      <img src="/mustang.jpg" alt="Mustang" />
      <div className="card-content">
        <h3>Mustang</h3>
        <p>$ 450.000</p>
        <button>Ver detalhes</button>
      </div>
    </div>

    <div className="card">
      <img src="/mclaren.jpg" alt="McLaren" />
      <div className="card-content">
        <h3>McLaren</h3>
        <p>$ 900.000</p>
        <button>Ver detalhes</button>
      </div>
    </div>

    {/* MOTOSs */}
    <div className="card">
      <img src="/moto1.jpg" alt="Yamaha R1" />
      <div className="card-content">
        <h3>Yamaha R1</h3>
        <p>$ 110.000</p>
        <button>Ver detalhes</button>
      </div>
    </div>

    <div className="card">
      <img src="/moto2.jpg" alt="Honda CBR" />
      <div className="card-content">
        <h3>Honda CBR</h3>
        <p>$ 75.000</p>
        <button>Ver detalhes</button>
      </div>
    </div>

    <div className="card">
      <img src="/moto3.jpg" alt="Kawasaki Ninja" />
      <div className="card-content">
        <h3>Kawasaki Ninja</h3>
        <p>$ 80.000</p>
        <button>Ver detalhes</button>
      </div>
    </div>

    <div className="card">
      <img src="/moto5.jpg" alt="BMW S1000RR" />
      <div className="card-content">
        <h3>BMW S1000RR</h3>
        <p>$ 110.000</p>
        <button>Ver detalhes</button>
      </div>
    </div>

    {/* MOTOS VINTAGE */}
    <div className="card">
      <img src="/motoVintage1.jpg" alt="Harley Davidson Classic" />
      <div className="card-content">
        <h3>Harley Davidson Classic</h3>
        <p>$ 95.000</p>
        <button>Ver detalhes</button>
      </div>
    </div>

    <div className="card">
      <img src="/motoVintage2.jpg" alt="Royal Enfield Bullet" />
      <div className="card-content">
        <h3>Royal Enfield Bullet</h3>
        <p>$ 70.000</p>
        <button>Ver detalhes</button>
      </div>
    </div>
    {/* CARROS VINTAGE */}
<div className="card">
  <img src="/carroVintage1.jpg" alt="Chevrolet Corvette Clássico" />
  <div className="card-content">
    <h3>Corvette Clássico</h3>
    <p>$ 750.000</p>
    <button>Ver detalhes</button>
  </div>
</div>

<div className="card">
  <img src="/carroVintage2.jpg" alt="Carro Luxo Vintage" />
  <div className="card-content">
    <h3>Luxo Vintage</h3>
    <p>$ 1.200.000</p>
    <button>Ver detalhes</button>
  </div>
</div>

 {/* CARROS LUXO */}
<div className="card">
  <img src="/suvMercedes.jpg" alt="Carro Luxo Vintage" />
  <div className="card-content">
    <h3>Luxo Vintage</h3>
    <p>$ 1.300.000</p>
    <button>Ver detalhes</button>
  </div>
</div>
<div className="card">
  <img src="/lamboSuv.jpg" alt="Carro Luxo Vintage" />
  <div className="card-content">
    <h3>Luxo Vintage</h3>
    <p>R$ 1.590.000</p>
    <button>Ver detalhes</button>
  </div>
</div>

<div className="card">
  <img src="/suvExec.jpg" alt="Rols Royce" />
  <div className="card-content">
    <h3>Luxo Vintage</h3>
    <p>R$ 2.500.000</p>
    <button>Ver detalhes</button>
  </div>
</div>

<div className="card">
  <img src="/suvExec2.jpg" alt="Rols Royce" />
  <div className="card-content">
    <h3>Luxo Vintage</h3>
    <p>$ 1.800.000</p>
    <button>Ver detalhes</button>
  </div>
</div>

<div className="card">
  <img src="/suvExec3.jpg" alt="Rols Royce" />
  <div className="card-content">
    <h3>Luxo Vintage</h3>
    <p>$ 1.200.000</p>
    <button>Ver detalhes</button>
  </div>
</div>

<div className="card">
  <img src="/suvExec4.jpg" alt="Rols Royce" />
  <div className="card-content">
    <h3>Luxo Vintage</h3>
    <p>$ 1.800.000</p>
    <button>Ver detalhes</button>
  </div>
</div>

<div className="card">
  <img src="/suvExec5.jpg" alt="Rols Royce" />
  <div className="card-content">
    <h3>Luxo Vintage</h3>
    <p>$ 1.200.000</p>
    <button>Ver detalhes</button>
  </div>
</div>

 {/* CARROS CAMINHONETE */}


<div className="card">
  <img src="/caminhonete1.jpg" alt="Rols Royce" />
  <div className="card-content">
    <h3>Caminhonete Ford</h3>
    <p>R$ 2.500.000</p>
    <button>Ver detalhes</button>
  </div>
</div>

<div className="card">
  <img src="/caminhonete2.jpg" alt="Rols Royce" />
  <div className="card-content">
    <h3> Caminhonete Luxo Vintage</h3>
    <p>$ 2.000.000</p>
    <button>Ver detalhes</button>
  </div>
</div>

<div className="card">
  <img src="/caminhonete3.jpg" alt="Rols Royce" />
  <div className="card-content">
    <h3>Caminhonete Toyota</h3>
    <p>$ 900.000</p>
    <button>Ver detalhes</button>
  </div>
</div>

<div className="card">
  <img src="/caminhonete4.jpg" alt="Rols Royce" />
  <div className="card-content">
    <h3>Caminhonete Ford</h3>
    <p>$ 900.000</p>
    <button>Ver detalhes</button>
  </div>
</div>

<div className="card">
  <img src="/caminhonete5.jpg" alt="Rols Royce" />
  <div className="card-content">
    <h3>Caminhonete Toyota</h3>
    <p>$ 800.000</p>
    <button>Ver detalhes</button>
  </div>
</div>

<div className="card">
  <img src="/caminhonete6.jpg" alt="caminhonete" />
  <div className="card-content">
    <h3>Caminhonete Chevrolet</h3>
    <p>$ 900.000</p>
    <button>Ver detalhes</button>
  </div>
</div>

<div className="card">
  <img src="/caminhonete7.jpg" alt="GMC" />
  <div className="card-content">
    <h3>Caminhonete GMC</h3>
    <p>$ 2.000.000</p>
    <button>Ver detalhes</button>
  </div>
</div>

 {/* BOTÕES  */}
      <div className="social-float">

  {/* WHATS */}
  <a 
    href="https://wa.me/5511999999999" 
    target="_blank"
    rel="noopener noreferrer"
    className="btn whatsapp"
  >
    <img src="/watsNV1.png" alt="WhatsApp" />
  </a>

  {/* INSTAGRAM */}
  <a 
    href="https://instagram.com/seuusuario" 
    target="_blank"
    rel="noopener noreferrer"
    className="btn instagram"
  >
    <img src="/instaNV1.png" alt="Instagram" />
  </a>



      </div>


  </div>
</section>
    </main>
  )
}

export default Home