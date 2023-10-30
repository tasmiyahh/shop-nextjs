import Navbar from "@/component/navbar"
import Carosel from "@/component/carosel"
import Footer from "@/component/footer"
import Link from "next/link"
const Index = ({products})=>{
 
  const displaypro = products.slice(0 ,5)
  
  return(
    <div>
<Navbar/>
<Carosel/>



  <p className="Men">
  <Link href={"/products"}> <img className="men" src="/c2.jpg" /></Link>
    <p className="title">
      MEN
    </p>
     
  </p>

  <p className="Men">
   <Link href={"/products"}> <img className="men" src="/c11.jpg" /></Link>
    <p className="title">
      WOMEN
    </p>
     
  </p>


<h1 className="title">
  SHOP ALL
</h1>

<div>
{
      displaypro.map((product)=>{
        return(
          <div className="card">
          <div className="inner-card">
          
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
        
       
          </div>
         </div>
        )
      })
 }
</div>

<p className="shopall">
<Link href={"/products"}>
<button className="shopall">SHOP ALL</button>
</Link>
</p>

 

 <Footer/>
    </div>
  )
}

export default Index


export async function getStaticProps(){
let response = await fetch("https://fakestoreapi.com/products")
let data = await response.json()
console.log(data)

return{
  props : {
    products : data
  }
}
}



