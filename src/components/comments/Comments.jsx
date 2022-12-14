import React from "react";
import DeleteIcon from "../../assets/Icons/icon-delete.svg";
import { dynamicTimestamp } from "../../utils/dates.mjs";
import Avatar from "../Avatar/Avatar";
import "./Comments.scss";

const Comments = ({ video, deleteHandler }) => {
  const comments = video.comments;

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
        <div className="comment__delete">
          <img
            src={DeleteIcon}
            alt="A bin icon"
            onClick={() => deleteHandler(comment)}
            className="comment__icon"
          />
        </div>
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
