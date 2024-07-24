import { RiFacebookCircleFill } from "react-icons/ri";
import { BsInstagram, BsTiktok, BsTwitter, BsYoutube } from "react-icons/bs";

const SocialLinks: React.FC = () => {
  return (
    <ul className="flex flex-row gap-4 text-[#bb6002]">
      <li>
        <RiFacebookCircleFill className="text-3xl" />
      </li>
      <li>
        <BsInstagram className="text-3xl" />
      </li>
      <li>
        <BsTiktok className="text-3xl" />
      </li>
      <li>
        <BsTwitter className="text-3xl" />
      </li>
      <li>
        <BsYoutube className="text-3xl" />
      </li>
    </ul>
  );
};

export default SocialLinks;
