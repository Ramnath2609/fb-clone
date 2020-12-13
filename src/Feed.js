import React, { useState, useEffect, forwardRef } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import FlipMove from "react-flip-move";

const FunctionalArticle = forwardRef((props, ref) => (
  <div ref={ref}>
    <Post
      key={props.id}
      message={props.data.message}
      profilePic={props.data.profilePic}
      image={props.data.image}
      timestamp={props.data.timestamp}
      username={props.data.username}
    />
  </div>
));

function Feed() {
  const [posts, setPosts] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              data: doc.data(),
            };
          })
        );
      });
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <FlipMove easing="ease-in-out" duration="500" enterAnimation="fade">
        {posts.map((post, i) => {
          return (
            <FunctionalArticle key={post.id} {...post} />
            // <Post
            //   key={i}
            //   message={post.data.message}
            //   profilePic={post.data.profilePic}
            //   image={post.data.image}
            //   timestamp={post.data.timestamp}
            //   username={post.data.username}
            // />
          );
        })}
      </FlipMove>
    </div>
  );
}

export default Feed;
