import { FaLocationPin } from "react-icons/fa6";

const AddressInfo: React.FC = () => {
  return (
    <div className="flex flex-row items-center gap-2 text-[#bb6002] font-bold">
      <FaLocationPin className="text-xl text-white" /> Address
    </div>
  );
};

export default AddressInfo;
