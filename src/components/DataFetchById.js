import React, { useState, useEffect } from 'react';

const DataFetchById = () => {
  const [post, setPost] = useState(null);
  const [id, setId] = useState(1);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const response = await fetch(
      `http://jsonplaceholder.typicode.com/posts/${id}`
    );
    const item = await response.json();
    setPost(item);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div>
      <input type='text' value={id} onChange={(e) => setId(e.target.value)} />
      {loading ? <h1>loading...</h1> : <h1>{post.title}</h1>}
    </div>
  );
};

export default DataFetchById;
