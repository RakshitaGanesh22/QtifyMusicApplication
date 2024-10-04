import React, { useEffect, useContext } from 'react';
import { dataProvider } from "../components/dataContext";
import axios from "axios";

export default function APIdata() {
  const {
    TopAlbum, setTopAlbum,
    newAlbum, setNewAlbum,
    Songs, setSongsData,
    FAQdata, setFAQdata,
    optionData,
    SingerInfo,
    genre, setGener
  } = useContext(dataProvider);

  useEffect(() => {
    async function fetchData() {
      try {
        const topUrl = "https://qtify-backend-labs.crio.do/albums/top";
        const newUrl = "https://qtify-backend-labs.crio.do/albums/new";
        const songUrl = "https://qtify-backend-labs.crio.do/songs";
        const FAQUrl = "https://qtify-backend-labs.crio.do/faq";
        const genreUrl = "https://qtify-backend-labs.crio.do/genres";

        // Fetching the data
        const data1 = await axios.get(topUrl);
        setTopAlbum(data1.data);
        console.log(data1.data);

        const data2 = await axios.get(newUrl);
        setNewAlbum(data2.data);
        console.log(data2.data);
        SingerInfo.current=[...TopAlbum,...newAlbum];
        console.log(optionData);
        const data3 = await axios.get(songUrl);
        setSongsData(data3.data);
        console.log(data3.data);
        const data4 = await axios.get(FAQUrl);
        setFAQdata(data4.data.data);
        console.log(data4.data.data);

        const data5 = await axios.get(genreUrl);
        setGener(data5.data.data);
        console.log(data5.data.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    }

    fetchData();
  }, [setTopAlbum, setNewAlbum, setSongsData, setFAQdata, setGener]);
}
