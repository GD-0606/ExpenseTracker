// Posts.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../slices/expensesSlice';

const Posts = () => {
  const dispatch = useDispatch();
  const { entities, Loading, error } = useSelector(state => state.EL);
  console.log(entities,Loading,error)

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (Loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  if(Object.keys(entities).length===0){
    return <p>No Post yet</p>
  }

  return (
    <div>
      <h2>Blog Posts</h2>
      {entities.length>0 && entities.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
