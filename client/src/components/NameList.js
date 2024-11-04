import React, { useState, useEffect } from "react";
import axios from "axios";

const NameList = () => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setLoading(false);
        setPost(res.data);
      } catch (error) {
        setError(error);
        console.error(error);
      }
    };

    fetchPost();
  }, []);

  return (
    <div>
      {error ? (
        <p>{error.message}</p>
      ) : loading ? (
        <p>Loading</p>
      ) : (
        <div>
          {post.map((i, index) => (
            <div key={index}>
              <h2>{i.title}</h2>
              <p>{i.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NameList;
