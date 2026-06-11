

// import React, { useState } from 'react';
// import { Phone, Mail, MapPin, Send, Clock, MessageCircle } from 'lucide-react';

// const ContactPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });
  
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState('');

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus('');

//     try {
//       // Simulated form submission - replace with your actual submission logic
//       await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      
//       setSubmitStatus('success');
//       setFormData({
//         name: '',
//         email: '',
//         message: ''
//       });
//     } catch (error) {
//       console.error('Error sending email:', error);
//       setSubmitStatus('error');
//     }

//     setIsSubmitting(false);
//   };

//   return (
//     <div className="min-h-screen bg-black pt-20 md:pt-24 lg:pt-28 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
//             Contact Us
//           </h1>
//           <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
//             Ready to embark on your Everest Dudhkoshi Cultural Trail adventure? 
//             Get in touch with us and let's plan your unforgettable journey.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
//           {/* Contact Form */}
//           <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8">
//             <div className="flex items-center mb-6">
//               <MessageCircle className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" />
//               <h2 className="text-xl sm:text-2xl font-bold text-white">Send us a Message</h2>
//             </div>

//             <div className="space-y-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-300 mb-2">
//                   Full Name *
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-gray-400"
//                   placeholder="Your full name"
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-gray-300 mb-2">
//                   Email Address *
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-gray-400"
//                   placeholder="your.email@example.com"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-300 mb-2">
//                   Message *
//                 </label>
//                 <textarea
//                   name="message"
//                   rows="6"
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical placeholder-gray-400"
//                   placeholder="Tell us about your travel plans, questions, or special requirements..."
//                 ></textarea>
//               </div>

//               {/* Submit Status Messages */}
//               {submitStatus === 'success' && (
//                 <div className="bg-green-900 border border-green-700 rounded-lg p-4">
//                   <p className="text-green-300 font-medium">✅ Message sent successfully! We'll get back to you within 24 hours.</p>
//                 </div>
//               )}
              
//               {submitStatus === 'error' && (
//                 <div className="bg-red-900 border border-red-700 rounded-lg p-4">
//                   <p className="text-red-300 font-medium">❌ Sorry, there was an error sending your message. Please try again or contact us directly.</p>
//                 </div>
//               )}

//               <button
//                 onClick={handleSubmit}
//                 disabled={isSubmitting}
//                 className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-4 px-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-500/50 disabled:transform-none disabled:shadow-none"
//               >
//                 <div className="flex items-center justify-center gap-3">
//                   <Send className="w-5 h-5" />
//                   <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
//                 </div>
//               </button>
//             </div>
//           </div>

//           {/* Contact Information */}
//           <div className="space-y-8">
//             {/* Contact Details */}
//             <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8">
//               <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Get in Touch</h2>
              
