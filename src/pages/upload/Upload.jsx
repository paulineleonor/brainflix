import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Image from "../../assets/Images/Upload-video-preview.jpg";
import "./Upload.scss";

const Upload = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [descriptionHasError, setDescriptionHasError] = useState(false);
  const [titleHasError, setTitleHasError] = useState(false);
  const navigate = useNavigate();

  // checks for valid input, sets states, and navigates to homepage after 3 secs
  const handlePublish = (e) => {
    e.preventDefault();

    if (!e.target.description.value && !e.target.title.value) {
      setTitleHasError(true);
      setDescriptionHasError(true);
      return;
    } else if (!e.target.description.value) {
      setDescriptionHasError(true);
      return;
    } else if (!e.target.title.value) {
      setTitleHasError(true);
      return;
    }

    setTitleHasError(false);
    setDescriptionHasError(false);
    setShowMessage(true);

    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  // changes error state of title to false when field is not empty
  const handleTitleChange = (e) => {
    if (e.target.value.length > 0) {
      setTitleHasError(false);
    }
  };

  // changes error state of description to false when field is not empty
  const handleDescriptionChange = (e) => {
    if (e.target.value.length > 0) {
      setDescriptionHasError(false);
    }
  };

  return (
    <section className="upload">
      <div className="upload__container">
        <h1 className="upload__title">Upload Video</h1>
        <form className="upload__form" onSubmit={(e) => handlePublish(e)}>
          <section className="upload__form-wrapper">
            <div className="upload__form-container">
              <h2 className="upload__form-title">Video thumbnail</h2>
              <img src={Image} alt="" className="upload__image" />
            </div>

            <div className="upload__fields">
              <div className="upload__questions">
                <label htmlFor="title" className="upload__label">
                  Title your video
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Add a title to your video"
                  onChange={(e) => handleTitleChange(e)}
                  className={`upload__input ${
                    titleHasError && "upload__input--error"
                  }`}
                />
                <label htmlFor="title" className="upload__label">
                  Add a video description
                </label>
                <textarea
                  name="description"
                  id="description"
                  placeholder="Add a description to your video"
                  onChange={(e) => handleDescriptionChange(e)}
                  className={`upload__input upload__input--height ${
                    descriptionHasError && "upload__input--error"
                  }`}
                />
              </div>
            </div>
          </section>
          <div className="upload__functionalities">
            {showMessage && (
              <div className="upload__success">
                <p className="upload__message">Upload successful</p>
              </div>
            )}
            <div className="upload__buttons">
              <button className="upload__button upload__button--publish">
                Publish
              </button>
              <div className="upload__cancel">
                <Link to="/" className="upload__link">
                  Cancel
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Upload;
