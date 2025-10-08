import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { FaApple, FaGoogle, FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  let navigate=useNavigate()
  const [form, setForm] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center p-4">
      <div className="w-full max-w-6xl rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black shadow-2xl flex flex-col md:flex-row">
        {/* Left image section */}
        <div className="md:w-1/2 relative">
          <img
            src="/tennis-bg.jpg"
            alt="Tennis"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-black/60 p-8 flex flex-col justify-end text-white rounded-l-2xl">
            <img src="/picklezone-logo.png" alt="Picklezone" className="w-32 mb-4" />
            <h2 className="text-xl font-semibold mb-2">
              Connect with Community Play & Earn Rewards
            </h2>
            <p className="text-sm text-gray-300 leading-snug">
              Join a global network of players, improve your skills, and earn exclusive rewards while playing the game you love.
            </p>
          </div>
        </div>

        {/* Right form section */}
        <div className="md:w-1/2 bg-black/50 backdrop-blur-md p-8 flex flex-col justify-center text-white">
          <h2 className="text-2xl font-bold mb-2">Get Started Now!</h2>
          <p className="text-gray-400 mb-6 text-sm">
            Welcome to Picklezone, create account to start your experience
          </p>

          <form className="space-y-4">
            <Input placeholder="Enter username" className="bg-transparent border-gray-700 text-white" />
            <Input type="email" placeholder="abc@gmail.com" className="bg-transparent border-gray-700 text-white" />
            <Input type="tel" placeholder="+91 000 000 0000" className="bg-transparent border-gray-700 text-white" />
            <div className="flex gap-3">
              <Input type="password" placeholder="Password" className="bg-transparent border-gray-700 text-white" />
              <Input type="password" placeholder="Confirm Password" className="bg-transparent border-gray-700 text-white" />
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox id="terms" />
              <label htmlFor="terms" className="text-xs text-gray-400 leading-tight">
                I have read and agree to App’s Terms of Service and Privacy Policy
              </label>
            </div>

            <Button   onClick={(e) => {
      e.preventDefault();
      navigate("/dashboard");
    }} className="w-full bg-white text-black hover:bg-gray-200 font-semibold">
              Signup
            </Button>

            <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
              <span>Or Signup with</span>
            </div>

            <div className="flex justify-center gap-6 mt-2">
              <div className="p-2 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer">
                <FaApple className="text-white text-xl" />
              </div>
              <div className="p-2 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer">
                <FaGoogle className="text-white text-xl" />
              </div>
              <div className="p-2 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer">
                <FaXTwitter className="text-white text-xl" />
              </div>
            </div>

            <p className="text-center text-xs text-gray-400 mt-6">
              Already have an account?{" "}
              <a href="#" className="text-white underline hover:text-gray-300">
                Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}