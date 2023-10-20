import { useEffect, useState } from "react"
import { useParams, useNavigate, } from "react-router-dom"
import axios from "axios"

const SinglePostPage = () => {
  const [post, setPost] = useState({})
  const {id} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const getPost = async () => {
      const response = await axios.get(`https://dummyjson.com/posts/${id}`)
      setPost(response.data)
    }
    getPost()
  },[id]);


  return (
    // <div style={{marginBottom:"50px"}}>DummyJson - POST #{id}</div>
    <div>
      <h2>{post.title}</h2>
      <button onClick={() => navigate(-1)}>Back</button>
      <p>{post.body}</p>
      <button onClick={() => navigate("/delete")} style={{margin:"20px"}}>Delete</button>
    </div>
  )
}
export default SinglePostPage