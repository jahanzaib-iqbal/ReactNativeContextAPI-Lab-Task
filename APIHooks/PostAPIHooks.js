import { useEffect, useState } from "react";
import axios from "axios";

const PostAPIHooks=()=>{

    const [data, setData] = useState(null);
    
    const signup = async  (email, password, displayName) => {
        
        // const url = 'https://chatgptpromt-flask-app-3e93bb6fd690.herokuapp.com/user/signup';
        // const params = {email:email,
        //                 password:password,
        //                 displayName:displayName,
        //                }
        // const headers = {
        //     'Content-Type': 'application/json',
        //   }
        // axios.post(url, params, {
        //     headers: headers
        //   }).then(res => 
        //     {console.log(res)}
        //     ).catch(err => 
        //       {console.log('is this ===',err)}
        //       )

        const url = 'https://chatgptpromt-flask-app-3e93bb6fd690.herokuapp.com/user/signup'
        try {
          const response = await axios.post(url, {
            email: email,
            password: password,
            display_name: displayName,
          });
           setData(response.data);
           console.log(response.data.uid)
           global.uid=response.data.uid;
       
        } catch (error) {
          console.log('Failure', error);
          // setData(error);
        }
      
    }


    
    useEffect(()=>{
        // axios.get(url).then((response) => {
        //   console.log('is this Custom Hook Area ???');  
        //   console.log(response.data.movies);
        //   setData(response.data.movies);
        // });
      },[])

      return { data, signup };
}

export default PostAPIHooks;

