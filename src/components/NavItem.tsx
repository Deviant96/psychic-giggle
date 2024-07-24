interface NavItemProps {
  label: string;
  mobile?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ label, mobile }) => {
  return (
    <a
      href="#"
      className={`text-[#ffb400] hover:text-[#ffb400] ${
        mobile ? "block text-gray-700 hover:text-gray-900" : ""
      }`}
    >
      {label}
    </a>
  );
};

export default NavItem;
