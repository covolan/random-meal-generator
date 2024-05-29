import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Socials() {
  return (
    <div className="mb-6 text-teal-900 text-2xl flex gap-3 justify-center items-center">
      <h2 className="text-xl">Created by: Covolan</h2>
      <a href="https://github.com/covolan" target="_blank">
        <FontAwesomeIcon
          className="hover:text-teal-700 cursor-pointer"
          icon={faGithub}
        />
      </a>
      <a href="https://www.linkedin.com/in/alexandre-covolan/" target="_blank">
        <FontAwesomeIcon
          className="hover:text-teal-700 cursor-pointer"
          icon={faLinkedin}
        />
      </a>
    </div>
  );
}
