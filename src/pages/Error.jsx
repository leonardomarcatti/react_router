import { useNavigate } from "react-router-dom"

const Error = () => {
   const navigate = useNavigate()
   const handlenavigate = () => navigate('/')

   return <main>

      <h1>Error Page</h1>
      <h2>This pare does not exist</h2>
      <button type="button" onClick={handlenavigate}>Get Back</button>
   </main> 
}

export default Error