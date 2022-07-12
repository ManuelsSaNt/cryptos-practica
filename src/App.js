import Cryptomoneda from './components/Crypto';
import './App.css';
import { useTranslation } from "react-i18next";


function App() {

  const [t, i18n] = useTranslation("global")  


  return (
    <div className="App">
      <header>
        <nav className='barra-navegacion'>
          <h1 className='titulo-crypto'>Crypto<span>World</span></h1>
          <div className='shortcuts'>
            <a href='#btc-part' className='bitcoin-nav'>Bitcoin</a>
            <a href='#eth-part' className='ether-nav'>Ethereum</a>
            <a href='#dot-part' className='polkadot-nav'>Polkadot</a>
            <a href='#xrp-part' className='ripple-nav'>Ripple</a>
          </div>
          <div className='idiomas'>
            <button onClick={()=>i18n.changeLanguage("es")}>Es</button>
            <button onClick={()=>i18n.changeLanguage("en")}>En</button>
          </div>
        </nav>
      </header>


      <main>
        <div className='contenedor-recepcion'>
          <div className='contenedor-texto'>
            <h2 className='welcome'>{t("page.welcome-to")} Crypto<span>World</span></h2>
            <p className='welcome-text'>{t("page.welcome-text")} Crypto<span>World</span></p>
          </div>



          <div className='back-images-recepcion'>
            <img className='img-dot' src={require('./imagenes/polka-logo.png')} alt='polkadot logo image' />
            <img className='img-eth' src={require('./imagenes/ether-logo.png')} alt='Ethereum logo image' />
            <img className='img-btc' src={require('./imagenes/bitcoin-logo.png')} alt='Bitcoin logo image' />
            <img className='img-xrp' src={require('./imagenes/ripple-logo.png')} alt='Ripple logo image' />
          </div>


          <div className='welcome-flecha'>
            <svg xmlns="http://www.w3.org/2000/svg" width="3.8rem" height="3.8rem" fill="yellow" className="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
              </svg>
          </div>
        </div>


        <section className='cryptos-envoltura'>
          <Cryptomoneda
          moneda='Bitcoin'
          symbol='BTC'
          foto='bitcoin-logo.png'
          altImage='Imagen Logo Bitcoin'
          descrip={t("cryptos.bitcoin")}
          />

          <Cryptomoneda
          moneda='Ethereum'
          symbol='ETH'
          foto='ether-logo.png'
          altImage='Imagen Logo Bitcoin'
          descrip={t("cryptos.ethereum")}
          />

          <Cryptomoneda 
          symbol='DOT'
          moneda='Polkadot'
          foto='polka-logo.png'
          altImage='Imagen Logo Bitcoin'
          descrip={t("cryptos.polkadot")}        
          />

          <Cryptomoneda
          moneda='Ripple'
          symbol='XRP'
          foto='ripple-logo.png'
          altImage='Imagen Logo Ripple'
          descrip={t("cryptos.ripple")}        
          />
        </section>
      </main>

      <footer>
        <hr></hr>
          <div className='principal-footer'> 

            <h2 className='titulo-crypto'>Crypto<span>World</span></h2>

            <div className='descripcion-pie'>
              <div className='enlaces-footer'>
                <h5>More Info</h5>
                <p><a href='https://www.coingecko.com/es/monedas/bitcoin' target='_blank'>Bitcoin</a></p>
                <p><a href='https://www.coingecko.com/es/monedas/ethereum' target='_blank'>Ethereum</a></p>
                <p><a href='https://www.coingecko.com/es/monedas/polkadot' target='_blank'>Polkadot</a></p>
                <p><a href='https://www.coingecko.com/es/monedas/xrp' target='_blank'>Ripple</a></p>
              </div>

              <div className='enlaces-footer'>
                <h5>Contact</h5>
                <p><a  href='https://github.com/ManuelsSaNt/cryptos-practica' target='_blank'>Github</a></p>
                <p><a  href='https://manuelssant.github.io/Presentacion/' target='_blank'>Developer</a></p>
              </div>
            </div>
          </div>
      </footer>
    </div>
  );
}

export default App;
