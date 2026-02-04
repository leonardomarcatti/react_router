import { useParams } from "react-router-dom"

const ProductDetails = () => {
   const params = useParams()
   const id = params.id

   return <>
      <h3>Details</h3>
      <h4>{id}</h4>
   </>
}

export default ProductDetails