import Navbar from "@/component/navbar"
import Image from "next/image"
import toast, { Toaster } from 'react-hot-toast';

const getProduct = ({ product }) => {
    const notify = () => toast.success('Added');
    console.log(product)
    return (

       <>
       <Navbar/>
        <div className="card">
            <div >

               
             
               <img src={product.image} width={400} height={400}/>


               
                <br />

               <p className="price"> <b>{product.price}RS</b></p> 
                <br></br>
               <p className="title">
               <b>
                    {product.title}



                </b>

               </p>
               <div className="button-card">
      <button onClick={notify}>add to cart</button>
      <Toaster />
    </div>
              
            </div>
        </div>
       </>
    )
}



export async function getStaticPaths() { //in k ilawa user id likhy tw false
    const response = await fetch(`https://fakestoreapi.com/products`)
    const products = await response.json()

    const paths = products.map((products) => {
        return {
            params: {
                productid: products.id.toString()
            }
        }
    })




    return {

        paths,

        fallback: false
    }

}

export async function getStaticProps(context) { //index wali file me jo link zarye url mila wo yahan store os me se post ki bs params destructure ki
    const { params } = context
    const response = await fetch(`https://fakestoreapi.com/products/${params.productid}`)
    const data = await response.json()
    return {
        props: {
            product: data
        }
    }
}



export default getProduct