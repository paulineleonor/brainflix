import React from "react";
import Button from "../button/Button";
import Avatar from "../avatar/Avatar";
import "./Form.scss";

const Form = () => {
  const formContent = (
    <article className="form__wrapper">
      <Avatar avatarClass="avatar avatar--form" imageClass="avatar__image" />
      <form className="form__inner">
        <div className="form__field">
          <h2 className="form__label">Join the conversation</h2>
          <textarea
            id="comment"
            name="comment"
            placeholder="Add a new comment"
            className="form__input"
          ></textarea>
        </div>
        <div className="form__button">
          <Button buttonAction="Comment" buttonClass="button button--comment" />
        </div>
      </form>
    </article>
  );

  return <div className="form">{formContent}</div>;
};

export default Form;
