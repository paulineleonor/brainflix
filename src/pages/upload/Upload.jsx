import React from "react";
import Image from "../../assets/Images/Upload-video-preview.jpg";
import "./Upload.scss";

const Upload = () => {
  return (
    <section className="upload">
      <div className="upload__container">
        <h1 className="upload__title">Upload Video</h1>
        <div className="upload__form">
          <section className="upload__form-wrapper">
            <div className="upload__form-container">
              <h2 className="upload__form-title">Video thumbnail</h2>
              <img src={Image} alt="" className="upload__image" />
            </div>

            <div className="upload__fields">
              <div className="upload__question">
                <label htmlFor="title" className="upload__label">
                  Title your video
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Add a title to your video"
                  className="upload__input"
                />
                <label htmlFor="title" className="upload__label">
                  Add a video description
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Add a description to your video"
                  className="upload__input"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Upload;
