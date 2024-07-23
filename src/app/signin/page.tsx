import { useState } from 'react';
import { useRouter } from 'next/router';

const SignIn: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    if (res.ok) {
      const data = await res.json();
      localStorage.setItem('user', JSON.stringify(data.user));
      router.push('/');
    } else {
      const errorData = await res.json();
      setError(errorData.error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center h-screen">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        className="mb-4 p-2 border border-gray-300"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="mb-4 p-2 border border-gray-300"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white">Sign In</button>
      {error && <p className="mt-2 text-red-500">{error}</p>}
    </form>
  );
};

export default SignIn;
