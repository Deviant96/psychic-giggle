import { MdEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

const ContactInfo: React.FC = () => {
  return (
    <ul className="flex flex-col gap-4 text-[#bb6002] font-bold">
      <li className="flex flex-row items-center gap-2">
        <MdEmail className="text-xl text-white" /> Email to desktopip@mail.com
      </li>
      <li className="flex flex-row items-center gap-2">
        <BsTelephone className="text-xl text-white" /> Call us at 0123456789
      </li>
    </ul>
  );
};

export default ContactInfo;
