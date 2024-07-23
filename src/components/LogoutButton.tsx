"use client";

const LogoutButton: React.FC = () => {

  const handleLogout = () => {
    localStorage.removeItem('psychicGiggle_userSession');
    window.location.reload();
  };

  return (
    <button onClick={handleLogout} className="p-2 bg-red-500 text-white">Log Out</button>
  );
};

export default LogoutButton;
