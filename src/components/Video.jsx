export default function Video({ getSimpleInformation }) {
  const generateYTBLink = (providedLink) => {
    if (providedLink) {
      let videoID = providedLink.split("?v=")[1];
      let videoLink = "https://www.youtube.com/embed/" + videoID;
      return videoLink;
    }
  };

  const hasVideo = () => {
    if (getSimpleInformation("strYoutube") == "") {
      return false;
    }
    return true;
  }

  if(hasVideo()) {
    return (
      <div className="p-3 content-center h-[300px] sm:h-[400px] md:h-[500px] ">
        <iframe
          src={generateYTBLink(getSimpleInformation("strYoutube"))}
          className="rounded-2xl"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    );
  }

  return (
    <NoVideo />
  )

}

function NoVideo() {
  return (
    <div className="bg-slate-100 rounded-2xl w-full p-3 content-center h-[300px] sm:h-[400px] md:h-[500px] ">
      <h2 className="font-bold text-2xl text-center text-teal-900">NO VIDEO AVAILABLE :( </h2>
      </div>
  );
}
