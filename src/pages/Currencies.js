import { Link } from "react-router-dom";

import { useId } from "react";

export default function Currencies (props) {
  const currencies = [
    { name: "Bitcoin", symbol: "BTC" },
    { name: "Litecoin", symbol: "LTC" },
    { name: "Ethereum", symbol: "ETH" },
    { name: "Ethereum Classic", symbol: "ETC" },
    { name: "Stellar Lumens", symbol: "XLM" },
    { name: "Dash", symbol: "DASH" },
    { name: "Ripple", symbol: "XRP" },
    { name: "Zcash", symbol: "ZEC" },
  ];



    return (
      <div>
        {currencies.map(coin => {
          const {name, symbol} = coin;

          return (
            <Link key={name} className='text-white ' to={`/../price/${symbol}`}> <h2 className=" text-5xl my-30">{name}</h2></Link>
          )
        }  )}

      </div>
    )


  };