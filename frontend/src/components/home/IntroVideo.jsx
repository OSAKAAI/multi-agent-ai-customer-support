import introVideo from "../../assets/videos/Brand_IntroVideo (online-video-cutter.com).mp4";

function IntroVideo() {
  return (
    <section className="w-full bg-black">
      <video
        className="h-[500px] w-full object-cover"
        src={introVideo}
        autoPlay
        muted
        loop
        playsInline
      />
    </section>
  );
}

export default IntroVideo;