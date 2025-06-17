import Head from 'next/head';

export default function Login() {
  return (
    <>
      <Head>
        <title>Login - Doctor Buddy</title>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          rel="stylesheet"
        />
      </Head>
      <nav className="bg-blue-600 p-4 text-white flex justify-between items-center shadow">
        <div className="text-xl font-bold">
          <i className="fas fa-stethoscope mr-2"></i>Doctor Buddy
        </div>
        <div className="space-x-6 text-lg">
          <a href="/login" className="hover:underline">
            <i className="fas fa-sign-in-alt mr-1"></i>Login
          </a>
          <a href="/book-appointment" className="hover:underline">
            <i className="fas fa-calendar-plus mr-1"></i>Book
          </a>
          <a href="/view-history" className="hover:underline">
            <i className="fas fa-history mr-1"></i>History
          </a>
        </div>
      </nav>

      <div className="max-w-md mx-auto mt-12 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login to Your Account</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}