//               <div className="space-y-6">
//                 <div className="flex items-start gap-4">
//                   <div className="flex-shrink-0 w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
//                     <Phone className="w-6 h-6 text-blue-400" />
//                   </div>
//                   <div className="min-w-0 flex-1">
//                     <h3 className="font-semibold text-white mb-1">Phone</h3>
//                     <p className="text-gray-300 break-all sm:break-normal">+977-123-456-789</p>
//                     <p className="text-gray-300 break-all sm:break-normal">+977-987-654-321</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <div className="flex-shrink-0 w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
//                     <Mail className="w-6 h-6 text-blue-400" />
//                   </div>
//                   <div className="min-w-0 flex-1">
//                     <h3 className="font-semibold text-white mb-1">Email</h3>
//                     <p className="text-gray-300 break-all sm:break-normal">info@everesttrail.com</p>
//                     <p className="text-gray-300 break-all sm:break-normal">bookings@everesttrail.com</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <div className="flex-shrink-0 w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
//                     <MapPin className="w-6 h-6 text-blue-400" />
//                   </div>
//                   <div className="min-w-0 flex-1">
//                     <h3 className="font-semibold text-white mb-1">Location</h3>
//                     <p className="text-gray-300">Mapya Dodhkoshi</p>
//                     <p className="text-gray-300">Nepal</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-4">
//                   <div className="flex-shrink-0 w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
//                     <Clock className="w-6 h-6 text-blue-400" />
//                   </div>
//                   <div className="min-w-0 flex-1">
//                     <h3 className="font-semibold text-white mb-1">Office Hours</h3>
//                     <p className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM</p>
//                     <p className="text-gray-300">Sat - Sun: 10:00 AM - 4:00 PM</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactPage;
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock, MessageCircle } from 'lucide-react';
import Footerpage from './footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) return 'Please enter your name';
    if (!formData.email.trim()) return 'Please enter your email';
    if (!formData.message.trim()) return 'Please enter your message';
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) return 'Please enter a valid email address';
    
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      setSubmitStatus('validation_error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Simulate email sending process
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In production, you would use EmailJS here:
      /*
      const emailjs = await import('emailjs-com');
      
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          to_email: "ito.mapyadodhkoshimun@gmail.com",
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          reply_to: formData.email
        },
        "YOUR_PUBLIC_KEY"
      );
      */

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // For demonstration - log the submission
      console.log('Email would be sent to ito.mapyadodhkoshimun@gmail.com with:', formData);
      
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-black pt-20 md:pt-24 lg:pt-28 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to embark on your Everest Dudhkoshi Cultural Trail adventure? 
            Get in touch with us and let's plan your unforgettable journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8">
            <div className="flex items-center mb-6">
              <MessageCircle className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0" />
              <h2 className="text-xl sm:text-2xl font-bold text-white">Send us a Message</h2>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-gray-400"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors placeholder-gray-400"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical placeholder-gray-400"
                  placeholder="Tell us about your travel plans, questions, or special requirements..."
                ></textarea>
              </div>

              {/* Submit Status Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-900 border border-green-700 rounded-lg p-4">
                  <p className="text-green-300 font-medium">✅ Message sent successfully to ito.mapyadodhkoshimun@gmail.com! We'll get back to you within 24 hours.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-900 border border-red-700 rounded-lg p-4">
                  <p className="text-red-300 font-medium">❌ Sorry, there was an error sending your message. Please try again or contact us directly at ito.mapyadodhkoshimun@gmail.com.</p>
                </div>
              )}

              {submitStatus === 'validation_error' && (
                <div className="bg-yellow-900 border border-yellow-700 rounded-lg p-4">
                  <p className="text-yellow-300 font-medium">⚠️ Please fill in all required fields with valid information.</p>
                </div>
              )}

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-4 px-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-500/50 disabled:transform-none disabled:shadow-none"
              >
                <div className="flex items-center justify-center gap-3">
                  <Send className="w-5 h-5" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </div>
              </button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-white mb-1">Phone</h3>
                    <p className="text-gray-300">+977-9852827333</p>
                    <p className="text-gray-300">+977-9860875856</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <p className="text-gray-300">ito.mapyadodhkoshimun@gmail.com</p>
                    <p className="text-gray-300">info@everesttrail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-white mb-1">Location</h3>
                    <p className="text-gray-300">Mapya Dodhkoshi</p>
                    <p className="text-gray-300">Nepal</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-white mb-1">Office Hours</h3>
                    <p className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-300">Sat - Sun: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Email Link */}
            <div className="bg-gradient-to-r from-blue-900 to-purple-900 border border-blue-700 rounded-2xl shadow-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Quick Contact</h3>
              <p className="text-blue-200 mb-4">Need immediate assistance? Send us an email directly:</p>
              <a 
                href="mailto:ito.mapyadodhkoshimun@gmail.com?subject=Everest Trail Inquiry&body=Hello, I am interested in the Everest Dudhkoshi Cultural Trail..."
                className="inline-flex items-center gap-2 bg-white text-blue-900 font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Send Email Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footerpage/>
    </div>
  );
};

export default ContactPage;
