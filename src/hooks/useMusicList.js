import { useEffect, useState } from 'react';
import axios from 'axios'

export default function useMusicList(query, pageNumber) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [books, setBooks] = useState([])
  const [hasMore, setHasMore] = useState(false)

  useEffect(()=>{
    axios({
      method: 'GET',
      url: "http://localhost:3001/list",
      params: { q: query, page: pageNumber}
    }).then(res => {
      console.log(res.data)
    })
  }, [query, pageNumber])
  return null
}