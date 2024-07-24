import SocialLinks from "./SocialLinks";
import ContactInfo from "./ContactInfo";
import AddressInfo from "./AddressInfo";

interface FooterProps {
  character?: { name: string };
}

const Footer: React.FC<FooterProps> = ({ character }) => {
  return (
    <footer className="w-full">
      <div className="bg-[#ffb400] px-4 py-6 text-black rounded-t-2xl block md:hidden">
        <h4 className="text-xl font-bold text-center mt-4">
          {character?.name}
        </h4>
        <div className="mt-8">
          <h5 className="mb-2 font-bold">Follow us</h5>
          <SocialLinks />
        </div>
        <div className="mt-8">
          <h5 className="mb-2 font-bold">Contact us</h5>
          <ContactInfo />
        </div>
        <div className="mt-8">
          <h5 className="mb-2 font-bold">Address</h5>
          <AddressInfo />
        </div>
      </div>
      <div className="bg-blue-800 px-10 py-6 text-center text-white font-bold">
        {" "}
        Copyright &copy; 2024 DesktopIP{" "}
      </div>
    </footer>
  );
};

export default Footer;
