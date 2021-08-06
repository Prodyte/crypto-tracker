function Coins({
  name,
  price,
  symbol,
  market_cap,
  volume,
  image,
  priceChange,
}) {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-row justify-items-start border-solid border-b-2 border-black w-full py-8 cursor-pointer hover:bg-gradient-to-r from-blue_x to-blue_y">
        <div className=" font-mono flex items-center pr-6">
          <img src={image} alt={name} className="h-8 w-8 mr-4" />
          <h1 className="text-3xl w-80">{name}</h1>
          <p className="ml-4 uppercase">{symbol}</p>
        </div>
        <div className="flex text-right justify-between w-full">
          <p className="w-32">₹{price}</p>
          <p>₹{volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className="text-red-600">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="text-green-600">{priceChange.toFixed(2)}%</p>
          )}
          <p className="mr-5">Market Cap: {market_cap.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

export default Coins;
