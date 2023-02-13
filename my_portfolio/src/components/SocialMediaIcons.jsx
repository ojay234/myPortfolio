import { AiFillTwitterCircle, AiOutlineGithub } from "react-icons/ai";
import { GrLinkedinOption } from "react-icons/gr";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiFacebook, FiTwitter, FiGithub } from "react-icons/fi";

const SocialMediaIcons = () => {
  return (
    <div className="grid gap-5">
      <a
        className="hover:opacity-50 transition duration-500"
        href="/"
        target="_blank"
        rel="noreferrer"
      >
        <FiFacebook size="1.2rem" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="/"
        target="_blank"
        rel="noreferrer"
      >
        <FiTwitter size="1.2rem" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="/"
        target="_blank"
        rel="noreferrer"
      >
        <FiGithub size="1.2rem" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="/"
        target="_blank"
        rel="noreferrer"
      >
        <SlSocialLinkedin size="1.2rem" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
