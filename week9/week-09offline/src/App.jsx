import { useState } from 'react'
import { PostComponent } from './post'


function App() {
  const [posts, setposts] = useState(0);
  const PostComponents = posts.map(post => <PostComponent
    name={post.name}
    subtitle={post.subtitle}
    time={post.time}
    image={post.image}
    description={post.description}
  />)
  function addPost(){
    setposts([...posts,{
       name: "",
      subtitle: "",
      time: "",
      image: "",
      description: ""
    }])
  }

  return (
    <div style={{background: "#dfe6e9", height: "100vh", }}>
      <button onClick={addPost}>Add post</button>
      <div style={{display: "flex", justifyContent: "center" }}>
        <div>
          {PostComponents}
        </div>
      </div>
    </div>
  )
}

export default App
