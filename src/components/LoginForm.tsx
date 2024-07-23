"use client";

import { useEffect, useState } from "react";
import { VscLoading } from "react-icons/vsc";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  useEffect(() => {
    setIsFormValid(username.trim() !== '' && password.trim() !== '');
  }, [username, password]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!username || !password) {
        setError('Username and password are required');
        setLoading(false);
        return;
    }

    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    if (!data.error) {
      localStorage.setItem(
        "psychicGiggle_userSession",
        JSON.stringify(data.user)
      );
      window.location.reload();
    } else {
      setError(data.error);
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 py-4 px-4 sm:px-6 lg:px-8 lg:py-24">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          {error && <div className="text-red-500 text-sm mt-2">{error}</div>}

          <div>
            <button
              type="submit"
              className={`group relative w-full flex justify-center items-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
                loading ? 'bg-gray-500' : isFormValid ? 'bg-[#ffb400] text-black' : 'bg-[#ecd8aa]'
                }`}
                disabled={loading || !isFormValid}
            >
              {loading ? 'Signing In...' : 'Sign In'}
              {loading && <VscLoading className="animate-spin ml-2" />}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
