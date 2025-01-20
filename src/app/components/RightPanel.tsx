import { Bell, Calendar, CheckSquare } from 'lucide-react'

export default function RightPanel() {
  return (
    <div className="w-80 bg-white p-6 mt-16 shadow-lg">
      <h3 className="text-xl font-bold mb-6 text-gray-800">Activity Feed</h3>
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <Bell className="text-blue-600" />
          <div>
            <p className="text-sm font-semibold text-gray-800">New notification</p>
            <p className="text-xs text-gray-600">You have a new message from the team</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <Calendar className="text-green-600" />
          <div>
            <p className="text-sm font-semibold text-gray-800">Upcoming event</p>
            <p className="text-xs text-gray-600">Team meeting scheduled for tomorrow</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <CheckSquare className="text-purple-600" />
          <div>
            <p className="text-sm font-semibold text-gray-800">Task completed</p>
            <p className="text-xs text-gray-600">Project milestone achieved</p>
          </div>
        </div>
      </div>
    </div>
  )
}

