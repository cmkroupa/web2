import React, { useState } from 'react';

interface ContactProps {
  className?: string;
}

const Contact: React.FC<ContactProps> = ({ className }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  // Validation
  const isNameValid = formData.name.trim().length > 0;
  const isEmailValid = /^\S+@\S+\.\S+$/.test(formData.email);
  const isMessageValid = formData.message.trim().length > 0;
  const isValid = isNameValid && isEmailValid && isMessageValid;

  // Button message logic
  let buttonMessage = 'Send Message';
  if (!isNameValid) buttonMessage = 'Enter your name';
  else if (!isEmailValid) buttonMessage = 'Enter a valid email';
  else if (!isMessageValid) buttonMessage = 'Enter your message';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setIsSuccess(false);


    try {
      const res = await fetch(`/api/contact`, { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      let data = null;
      let backendError = '';
      try {
        // Attempt to read and parse the response text
        const text = await res.text();
        data = text ? JSON.parse(text) : null;
      } catch (e) {
        // If parsing fails, it means the response was not valid JSON (e.g., empty, plain text error)
        data = null;
      }

      if (!res.ok) {
        // If response status is not 2xx, it's an error from the backend
        backendError = (data && (data.error || data.message)) || res.statusText || 'Unknown error';
        setError(`Error ${res.status}: ${backendError}`);
        console.error('Contact form error:', { status: res.status, data, backendError });
        return;
      }

      // Check for expected success data from your Express backend
      // Your Express backend sends { message: 'Message sent successfully!', contactId: newContact._id }
      if (!data || !(data.message || data.contactId)) {
        setError('Message was sent, but response from server was unexpected.');
        console.error('Contact form: Unexpected response from backend', { data });
        return;
      }

      setIsSuccess(true);
      // Clear the form only on successful submission
      setFormData({ name: '', email: '', message: '' });

    } catch (err: any) {
      // Catch network errors (e.g., server not running, CORS issues if not configured correctly)
      setError('Network or unexpected error: ' + (err.message || 'An unknown network error occurred.'));
      console.error('Contact form network/unexpected error:', err);
    } finally {
      setIsSubmitting(false);
      // Hide success message after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: '📦',
      url: 'https://github.com/cmkroupa'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'www.linkedin.com/in/cameron-kroupa-7404ba289'
    }
  ];

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Let's discuss how we can work together to bring your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <img src="/wip.png" alt="img" className="w-full h-full object-cover" />

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="text-gray-900">ckroupa@uwo.ca</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center shadow-lg">
                    <span className="text-2xl">📱</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <p className="text-gray-900">+1 (647) 612-4670</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/20 backdrop-blur-xl rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Connect With Me
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 px-4 py-3 bg-white/60 backdrop-blur-sm rounded-lg hover:bg-white/80 transition-all duration-300"
                  >
                    <span>{link.icon}</span>
                    <span className="text-gray-900">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
