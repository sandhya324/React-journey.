import './Home.css'
import ExploreMenu from '../ExploreMenu/ExploreMenu'
import Cart from '../Cart/Cart'
import { useState } from 'react'

const Home = () => {

  const [category, setCategory] = useState("All");

  return (
    <div>
      <ExploreMenu category={category} setCategory={setCategory} />
    </div>
  )
}

export default Home
