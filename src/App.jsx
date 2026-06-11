// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from './assets/vite.svg'
// // import heroImg from './assets/hero.png'
// // import './App.css'

// // function App() {


// //   return (
// //     <>
      
// //     </>
// //   )
// // }

// // export default App


// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
      
//       <div className="max-w-4xl bg-white shadow-lg rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
        
//         {/* Left Text Section */}
//         <div className="flex-1 text-center md:text-left">
//           <h1 className="text-4xl font-bold text-gray-800 mb-4">
//             Welcome to My Portfolio 🚀
//           </h1>

//           <p className="text-gray-600 mb-6">
//             I am a React developer learning Tailwind CSS. This is a simple hero section example using modern UI design.
//           </p>

//           <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl transition duration-300">
//             Get Started
//           </button>
//         </div>

//         {/* Right Image Section */}
//         <div className="flex-1 flex justify-center">
//           <img
//             src={heroImg}
//             alt="Hero"
//             className="w-72 md:w-96 rounded-xl shadow-md"
//           />
//         </div>

//       </div>
//     </div>
//   )
// }

// export default App

import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App