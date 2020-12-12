import React, { useState, useEffect } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import { useStateValue } from "./StateProvider"
import db from "./firebase"

function Feed() {
  const [posts, setPosts] = useState([])
  const [{ user }, dispatch] = useStateValue()

  useEffect(() => {
    db.collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => {
        return {
          id: doc.id,
          data: doc.data()
        }
      }))
    })
  }, [])

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map(post => {
        return (
          <Post 
            key={post.id}
            message={post.data.message} 
            profilePic={post.data.profilePic} 
            image={post.data.image} 
            timestamp={post.data.timestamp} 
            username={post.data.username}
          />
        )
      })}
    </div>
  );
}

export default Feed;
