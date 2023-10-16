import { useEffect, useState } from "react";
import axios from "axios";

const BSEApiHooks=(url)=>{
    console.log('BSEApiHooks',url);

    const [data, setData] = useState(null);

    const myGetAPIHook = async(url) =>{
        axios.get(url).then((response) => {
            console.log('is this BSE API Custom Hook Area ???');  
            console.log(response.data.movies);
            setData(response.data.movies);
          });
    }
    
    // useEffect(()=>{
    //     console.log('Hook' ,url);
    //     axios.get(url).then((response) => {
    //       console.log('is this BSE API Custom Hook Area ???');  
    //       console.log(response.data.movies);
    //       setData(response.data.movies);
    //     });
    //   },[])
      
      return { data, myGetAPIHook };
}

export default BSEApiHooks;
