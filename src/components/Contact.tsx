import React, { useState } from 'react';
import ContactModel from '../models/Contact';

interface ContactProps {
  className?: string;
}

const Contact: React.FC<ContactProps> = ({ className }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An error occurred');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-fuchsia-50">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]"></div>
      </div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-violet-200/20 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-fuchsia-200/20 rounded-full mix-blend-multiply filter blur-xl animate-float-delay"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-600 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <div className="h-0.5 w-32 bg-gradient-to-r from-violet-400 to-fuchsia-400 mx-auto mt-4 animate-subtle-pulse"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm border border-violet-100 rounded-xl p-8 shadow-lg animate-fade-in-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              {status === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-md p-4">
                  <p className="text-red-800">{errorMessage}</p>
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-violet-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-violet-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-200 focus:outline-none transition-colors duration-200"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-violet-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-violet-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-200 focus:outline-none transition-colors duration-200"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-violet-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-violet-200 focus:border-violet-400 focus:ring-2 focus:ring-violet-200 focus:outline-none transition-colors duration-200"
                  required
                ></textarea>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full px-6 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-medium animate-glow-pulse"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up-delay">
            <div className="bg-white/80 backdrop-blur-sm border border-violet-100 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-violet-700 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-violet-600">Email</p>
                    <p className="text-violet-700 font-medium">your.email@example.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-violet-600">Location</p>
                    <p className="text-violet-700 font-medium">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/80 backdrop-blur-sm border border-violet-100 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-violet-700 mb-6">Connect With Me</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center hover:bg-violet-200 transition-colors duration-200">
                  <svg className="w-6 h-6 text-violet-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center hover:bg-violet-200 transition-colors duration-200">
                  <svg className="w-6 h-6 text-violet-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center hover:bg-violet-200 transition-colors duration-200">
                  <svg className="w-6 h-6 text-violet-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 