import "./Hero.scss";

const Hero = ({ currentVideo }) => {
  const video = currentVideo;
  return (
    <section className="video">
      <div className="video__container">
        <video poster={video.image} controls className="video__image"></video>
      </div>
    </section>
  );
};

export default Hero;
