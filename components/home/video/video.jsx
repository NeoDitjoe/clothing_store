// https://videos.pexels.com/video-files/855563/855563-hd_1920_1080_24fps.mp4
// https://videos.pexels.com/video-files/3888252/3888252-uhd_4096_2160_25fps.mp4
// https://videos.pexels.com/video-files/3205917/3205917-hd_1920_1080_25fps.mp4
// https://videos.pexels.com/video-files/6221110/6221110-uhd_4096_2160_25fps.mp4

export default function VideoPromo() {

  return (
    <main className="md:m-10 m-2">
      <video
        style={{ width: '100%' }}
        width={400} height={300} loop autoPlay muted>
        <source src={'https://videos.pexels.com/video-files/3205917/3205917-hd_1920_1080_25fps.mp4'} type="video/mp4" />
      </video>
    </main>
  )
}
