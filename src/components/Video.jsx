export default function Video({ getSimpleInformation }) {
  const generateYTBLink = (providedLink) => {
    if (providedLink) {
      let videoID = providedLink.split("?v=")[1];
      let videoLink = "http://www.youtube.com/embed/" + videoID;
      return videoLink;
    }
  };

  return (
    <div className="meal__video background-green-pastel content-center col-span-5">
      <iframe
        src={generateYTBLink(getSimpleInformation("strYoutube"))}
        className=""
        width="100%"
        height="90%"
      ></iframe>
    </div>
  );
}
