import { Link } from "react-router-dom"
import products from "../dummy_products"

const Products = () => {
   return <main>
      <h1>Products Page</h1>
      <ul>
         {
            products.map(el => {
               return <li key={el.id}>
                     <Link to={el.name}>{el.name}</Link>
                  </li>
            })
         }
         
      </ul>
   </main>
}

export default Products