function VideoCard({ title, description, sources }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <video width="320" height="240" controls>
        <source src={sources[0]} type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoCard;
