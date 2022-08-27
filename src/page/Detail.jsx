import React from 'react';
import Info from '../components/Info'
import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';

const Detail = () => {
  return (
    <div>
      <Info/>
      <CommentList />
      <CommentForm />
    </div>
  );
};

export default Detail;