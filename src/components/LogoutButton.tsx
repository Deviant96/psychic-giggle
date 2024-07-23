import { useRouter } from 'next/navigation';

const LogoutButton: React.FC = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('psychicGiggle_userSession');
    router.push('/signin');
  };

  return (
    <button onClick={handleLogout} className="p-2 bg-red-500 text-white">Log Out</button>
  );
};

export default LogoutButton;
