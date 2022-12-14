import { useRouter } from 'next/router';
import React,{useEffect,useState}from 'react'; 
import axios from "axios"

const Test = () => {
  const router = useRouter(); 
  const [data,setData] = useState([])  
  console.log((data));
//   console.log(id);
 useEffect(() => {
    if (router.isReady) {
      // Code using query)
      
      console.log(router.query.id) 
      axios.get(`http://localhost:4000/product/${router.query.id}`) 
      .then ( res => setData(res.data) ) 
      .catch( err => console.log(err))
    }
  }, [router.isReady]);  
  

  
  return <div> 
    <h1>{data.productName}</h1>
    <img src = {data.imageUrl} />
  </div>;
};

export default Test;