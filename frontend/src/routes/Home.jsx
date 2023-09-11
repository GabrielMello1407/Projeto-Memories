import axios from '../axios-config'

import "./Home.css"
import { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
const Home = () => {
  const [memories, setMemories] = useState([])

  useEffect(() => {
    const getMemories = async () => {
      const res = await axios.get("/memories")

      setMemories(res.data)
    }
    getMemories()
  }, [])



  return (
    <div className='home'>
      <h2>Últimas memórias</h2>
      <div className="memories-container">
        {memories.length > 0 && memories.map((memory) =>
          <div className='memory' key={memory._id}>
            <img src={`${axios.defaults.baseURL}${memory.src}`} alt={memory.title} />
            <p>{memory.tutke}</p>
            <Link className='btn' to={`/memories/${memory._id}`}>Comentar</Link>
          </div>
        )}

      </div>
    </div>
  )
}

export default Home