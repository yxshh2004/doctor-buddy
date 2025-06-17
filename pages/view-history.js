import Head from 'next/head';

export default function ViewHistory() {
  return (
    <>
      <Head>
        <title>Appointment History - Doctor Buddy</title>
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

      <div className="max-w-4xl mx-auto mt-12 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">Appointment History</h2>

        <div className="space-y-4">
          {[
            {
              date: '2025-06-10',
              time: '10:00 AM',
              doctor: 'Dr. Mehta',
              department: 'Dermatology',
              status: 'Completed',
            },
            {
              date: '2025-05-28',
              time: '4:30 PM',
              doctor: 'Dr. Khan',
              department: 'Neurology',
              status: 'Missed',
            },
          ].map((appt, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-md p-4 flex justify-between items-center"
            >
              <div>
                <p className="text-lg font-semibold text-gray-800">
                  {appt.doctor} ({appt.department})
                </p>
                <p className="text-sm text-gray-500">
                  {appt.date} at {appt.time}
                </p>
              </div>
              <span
                className={`px-3 py-1 text-sm rounded-full font-medium ${
                  appt.status === 'Completed'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {appt.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
