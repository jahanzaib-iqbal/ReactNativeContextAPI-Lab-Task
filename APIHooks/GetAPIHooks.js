import { useEffect, useState } from "react";
import axios from "axios";

const GetAPIHooks=()=>{

    // console.log(url)
    const [data, setData] = useState(null);

    const getMovieData=async(url)=>{
        axios.get(url).then((response) => {
            console.log('is this Custom Hook Area ???');  
            console.log(response.data.movies);
            setData(response.data.movies);
          });
    }

    const getCricData=async(url)=>{
        axios.get(url).then((response) => {
            console.log('CricData');  
            console.log(response.data.movies);
            setData(response.data.movies);
          });
    }

    useEffect(()=>{
        // axios.get(url).then((response) => {
        //   console.log('is this Custom Hook Area ???');  
        //   console.log(response.data.movies);
        //   setData(response.data.movies);
        // });
      },[])

      return { data, getMovieData, getCricData };
}

export default GetAPIHooks;
