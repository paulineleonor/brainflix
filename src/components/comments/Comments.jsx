import React from "react";

function Comments(props) {
  const comments = props.videoDetails[0].comments;
  console.log(comments);
  return (
    <section className="comments">
      <div className="comments__wrapper">
        {comments.map((comment, i) => (
          <article className="comment" key={i}>
            <div className="comment__icon">
              <div className="comment__img"></div>
            </div>
            <div className="comment__wrapper">
              <div className="comment__user">
                <p className="comment__name">{comment.name}</p>
                <p className="comment__date">{comment.timestamp}</p>
              </div>
              <p className="comment__copy">{comment.comment}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Comments;
