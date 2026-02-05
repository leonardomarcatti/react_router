import { Link, useParams } from "react-router-dom"

const ProductDetails = () => {
   const params = useParams()
   const id = params.id

   return <>
      <h3>Details</h3>
      <h4>{id}</h4>
      <Link to='..' relative="path">Back</Link>
   </>
}

export default ProductDetails