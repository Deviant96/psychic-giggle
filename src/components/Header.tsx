import NavBar from './NavBar';

interface HeaderProps {
  character?: { name: string };
  authenticated: boolean;
  openSignInModal: () => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ character, authenticated, openSignInModal, isMenuOpen, setIsMenuOpen }) => {
  return (
    <header className="md:absolute top-0 left-0 w-full z-[11]">
      <NavBar
        character={character}
        authenticated={authenticated}
        openSignInModal={openSignInModal}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </header>
  );
};

export default Header;
