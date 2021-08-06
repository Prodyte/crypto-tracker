import Coins from "./Coins";
function CoinsList({ filteredCoins }) {
  return (
    <div>
      {filteredCoins.map((coin) => {
        return (
          <Coins
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            market_cap={coin.market_cap}
            volume={coin.total_volume}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
}

export default CoinsList;
