import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function Price (props) {
  const [coin, setCoin] = useState(null)

  
  const params = useParams()
  const symbol = params.symbol

  const url = `https://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${process.env.REACT_APP_COINAPI_KEY}` 

  const getCoin = async () => {
    try {
      const res = await fetch(url)
      const data = await res.json()
      setCoin(data)
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=> {
    getCoin()
  },[])


    return (
      <div>
        {coin && coin.rate ? loaded() : loading()}
      </div>

    )


    function loaded() {
      return(
        <div>
          <h1>
            {coin.asset_id_base}/{coin.asset_id_quote}
          </h1>
          <h2>{coin.asset_id_quote === 'USD'? `$${coin.rate.toFixed(2)}` : coin.rate.toFixed(2)}</h2>
        </div>
      )
    }

    
    function loading() {
      return (
        <h1>Loading {symbol} rate</h1>
      )
    }
  };


