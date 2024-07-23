import { useRouter } from 'next/router';

const LogoutButton: React.FC = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/signin');
  };

  return (
    <button onClick={handleLogout} className="p-2 bg-red-500 text-white">Log Out</button>
  );
};

export default LogoutButton;
