import { Link } from "react-router-dom";
import { User, Mail, Lock, UserPlus } from "lucide-react";

export default function RegisterPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white pt-24 px-4">
      <div className="bg-white/80 backdrop-blur-md border border-gray-200 p-8 rounded-2xl shadow-2xl w-full max-w-md transition-transform duration-300 hover:scale-[1.01]">
        {/* Title */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-3">
            <div className="bg-blue-700 text-white p-3 rounded-full shadow-lg">
              <UserPlus size={28} />
            </div>
          </div>
          <h2 className="text-3xl font-extrabold text-blue-700 tracking-tight">
            Create an Account
          </h2>
          <p className="text-gray-500 mt-1 text-sm">
            Join us and start your journey today!
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          <div className="relative">
            <User
              size={18}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
              required
            />
          </div>

          <div className="relative">
            <Mail
              size={18}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
              required
            />
          </div>

          <div className="relative">
            <Lock
              size={18}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold shadow-md transition duration-300"
          >
            Register
          </button>
        </form>

        {/* Links */}
        <div className="text-center mt-6 text-sm text-gray-600">
          <p>
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-700 font-semibold hover:underline"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
