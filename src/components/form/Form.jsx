import React from "react";
import Avatar from "../avatar/Avatar";
import Button from "../button/Button";
import "./Form.scss";

const Form = (props) => {
  const formContent = (
    <article className="form__wrapper">
      <Avatar avatarClass="avatar avatar--form" imageClass="avatar__image" />
      <form className="form__inner" onSubmit={props.submitHandler}>
        <div className="form__field">
          <h2 className="form__label">Join the conversation</h2>
          <textarea
            id="comment"
            name="comment"
            placeholder="Add a new comment"
            onChange={(e) => props.handleFormChange(e)}
            className={`form__input ${
              props.formHasError && "form__input--error"
            }`}
          ></textarea>
        </div>
        <div className="form__button">
          <Button
            buttonAction="Comment"
            willRedirect={false}
            buttonClass="button button--comment"
          />
        </div>
      </form>
    </article>
  );

  return <div className="form">{formContent}</div>;
};

export default Form;
