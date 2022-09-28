import "./VideoContent.scss";
import VideoDetails from "../video-details/VideoDetails";

const VideoContent = (props) => {
  const video = props.video;
  console.log(video.id);
  return (
    <section className="video">
      <div className="video__container">
        <img src={video.image} alt="" className="video__image" />
      </div>

      <VideoDetails video={video} />
    </section>
  );
};

export default VideoContent;
