import { ChevronLeft, ChevronRight, Home, Users, Settings, HelpCircle } from 'lucide-react'

interface LeftMenuProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export default function LeftMenu({ isOpen, setIsOpen }: LeftMenuProps) {
  const menuItems = [
    { icon: <Home size={20} />, text: 'Dashboard' },
    { icon: <Users size={20} />, text: 'Team' },
    { icon: <Settings size={20} />, text: 'Settings' },
    { icon: <HelpCircle size={20} />, text: 'Help' },
  ]

  return (
    <div className={`bg-white p-4 transition-all duration-300 shadow-lg ${isOpen ? 'w-64' : 'w-20'}`}>
      <button onClick={() => setIsOpen(!isOpen)} className="mb-8 p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors">
        {isOpen ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
      </button>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index} className="mb-4">
            <a href="#" className="flex items-center space-x-4 text-gray-700 hover:text-blue-600 transition-colors">
              {item.icon}
              {isOpen && <span>{item.text}</span>}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

