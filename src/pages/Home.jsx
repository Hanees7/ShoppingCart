import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

function Home() {
  const api_url = "https://fakestoreapi.com/products";

 

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const fetchProductData = async () => {
    setLoading(true);

    try {
      const res = await fetch(api_url);
      const result = await res.json();
      setPosts(result);
    } catch (error) {
      console.log("Error", error);
      setPosts([]);
    }
    setLoading(false);
  };

  useEffect(()=>{
    fetchProductData();
  }, [])
  return (
    <>
      {
        loading ? <Spinner/> : 
        posts.length > 0 ? (<div>
        {  
          posts.map((post) => (
<Product key={post.id} post={post} />
          ))
          }
        </div>) : ( <div>
           <p>No Data Found </p>
        </div>) 
      }
    </>
  );
}

export default Home;
