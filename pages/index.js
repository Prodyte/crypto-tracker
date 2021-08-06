import Head from 'next/head';
import SearchBar from '../components/SearchBar';
import CoinsList from '../components/CoinsList';
import Image from 'next/image';
import { useState } from 'react';
import logo from '../images/logo.png';

export default function Home({ filteredCoins }) {
  const [search, setSearch] = useState('');
  const allCoins = filteredCoins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  console.log(allCoins);
  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value.toLowerCase());
    console.log(e.target.value.toLowerCase());
  };
  return (
    <div className="bg-gradient-to-r from-primary via-secondary to-danger text-white h-screen w-full">
      <Head>
        <title>Crypto Tracker API</title>
      </Head>
      <div className="flex items-center justify-center flex-col p-5">
        <Image
          src={logo}
          width={200}
          height={200}
          objectFit="cover"
          className="flex items-center justify-center"
        />
        <h1 className="text-4xl p-5">Crypto Tracker</h1>
        <SearchBar type="text" placeholder="Search" onChange={handleChange} />
      </div>
      <CoinsList filteredCoins={allCoins} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false'
  );
  const filteredCoins = await res.json();
  return {
    props: {
      filteredCoins,
    },
  };
};
