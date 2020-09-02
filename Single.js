import React from "react";
import Comment from "../parts/Comment";
import PostDesc from "../parts/PostDesc";
const Single = () => {
  return (
    <>
      <div class="single-post no-sidebar">
        <PostDesc />
        <Comment />
      </div>
    </>
  );
};
export default Single;
