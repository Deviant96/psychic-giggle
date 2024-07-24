import LogoutButton from './LogoutButton';
import NavItem from './NavItem';

interface NavBarProps {
  character?: { name: string };
  authenticated: boolean;
  openSignInModal: () => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const NavBar: React.FC<NavBarProps> = ({ character, authenticated, openSignInModal, isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className="md:shadow-lg bg-[#041836] md:my-4 md:mx-8 rounded-xl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center">
            <button
              className="md:hidden text-gray-500 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
            <div className="text-lg font-bold text-[#ffb400] ml-2 md:ml-0">{character?.name}</div>
          </div>
          <div className="hidden md:flex space-x-4">
            <NavItem label="Home" />
            <NavItem label="About" />
            <NavItem label="Services" />
            <NavItem label="Contact" />
          </div>
          <div>
            {authenticated ? 
              (<LogoutButton />)
              :
              <button onClick={openSignInModal} className="bg-[#ffb400] text-black font-bold px-6 py-2 rounded-full">
                Sign In
              </button>
            }
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} px-2 pb-3 space-y-1`}>
        <NavItem label="Home" mobile />
        <NavItem label="About" mobile />
        <NavItem label="Services" mobile />
        <NavItem label="Contact" mobile />
      </div>
    </nav>
  );
};

export default NavBar;
