import React from "react";
import "./Comments.scss";
import Avatar from "../avatar/Avatar";
import { dynamicTimestamp } from "../../utils/date.mjs";

function Comments(props) {
  const comments = props.video.comments;

  const commentsList = comments.map((comment, i) => (
    <article className="comment" key={i}>
      <Avatar
        avatarClass="avatar avatar--comments"
        imageClass="avatar__image avatar__image--comments"
      />
      {/* <div className="comment__icon">
        <div className="comment__img"></div>
      </div> */}
      <div className="comment__wrapper">
        <div className="comment__user">
          <p className="comment__name">{comment.name}</p>
          <p className="comment__date">{dynamicTimestamp(comment.timestamp)}</p>
        </div>
        <p className="comment__copy">{comment.comment}</p>
      </div>
    </article>
  ));

  return (
    <section className="comments">
      <div className="comments__wrapper">{commentsList}</div>
    </section>
  );
}

export default Comments;
