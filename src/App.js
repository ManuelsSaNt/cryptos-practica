import Cryptomoneda from './components/Crypto';
import './App.css';



function App() {




  return (
    <div className="App">

    <header>
      <nav className='barra-navegacion'>

        <h1 className='titulo-crypto'>Crypto<span>Wolrd</span></h1>

        <div className='shortcuts'>
          <a href='#btc-part' className='bitcoin-nav'>Bitcoin</a>
          <a href='#dot-part' className='polkadot-nav'>Polkadot</a>
          <a href='#eth-part' className='ether-nav'>Ethereum</a>
          <a href='#xrp-part' className='ripple-nav'>Ripple</a>
        </div>

      </nav>
    </header>

    <main>
      <div className='contenedor-recepcion'>

        <div className='contenedor-texto'>
          <h2 className='welcome'>Welcome to Crypto<span>World</span></h2>
          <p className='welcome-text'>Here you can find a little information about a couple of cryptocurrencies, which by the way are the most important in this Crypto<span>World</span></p>
        </div>


        <div className='back-images-recepcion'>
          <img className='img-dot' src={require('./imagenes/polka-logo.png')} />
          <img className='img-eth' src={require('./imagenes/ether-logo.png')} />
          <img className='img-btc' src={require('./imagenes/bitcoin-logo.png')} />
          <img className='img-xrp' src={require('./imagenes/ripple-logo.png')} />
        </div>  



        <div className='welcome-flecha'>
          <svg xmlns="http://www.w3.org/2000/svg" width="3.8rem" height="3.8rem" fill="yellow" class="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
            </svg>
        </div>

      </div>


      <div className='cryptos-envoltura'>
        <Cryptomoneda
        moneda='Bitcoin'
        symbol='BTC'
        foto='bitcoin-logo.png'
        altImage='Imagen Logo Bitcoin'
        descrip='Bitcoin, creada el 31 de octubre de 2008 es una moneda digital  o cryptomoneda que permite pagar con un dispositivo movil desde su monedero o con un codigo QR, funciona en todas partes y en cualquier momento con pagos rapidos e internacionales si asi se desea pues se puede transferir Bitcoin de Africa a Canada en 10min no hay banco que atrase o trabaje en el proceso o honorarios que congelen la transeferencia, Bitcoin permite enviar y recibir pagos a casi coste cero. Salvo casos especiales, como en pagos diminutos, no existen tasas. sin emvargo puedes optar por pagar una tasa voluntaria para priorisar tu transaccion y remunerar a las personas que hacen funcionar la red de Bitcoin.' 
        />

        <Cryptomoneda
        moneda='Ethereum'
        symbol='ETH'
        foto='ether-logo.png'
        altImage='Imagen Logo Bitcoin'
        descrip='Bitcoin, creada el 31 de octubre de 2008 es una moneda digital  o cryptomoneda que permite pagar con un dispositivo movil desde su monedero o con un codigo QR, funciona en todas partes y en cualquier momento con pagos rapidos e internacionales si asi se desea pues se puede transferir Bitcoin de Africa a Canada en 10min no hay banco que atrase o trabaje en el proceso o honorarios que congelen la transeferencia, Bitcoin permite enviar y recibir pagos a casi coste cero. Salvo casos especiales, como en pagos diminutos, no existen tasas. sin emvargo puedes optar por pagar una tasa voluntaria para priorisar tu transaccion y remunerar a las personas que hacen funcionar la red de Bitcoin.' 
        />

        <Cryptomoneda 
        symbol='DOT'
        moneda='Polkadot'
        foto='polka-logo.png'
        altImage='Imagen Logo Bitcoin'
        descrip='pene del ranger esta pequeño'        
        />

        <Cryptomoneda
        moneda='Ripple'
        symbol='XRP'
        foto='ripple-logo.png'
        altImage='Imagen Logo Ripple'
        descrip='pene del ranger esta pequeño'        
        />

      </div>
    </main>


    <footer>
      <hr></hr>
      <div className='principal-footer'>

        <h2 className='titulo-crypto'>Crypto<span>World</span></h2>

        <div className='descripcion-pie'>
          <div className='lado'>
            <h5>More Info</h5>
            <p><a href='https://www.coingecko.com/es/monedas/bitcoin' target='_blank'>Bitcoin</a></p>
            <p><a href='https://www.coingecko.com/es/monedas/ethereum' target='_blank'>Ethereum</a></p>
            <p><a href='https://www.coingecko.com/es/monedas/polkadot' target='_blank'>Polkadot</a></p>
            <p><a href='https://www.coingecko.com/es/monedas/xrp' target='_blank'>Ripple</a></p>
          </div>

          <div className='lado'>
            <h5>Contact</h5>
            <p><a  href='https://github.com/ManuelsSaNt' target='_blank'>Github</a></p>
            <p><a  href='' target='_blank'>Developer</a></p>
          </div>
        </div>



      </div>

    </footer>






    </div>
  );
}

export default App;
