import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Image from "../../assets/Images/Upload-video-preview.jpg";
import "./Upload.scss";

const Upload = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [descriptionHasError, setDescriptionHasError] = useState(false);
  const [titleHasError, setTitleHasError] = useState(false);
  const navigate = useNavigate();

  const handlePublish = (e) => {
    e.preventDefault();

    console.log("test");

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
      console.log("test2");
      navigate("/");
    }, 1000);
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
                  className={`upload__input upload__input--height ${
                    descriptionHasError && "upload__input--error"
                  }`}
                />
              </div>
            </div>
          </section>{" "}
          <div className="upload__buttons">
            {showMessage && <p>Upload successful</p>}
            <button className="button button--upload">Publish</button>
            <Link to="/">Cancel</Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Upload;
