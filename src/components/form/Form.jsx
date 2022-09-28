import React from "react";

function Form() {
  return (
    <article className="conversation__wrapper">
      <div className="conversation__icon">
        <div className="conversation__photo"></div>
      </div>
      <div className="form">
        <form className="form__inner">
          <label htmlFor="comment" className="form__label">
            Join the conversation
          </label>
          <textarea
            id="comment"
            name="comment"
            placeholder="Add a new comment"
            className="form__input form__input--height"
          ></textarea>
          <div className="form__wrapper">
            <button type="submit" className="form__button">
              Comment
            </button>
          </div>
        </form>
      </div>
    </article>
  );
}

export default Form;
