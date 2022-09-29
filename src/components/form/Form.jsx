import React from "react";
import Button from "../button/Button";
import "./Form.scss";

function Form() {
  return (
    <div className="form">
      <article className="form__wrapper">
        <div className="form__icon">
          <div className="form__photo"></div>
        </div>
        <form className="form__inner">
          <label htmlFor="comment" className="form__label">
            Join the conversation
          </label>
          <textarea
            id="comment"
            name="comment"
            placeholder="Add a new comment"
            className="form__input"
          ></textarea>
          <div className="form__button">
            <Button
              buttonAction="Comment"
              buttonClass="button button--comment"
            />
          </div>
        </form>
      </article>
    </div>
  );
}

export default Form;
