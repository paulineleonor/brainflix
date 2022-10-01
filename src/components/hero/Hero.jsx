import "./Hero.scss";
// import VideoDetails from "../video-details/VideoDetails";

const Hero = (props) => {
  const video = props.video;
  console.log(video.id);
  return (
    <section className="video">
      <div className="video__container">
        <video poster={video.image} controls className="video__image"></video>
      </div>
      {/* 
      <VideoDetails video={video} /> */}
    </section>
  );
};

export default Hero;