import React from "react";
import "./Comments.scss";
import Avatar from "../avatar/Avatar";
import { dynamicTimestamp } from "../../utils/dates.mjs";
import API_URL from "../../utils/api.mjs";

const Comments = (props) => {
  const apiKey = "26689ce2-c1a8-4056-af4e-6d835c87e633";

  const comments = props.video.comments;

  const commentsList = comments.map((comment, i) => (
    <article className="comment" key={i}>
      <Avatar
        avatarClass="avatar avatar--comments"
        imageClass="avatar__image avatar__image--comments"
      />
      <div className="comment__wrapper">
        <div className="comment__user">
          <p className="comment__name">{comment.name}</p>
          <p className="comment__date">{dynamicTimestamp(comment.timestamp)}</p>
        </div>
        <p className="comment__copy">{comment.comment}</p>
        <div onClick={() => props.deleteHandler(comment)}>Delete</div>
      </div>
    </article>
  ));

  return (
    <section className="comments">
      <div className="comments__wrapper">{commentsList}</div>
    </section>
  );
};

export default Comments;
