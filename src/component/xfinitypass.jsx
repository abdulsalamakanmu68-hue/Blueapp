import React, { useState } from 'react';

const XfinityPassword = () => {
  const [password, setPassword] = useState('');
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signing in with password');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start pt-16 px-4 font-sans">
      {/* Logo */}
      <div className="mb-5 flex justify-start w-full " >
        <img src='https://tse4.mm.bing.net/th/id/OIP.DZHf73iT1Q8DlHCLEPZ1MAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3' alt='xfinity logo' className="w-32 h-auto"></img>
      </div>

      {/* Main Card */}
      <div className="w-full max-w-md">
        {/* User Email Display */}
        <p className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
          MARK@COMCAST.NET
        </p>

        <h1 className="text-3xl font-bold text-gray-700 mb-6">
          Enter your password
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Password Input Field */}
          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className={`w-full px-4 py-4 bg-white border-2 rounded-lg text-gray-700 text-base outline-none transition-all duration-200 ${
                isFocused 
                  ? 'border-purple-600' 
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            />
          </div>

          {/* Forgot Password Link */}
          <a 
            href="#" 
            className="inline-block text-purple-700 hover:text-purple-800 font-semibold text-base"
          >
            Forgot password?
          </a>

          {/* Keep me signed in Checkbox */}
          <div className="flex items-center py-2">
            <input
              type="checkbox"
              id="keepSignedIn"
              checked={keepSignedIn}
              onChange={(e) => setKeepSignedIn(e.target.checked)}
              className="w-5 h-5 border-2 border-gray-400 rounded text-purple-700 focus:ring-purple-700 focus:ring-2 cursor-pointer"
            />
            <label 
              htmlFor="keepSignedIn" 
              className="ml-3 text-gray-700 text-base cursor-pointer select-none"
            >
              Keep me signed in
            </label>
          </div>

          {/* Terms Text */}
          <p className="text-sm text-gray-600 leading-relaxed">
            By signing in, you agree to our{' '}
            <a 
              href="#" 
              className="text-purple-700 hover:text-purple-800 underline decoration-purple-700"
            >
              Terms of Service
            </a>{' '}
            and{' '}
            <a 
              href="#" 
              className="text-purple-700 hover:text-purple-800 underline decoration-purple-700"
            >
              Privacy Policy
            </a>.
          </p>

          {/* Sign In Button */}
          <button
            type="submit"
            className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 text-base"
          >
            Sign in
          </button>
        </form>

        {/* Sign in as someone else */}
        <a 
          href="#" 
          className="block mt-6 text-gray-700 hover:text-gray-900 font-semibold text-base"
        >
          Sign in as someone else
        </a>

        {/* Trouble signing in */}
        <p className="mt-6 text-gray-600 text-base">
          Trouble signing in?{' '}
          <a 
            href="#" 
            className="text-purple-700 hover:text-purple-800 underline decoration-purple-700"
          >
            Get help
          </a>
        </p>
      </div>
    </div>
  );
};

export default XfinityPassword;