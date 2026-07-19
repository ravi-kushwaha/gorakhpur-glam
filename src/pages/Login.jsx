export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50">

      <div className="bg-white p-10 rounded-3xl shadow-xl w-[400px]">

        <h1 className="text-3xl font-bold text-center mb-8">
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-4 rounded-xl mb-5"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-4 rounded-xl mb-6"
        />

        <button className="w-full bg-pink-500 text-white py-4 rounded-xl hover:bg-pink-600">
          Login
        </button>

      </div>

    </div>
  );
}