import React from 'react'
import { useState, useEffect } from "react";
import Select from '../Select/Select';


const Page = () => {
  const [word, setWord] = useState();
const [all, setAll] = useState([]);
const [main, setMain] = useState([]);
const [audio, setAudio] = useState();

  const dataApi = async () => {
    const data = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const dataJ = await data.json();
    setAll(dataJ);
    setMain(dataJ[0]);
    const url = dataJ[0].phonetics[0].audio;
    const urla = url.replace("//ssl.", "https://");
    setAudio(urla);
  };
  
  useEffect(() => {
    dataApi();
  }, []);

  const Search = () => {
    dataApi();
    setWord("");
  };
  return (
    <div>
      <div className="dark:bg-slate-800 dark:text-white items-center  justify-center bg-gray-500 min-h-screen">
        <div className="row">
          <div className="text-center text-3xl font-serif p-3 pt-12 bg-primary">
            <p>Kiage kia Ururogoori</p>
            <p className='italic text-gray-400'>(Maragoli Dictionary)</p>

          </div>
          <div className="bg-primary py-3 pb-5 flex justify-center text-black">
          <input
  type="text"
  className=" border-0 rounded px-2 md:col-3 sm:col-4"
  placeholder="Type your word"
  id="floatingInput"
  value={word}
  onChange={(e) => setWord(e.target.value)}
/>
<button
  className="rounded w-2/12 text-lg font-serif bg-black text-white col-md-1 col-sm-2 mx-2"
  onClick={Search}
>
Search
</button>
          </div>
          {word === "" ? (
  <Select all={all} main={main} />
) : (
<div className="fs-1 text-uppercase text-center font-bold text-decoration-underline text-white bg-black">
          <span> Ng'oda iring'ana muribokisi</span><br /><span className="italic text-gray-400">(type a word in the box)</span>
            </div>
)}
        
        </div>
      </div>
    </div>
  );
}

export default Page;
