import React, { useState } from 'react';

const BellAliantLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captchaChecked, setCaptchaChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* Mobile Header - Only visible on mobile */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-gray-100">
        <div className="w-8 h-8 flex items-center justify-center">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <span className="text-gray-800 font-medium text-sm truncate max-w-[200px]">
          webmail.bellaliant.net
        </span>
        <div className="w-8 h-8 flex items-center justify-center">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
        </div>
      </div>

      {/* Desktop Header - Only visible on desktop */}
      <header className="hidden md:block bg-[#00549a] text-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-3xl font-bold tracking-tight">
              Bell<span className="font-light">Aliant</span>
            </div>
          </div>
          <button className="text-white hover:text-gray-200 transition-colors text-sm font-medium">
            Français
          </button>
        </div>
      </header>

      {/* Info Banner - Desktop */}
      <div className="hidden md:block bg-blue-50 border-b border-blue-100">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-start space-x-3">
          <svg className="w-5 h-5 text-[#00549a] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-sm text-gray-700">
            We've added multi-factor authentication to the email login page as an extra security feature.{' '}
            <a href="#" className="text-[#00549a] hover:underline font-medium">Learn more</a>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col md:items-center md:justify-center md:bg-gray-50 md:py-12">
        <div className="w-full max-w-md md:max-w-lg mx-auto md:bg-white md:rounded-2xl md:shadow-xl md:p-12 md:border md:border-gray-100">
          
          {/* Mobile Logo */}
          <div className="md:hidden px-6 pt-8 pb-4">
            <div className="text-[#00549a]">
              <div className="text-5xl font-bold tracking-tight leading-none">Bell</div>
              <div className="text-3xl font-light tracking-wide ml-1">Aliant</div>
            </div>
          </div>

          {/* Desktop Logo (centered in card) */}
          <div className="hidden md:flex justify-center mb-8">
            <div className="text-[#00549a] text-center">
              <div className="text-6xl font-bold tracking-tight leading-none">Bell</div>
              <div className="text-4xl font-light tracking-wide">Aliant</div>
            </div>
          </div>

          {/* Mobile Info Banner */}
          <div className="md:hidden px-6 py-4 bg-blue-50 mb-6">
            <div className="flex items-start space-x-2">
              <svg className="w-4 h-4 text-[#00549a] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-xs text-gray-700 leading-relaxed">
                We've added multi-factor authentication to the email login page as an extra security feature.{' '}
                <a href="#" className="text-[#00549a] underline font-medium">Learn more</a>
              </p>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8 md:mb-10 px-6 md:px-0">
            Log in to Bell Aliant email
          </h1>

          {/* Form */}
          <form onSubmit={handleSubmit} className="px-6 md:px-0 space-y-5">
            {/* Email Field */}
            <div className="relative">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="peer w-full px-4 py-4 border-2 border-gray-300 rounded-lg focus:border-[#00549a] focus:outline-none transition-colors text-gray-900 placeholder-transparent bg-white"
                placeholder="Email address"
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-4 text-gray-500 text-base transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-[#00549a] peer-focus:bg-white peer-focus:px-1 bg-white px-1 pointer-events-none"
              >
                Email address
              </label>
            </div>

            {/* Password Field */}
            <div className="relative">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="peer w-full px-4 py-4 border-2 border-gray-300 rounded-lg focus:border-[#00549a] focus:outline-none transition-colors text-gray-900 placeholder-transparent bg-white"
                placeholder="Password"
              />
              <label
                htmlFor="password"
                className="absolute left-4 top-4 text-gray-500 text-base transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-[#00549a] peer-focus:bg-white peer-focus:px-1 bg-white px-1 pointer-events-none"
              >
                Password
              </label>
            </div>

            {/* reCAPTCHA */}
            <div className="border-2 border-gray-200 rounded-lg p-4 bg-gray-50 md:bg-white md:hover:border-gray-300 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div
                    onClick={() => setCaptchaChecked(!captchaChecked)}
                    className={`w-8 h-8 border-2 rounded cursor-pointer flex items-center justify-center transition-all ${captchaChecked ? 'bg-[#00549a] border-[#00549a]' : 'border-gray-400 bg-white hover:border-gray-500'}`}
                  >
                    {captchaChecked && (
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <span className="text-gray-700 text-base font-medium select-none">I'm not a robot</span>
                </div>
                <div className="flex flex-col items-center space-y-1">
                  <div className="w-12 h-12 relative">
                    <svg viewBox="0 0 48 48" className="w-full h-full">
                      <path fill="#4285F4" d="M24 8l-4 8h8l-4-8z"/>
                      <path fill="#EA4335" d="M24 40l4-8h-8l4 8z"/>
                      <path fill="#FBBC05" d="M8 24l8 4v-8l-8 4z"/>
                      <path fill="#34A853" d="M40 24l-8-4v8l8-4z"/>
                      <circle fill="#9AA0A6" cx="24" cy="24" r="6"/>
                      <path fill="none" stroke="#9AA0A6" strokeWidth="2" d="M24 18v-6M24 30v6M18 24h-6M30 24h6"/>
                    </svg>
                  </div>
                  <span className="text-[10px] text-gray-500 font-medium">reCAPTCHA</span>
                </div>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#003366] hover:bg-[#002244] text-white font-medium py-4 rounded-full text-lg transition-colors shadow-md hover:shadow-lg active:scale-[0.98] transform duration-150 mt-6"
            >
              Log in
            </button>
          </form>

          {/* Links */}
          <div className="mt-8 space-y-3 px-6 md:px-0">
            <a href="#" className="flex items-center text-[#00549a] hover:text-[#003366] font-semibold text-base group">
              <span className="border-b-2 border-[#00549a] group-hover:border-[#003366]">Forgot password</span>
              <svg className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#" className="flex items-center text-[#00549a] hover:text-[#003366] font-semibold text-base group">
              <span className="border-b-2 border-[#00549a] group-hover:border-[#003366]">Forgot Email address</span>
              <svg className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 md:bg-white md:border-t md:border-gray-200 mt-auto">
        <div className="md:max-w-6xl md:mx-auto md:px-6 md:py-8">
          {/* Mobile Footer */}
          <div className="md:hidden py-8 px-6 space-y-4">
            <div className="flex flex-col items-center space-y-4">
              <a href="#" className="text-[#00549a] hover:underline text-base font-medium">Privacy</a>
              <a href="#" className="text-[#00549a] hover:underline text-base font-medium">Security</a>
              <a href="#" className="text-[#00549a] hover:underline text-base font-medium">Legal and Regulatory</a>
              <a href="#" className="text-[#00549a] hover:underline text-base font-medium">Wireless Code</a>
            </div>
            <div className="text-center pt-4">
              <p className="text-gray-600 text-sm">© Bell Canada, 2026. All rights reserved.</p>
            </div>
          </div>

          {/* Desktop Footer */}
          <div className="hidden md:flex flex-col items-center space-y-4 py-8">
            <div className="flex items-center space-x-8">
              <a href="#" className="text-[#00549a] hover:underline text-sm font-medium">Privacy</a>
              <a href="#" className="text-[#00549a] hover:underline text-sm font-medium">Security</a>
              <a href="#" className="text-[#00549a] hover:underline text-sm font-medium">Legal and Regulatory</a>
              <a href="#" className="text-[#00549a] hover:underline text-sm font-medium">Wireless Code</a>
            </div>
            <p className="text-gray-500 text-sm">© Bell Canada, 2026. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden bg-gray-100 border-t border-gray-300 px-6 py-3 flex items-center justify-between">
        <button className="p-2">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="p-2">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <button className="p-2">
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
        <div className="px-3 py-1 border-2 border-gray-400 rounded-lg text-sm font-medium text-gray-700">
          28
        </div>
        <button className="p-2">
          <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
            <circle cx="6" cy="12" r="2"/>
            <circle cx="12" cy="12" r="2"/>
            <circle cx="18" cy="12" r="2"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BellAliantLogin;
