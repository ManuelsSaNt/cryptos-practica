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
        descrip='Bitcoin, created on October 31, 2008, is a digital currency or cryptocurrency that allows you to pay with a mobile device from your wallet or with a QR code, it works everywhere and at any time with fast and international payments if you wish. you can transfer Bitcoin from Africa to Canada in 10min there is no bank to delay or work in the process or fees that freeze the transfer, Bitcoin allows you to send and receive payments at almost zero cost. Except for special cases, such as tiny payments, there are no fees. however, you can choose to pay a voluntary fee to prioritize your transaction and pay the people who run the Bitcoin network.        ' 
        />

        <Cryptomoneda
        moneda='Ethereum'
        symbol='ETH'
        foto='ether-logo.png'
        altImage='Imagen Logo Bitcoin'
        descrip="Ethereum is a decentralized open source blockchain system that includes its own cryptocurrency, Ether. ETH functions as a platform for numerous other cryptocurrencies, as well as for the execution of decentralized smart contracts. Ethereum was first described in a 2013 whitepaper by Vitalik Buterin. Buterin, along with other co-founders, secured funding for the project in an online public sale in the summer of 2014 and officially launched the blockchain on July 30, 2015. Ethereum's goal is to become a global platform for decentralized applications, allowing users around the world to write and run software that is resistant to censorship, downtime, and fraud."
        />

        <Cryptomoneda 
        symbol='DOT'
        moneda='Polkadot'
        foto='polka-logo.png'
        altImage='Imagen Logo Bitcoin'
        descrip="Polkadot is an open-source sharded multichain protocol that connects and secures a network of specialized blockchains, facilitating cross-chain transfer of any data or asset types, not just tokens, thereby allowing blockchains to be interoperable with each other. Polkadot was designed to provide a foundation for a decentralized internet of blockchains, also known as Web3. Polkadot is known as a layer-0 metaprotocol because it underlies and describes a format for a network of layer 1 blockchains known as parachains (parallel chains). As a metaprotocol, Polkadot is also capable of autonomously and forklessly updating its own codebase via on-chain governance according to the will of its token holder community. Polkadot provides a foundation to support a decentralized web, controlled by its users, and to simplify the creation of new applications, institutions and services. The Polkadot protocol can connect public and private chains, permissionless networks, oracles and future technologies, allowing these independent blockchains to trustlessly share information and transactions through the Polkadot Relay Chain (explained further down). Polkadot's native DOT token serves three clear purposes: staking for operations and security, facilitating network governance, and bonding tokens to connect parachains ."        
        />

        <Cryptomoneda
        moneda='Ripple'
        symbol='XRP'
        foto='ripple-logo.png'
        altImage='Imagen Logo Ripple'
        descrip='Launched in 2021, the XRP Ledger (XRPL) is an open-source, permissionless and decentralized technology. Benefits of the XRP Ledger include its low-cost ($0.0002 to transact), speed (settling transactions in 3-5 seconds), scalability (1,500 transactions per second) and inherently green attributes (carbon-neutral and energy-efficient). The XRP Ledger also features the first decentralized exchange (DEX) and custom tokenization capabilities built into the protocol. Since 2012, the XRP Ledger has been operating reliably, having closed 70 million ledgers.'        
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
