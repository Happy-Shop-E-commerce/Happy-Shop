// @ts-nocheck
import React,{useEffect,useState}from 'react' 
import axios from 'axios' ; 
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";



export default function AllProducts() { 
    const [data,setData]= useState([]) ; 
    console.log(data);
    
    
    
    
    
  
 useEffect(()=>{ 
    axios.get("http://localhost:4000/product") 
    .then((res)=>{ setData(res.data);
    }) 
    .catch(err => console.log(err)
    )
 },[])

  return (
    <div>
     {data.map((e :any) =>{ return (
   
         <Card className="card" sx={{ maxWidth: 300 }} sm= {6}>
      <CardMedia
        className="img-card"
        component="img"
        height="200"
         image={e.imageUrl }
        alt="product"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {e.productName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {e.description}
          <Typography
            className="price"
            gutterBottom
            variant="h5"
            component="div"
          >
            {e.price} DT
          </Typography>
        </Typography>
      </CardContent>
      <CardActions className="cart-action">
        <Button
          className="btn"
          size="small"
          onClick={() => {
            // handleClick(item);
          }}
        >
          <ShoppingCartIcon />
          Buy Now
        </Button>
      </CardActions>
    </Card>
    
        
        
    )})} 

    </div>
   
  )
}
