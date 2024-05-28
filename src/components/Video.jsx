export default function Video({ getSimpleInformation }) {
  const generateYTBLink = (providedLink) => {
    if (providedLink) {
      let videoID = providedLink.split("?v=")[1];
      let videoLink = "http://www.youtube.com/embed/" + videoID;
      return videoLink;
    }
  };

  return (
    <div className="meal__video p-3 content-center h-[300px] sm:h-[400px] md:h-[500px] ">
      <iframe
        src={generateYTBLink(getSimpleInformation("strYoutube"))}
        className="rounded-2xl"
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
}
