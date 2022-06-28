
import '../stylesheets/Crypto.css'
import axios from 'axios';
import {useEffect , useState} from 'react';
import { useTranslation } from "react-i18next";




function Cryptomoneda({ moneda , foto , descrip , altImage , symbol}){
  const [t, i18n] = useTranslation("global")


  const [costOfBitcoin, setCostOfBitcoin] = useState([])
  const [costOfEthereum, setCostOfEthereum] = useState([])
  const [costOfPolkadot, setCostOfPolkadot] = useState([])
  const [costOfRipple, setCostOfRipple] = useState([])

  const getData =  async () =>{
    var res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cripple%2Cpolkadot%2Cethereum&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    
    function precio(indice){
      var dato = res.data
      return dato[indice]['current_price']
    }

    setCostOfBitcoin(precio(0))
    setCostOfEthereum(precio(1))
    setCostOfRipple(precio(2))
    setCostOfPolkadot(precio(3))
  }

  useEffect(()=>{
      getData()
  }, [])

  return(
    <div className='masterdiv'
    id={moneda==='Bitcoin' ? 'btc-part': moneda==="Ethereum" ? 'eth-part' : moneda==="Polkadot" ? 'dot-part' : moneda==="Ripple" ? 'xrp-part' : "No cargo correctamente"}
    >

      <div className="contenedor-principal">

  
        <div className="ln-cost">
          <div className="logo-nombre">
            <img 
            className={moneda==='Bitcoin' ? 'crypto-btc-img': moneda==="Ethereum" ? 'crypto-eth-img' : moneda==="Polkadot" ? 'crypto-dot-img' : moneda==="Ripple" ? 'crypto-xrp-img' : "No cargo correctamente"}
            alt={altImage} 
            src={require(`../imagenes/${foto}`)} />
            <h2 className='titulo-moneda'>{moneda}</h2>
            <h3 className='symbolo-moneda'>{symbol}</h3>


            <div className="costosCrypto">
              <div className={moneda==='Bitcoin' ? 'crypto-btc-precio': moneda==="Ethereum" ? 'crypto-eth-precio' : moneda==="Polkadot" ? 'crypto-dot-precio' : moneda==="Ripple" ? 'crypto-xrp-precio' : "No cargo correctamente"}>
              ${moneda==='Bitcoin' ? costOfBitcoin: moneda==="Ethereum" ? costOfEthereum : moneda==="Polkadot" ? costOfPolkadot : moneda==="Ripple" ? costOfRipple : "No cargo correctamente"} USD
              </div>

              <div className='ver-mas'>
                <a target='_blank' href={`https://www.coingecko.com/es/monedas/${moneda}`.toLowerCase()}>{t("more-info")}</a>
              </div>


            </div>
          </div>

        </div>

          <div className="descripcion">
            {descrip}
          </div>

      </div>
    </div>
  );
};







export default Cryptomoneda;
