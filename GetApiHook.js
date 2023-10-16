import { useEffect, useState } from "react";
import axios from "axios";

const getApiHook=(url)=>{
    console.log(url)
    const [data, setData] = useState(null);

    useEffect(()=>{
        axios.get(url).then((response) => {
          console.log('is this Custom Hook Area ???');  
          console.log(response.data.movies);
          setData(response.data.movies);
        });
      },[])
      return { data };
}

export default getApiHook;
