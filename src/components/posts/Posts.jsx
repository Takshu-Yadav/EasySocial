import "./posts.scss"
import Post from "../post/Post"
import React from 'react'

const Posts = () => {

  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Username",
      userId: 1,
      profilePic: "https://images.pexels.com/photos/16999877/pexels-photo-16999877/free-photo-of-miradas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "This is my post description.",
      img: "https://images.pexels.com/photos/17496706/pexels-photo-17496706.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
      id: 2,
      name: "Username2",
      userId: 1,
      profilePic: "https://images.pexels.com/photos/16999877/pexels-photo-16999877/free-photo-of-miradas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      desc: "This is my post description.Random  imiwnvoiwgnogvnnfv vwsngvnws visjonovn soisnvns vsnvsnovns."
    }
  ]
  return (
    <div className="posts">
      {posts.map(post => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  )
}

export default Posts