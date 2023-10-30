import Footer from "../../component/footer";
import Link from "next/link"
import Image from "next/image"
import Navbar from "@/component/navbar"
import toast, { Toaster } from 'react-hot-toast';


const  Product =(({products})=>{
    console.log(products)
    return (

<>
<Navbar/>



{
      products.map((product)=>{
        const notify = () => toast.success('Added');
        return(
           <div className="card">
            <div className="inner-card">
            <Link href={`/products/${product.id}`}> 
            <p className="image">
          <img src={product.image} width={300} height={300}/>

         
          </p>
          <p className="price">
              <b>
                  {product.price}
              </b>
          </p>
          <p className="title">
            <b>  {product.title}</b>
          </p>
         
          
          </Link>
          <div className="button-card">
      <button onClick={notify}>add to cart</button>
      <Toaster />
    </div>
            </div>
           </div>
        )
      })
 }

 <Footer/>
</>

    )
})





export async function getStaticProps(){
    const response =await fetch("https://fakestoreapi.com/products")
    const data = await response.json()
    console.log(data)

    return{
        props : {
            products : data
        }
    }
}

export default Product