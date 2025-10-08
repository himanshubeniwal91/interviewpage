import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  FiHome, 
  FiCalendar, 
  FiMapPin, 
  FiAward, 
  FiSettings,
  FiBell,
  FiSearch,
  FiMenu,
  FiUser,
  FiTrendingUp,
  FiActivity
} from "react-icons/fi";

export default function Dashboard() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-gray-900 shadow-sm border-b border-gray-600">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left section */}
            <div className="flex items-center">
              <button 
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 rounded-md text-gray-400 lg:hidden"
              >
                <FiMenu className="h-6 w-6" />
              </button>
              <div className="flex items-center ml-4 lg:ml-0">
                <img src="/picklezone-logo.png" alt="Picklezone" className="h-8 w-8" />
                <h1 className="ml-2 text-xl font-bold text-white">PICKLEZONE</h1>
              </div>
            </div>

            {/* Right section */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-300">
                <FiSearch className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-300">
                <FiBell className="h-5 w-5" />
              </button>
              <div className="flex items-center">
                <div className="h-8 w-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">J</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? 'block' : 'hidden'} lg:block w-64 bg-gray-900 shadow-sm border-r border-gray-600`}>
          <nav className="mt-8 px-4">
            <div className="space-y-1">
              <a href="#" className="flex items-center px-4 py-3 text-purple-400 bg-purple-900/30 rounded-lg font-medium">
                <FiHome className="mr-3 h-5 w-5" />
                Home
              </a>
              <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800/50 rounded-lg font-medium">
                <FiCalendar className="mr-3 h-5 w-5" />
                My Schedule
              </a>
              <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800/50 rounded-lg font-medium">
                <FiMapPin className="mr-3 h-5 w-5" />
                Courts
              </a>
              <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800/50 rounded-lg font-medium">
                <FiAward className="mr-3 h-5 w-5" />
                Achievements
              </a>
              <a href="#" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800/50 rounded-lg font-medium">
                <FiSettings className="mr-3 h-5 w-5" />
                Settings
              </a>
            </div>
          </nav>
        </div>

        {/* Main content */}
        <main className="flex-1 p-6 overflow-auto">
          {/* Welcome Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Good morning John</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-600">
                <p className="text-sm text-gray-400 mb-1">Pickles</p>
                <p className="text-3xl font-bold text-white">1</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-600">
                <p className="text-sm text-gray-400 mb-1">Visits</p>
                <p className="text-3xl font-bold text-white">8</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-600">
                <p className="text-sm text-gray-400 mb-1">Level</p>
                <p className="text-3xl font-bold text-white">6</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Monthly Leaderboard */}
              <div className="bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-600">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-white">Monthly Leaderboard</h3>
                  <div className="relative">
                    <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder="Search..." 
                      className="bg-gray-700 text-white pl-10 pr-4 py-2 rounded-lg text-sm w-48 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" 
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-700/50 rounded-lg">
                    <span className="font-medium text-white">Upcoming Events</span>
                    <span className="text-purple-400 font-semibold">Sarah Johnson</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-700/50 rounded-lg">
                    <span className="font-medium text-white">Ping Pong</span>
                    <span className="text-purple-400 font-semibold">Mike Davis</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-700/50 rounded-lg">
                    <span className="font-medium text-white">Monthly Club Tournament</span>
                    <span className="text-purple-400 font-semibold">Emma Wilson</span>
                  </div>
                </div>
              </div>

              {/* Play Virtually */}
              <div className="bg-gradient-to-r from-purple-600 via-purple-600 to-purple-700 rounded-xl p-6 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold mb-2">Play Virtually</h3>
                  <p className="text-purple-100 mb-4 opacity-90">Welcome to the world! You can't wait to play!</p>
                  <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                    Start Virtual Game
                  </button>
                </div>
                {/* Subtle overlay for depth like screenshot */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 rounded-full opacity-10"></div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Upcoming Events */}
              <div className="bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-600">
                <h3 className="text-lg font-semibold text-white mb-4">Upcoming Events</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="font-medium text-white mb-1">Ping Pong</p>
                    <p className="text-sm text-gray-400">Upcoming Events</p>
                  </div>
                  <div className="border-l-4 border-purple-400 pl-4">
                    <p className="font-medium text-white mb-1">Social Mixer Evening</p>
                    <p className="text-sm text-gray-400">Welcome to the world!</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="font-medium text-white mb-1">Monthly Club Tournament</p>
                    <p className="text-sm text-gray-400">Welcome to the world!</p>
                  </div>
                </div>
              </div>

              {/* Nearby Courts */}
              <div className="bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-600">
                <h3 className="text-lg font-semibold text-white mb-4">Nearby Courts</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FiMapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Hopkins Surf & Tennis Club</p>
                      <p className="text-sm text-gray-400">Welcome to the world!</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FiMapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Delray Beach Tennis Center</p>
                      <p className="text-sm text-gray-400">Welcome to the world!</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* My Stats */}
              <div className="bg-gradient-to-r from-purple-600 via-purple-600 to-purple-700 rounded-xl p-6 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-lg font-semibold mb-2">My Stats</h3>
                  <div className="flex space-x-4 mb-4">
                    <div className="flex-1 text-center">
                      <p className="text-purple-100 text-sm opacity-90">Wins</p>
                      <p className="text-2xl font-bold">5</p>
                    </div>
                    <div className="flex-1 text-center">
                      <p className="text-purple-100 text-sm opacity-90">Losses</p>
                      <p className="text-2xl font-bold">2</p>
                    </div>
                  </div>
                  <div className="flex justify-center space-x-2">
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                    <div className="w-8 h-8 bg-white rounded-full opacity-50"></div>
                    <div className="w-8 h-8 bg-white rounded-full opacity-25"></div>
                  </div>
                </div>
                {/* Subtle overlay for depth */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 rounded-full opacity-10"></div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
