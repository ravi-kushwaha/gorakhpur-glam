import {
  LayoutDashboard,
  Images,
  CalendarDays,
  Briefcase,
  IndianRupee,
  Star,
  Settings,
  LogOut,
  Users,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}

      <aside className="w-72 bg-gray-900 text-white flex flex-col">

        <div className="p-8 border-b border-gray-700">

          <h1 className="text-3xl font-bold">

            <span className="text-pink-500">Gorakhpur</span>

            Glam

          </h1>

          <p className="text-gray-400 mt-2">
            Admin Panel
          </p>

        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">

          <MenuItem
            icon={<LayoutDashboard size={20} />}
            text="Dashboard"
            active
          />

          <MenuItem
            icon={<Images size={20} />}
            text="Gallery"
          />

          <MenuItem
            icon={<CalendarDays size={20} />}
            text="Bookings"
          />

          <MenuItem
            icon={<Briefcase size={20} />}
            text="Services"
          />

          <MenuItem
            icon={<IndianRupee size={20} />}
            text="Pricing"
          />

          <MenuItem
            icon={<Star size={20} />}
            text="Reviews"
          />

          <MenuItem
            icon={<Settings size={20} />}
            text="Settings"
          />

        </nav>

        <div className="p-4 border-t border-gray-700">

          <button className="flex items-center gap-3 w-full px-4 py-3 rounded-xl hover:bg-red-500 transition">

            <LogOut size={20} />

            Logout

          </button>

        </div>

      </aside>

      {/* Main */}

      <main className="flex-1 p-10">

        <h2 className="text-4xl font-bold">
          Dashboard
        </h2>

        <p className="text-gray-600 mt-2">
          Welcome back! Here's an overview of your business.
        </p>

        {/* Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-10">

          <Card
            title="Bookings"
            value="25"
            color="bg-pink-500"
          />

          <Card
            title="Gallery Images"
            value="120"
            color="bg-blue-500"
          />

          <Card
            title="Reviews"
            value="89"
            color="bg-green-500"
          />

          <Card
            title="Clients"
            value="1200"
            color="bg-purple-500"
          />

        </div>

        {/* Recent Bookings */}

        <div className="bg-white rounded-3xl shadow-lg mt-12 p-8">

          <h3 className="text-2xl font-bold mb-6">
            Recent Bookings
          </h3>

          <table className="w-full">

            <thead>

              <tr className="text-left border-b">

                <th className="py-4">Client</th>

                <th>Date</th>

                <th>Service</th>

                <th>Status</th>

              </tr>

            </thead>

            <tbody>

              <BookingRow
                name="Priya Sharma"
                date="25 July"
                service="Bridal Makeup"
                status="Confirmed"
              />

              <BookingRow
                name="Neha Singh"
                date="27 July"
                service="Party Makeup"
                status="Pending"
              />

              <BookingRow
                name="Riya Gupta"
                date="30 July"
                service="HD Makeup"
                status="Confirmed"
              />

            </tbody>

          </table>

        </div>

      </main>

    </div>
  );
}

function MenuItem({ icon, text, active }) {
  return (
    <button
      className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl transition ${
        active
          ? "bg-pink-500"
          : "hover:bg-gray-800"
      }`}
    >
      {icon}

      {text}
    </button>
  );
}

function Card({ title, value, color }) {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8">

      <div
        className={`w-14 h-14 rounded-2xl ${color}`}
      ></div>

      <h3 className="text-gray-500 mt-6">
        {title}
      </h3>

      <h2 className="text-4xl font-bold mt-2">
        {value}
      </h2>

    </div>
  );
}

function BookingRow({
  name,
  date,
  service,
  status,
}) {
  return (
    <tr className="border-b">

      <td className="py-5 flex items-center gap-3">

        <Users size={20} />

        {name}

      </td>

      <td>{date}</td>

      <td>{service}</td>

      <td>

        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
          {status}
        </span>

      </td>

    </tr>
  );
}