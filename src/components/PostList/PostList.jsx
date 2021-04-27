import React from "react";
import PostItem from "../PostItem/PostItem";

class PostList extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => this.setState({ posts: [...data] }));
  }

  render() {
    return (
      <>
        {this.state.posts.map((post, index) => (
          <PostItem key={index} data={post} />
        ))}
      </>
    );
  }
}

export default PostList;
