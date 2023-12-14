import { useEffect, useState } from "react";
import axios from "axios";

const GetBooks=(url)=>{
    
    const [data, setData] = useState(null);
    useEffect(()=>{
        axios.get(url).then((response) => {
          console.log('is this Custom Hook Area ???');  
          setData(response.data);
        });
      },[])
      return { data };
}
export default GetBooks;