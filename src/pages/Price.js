import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function Price (props) {
  const [coin, setCoin] = useState(null)

  const apiKey = '166FB4DE-4538-4837-8917-EFCF537203E3'
  const params = useParams()
  const symbol = params.symbol

  const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}` 

  const getCoin = async () => {
    try {
      const res = await fetch(url)
      const data = await res.json()
      setCoin(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=> {
    getCoin()
  },[])


    return (
      <div>
        {coin ? loaded() : loading()}
      </div>

    )


    function loaded() {
      return(
        <div>
          <h1>
            {coin.asset_id_base}/{coin.asset_id_quote}
          </h1>
          <h2>{coin.rate}</h2>
        </div>
      )
    }

    
    function loading() {
      return (
        <h1>Loading {symbol} rate</h1>
      )
    }
  };


