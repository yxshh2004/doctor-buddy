import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [specialty, setSpecialty] = useState("All");

  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      rating: 4.9,
      reviews: 245,
      status: "Available",
      experience: "15 years",
      location: "New York, NY",
      nextAvailable: "Today 2:30 PM",
      price: "$120",
      image:
        "https://images.pexels.com/photos/559628/pexels-photo-559628.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2",
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Dermatology",
      rating: 4.8,
      reviews: 189,
      status: "Available",
      experience: "12 years",
      location: "Los Angeles, CA",
      nextAvailable: "Today 4:00 PM",
      price: "$95",
      image:
        "https://images.pexels.com/photos/582750/pexels-photo-582750.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2",
    },
  ];

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = specialty === "All" || doctor.specialty === specialty;
    return matchesSearch && matchesSpecialty;
  });

  return (
    <>
      <Head>
        <title>DoctorBuddy - Consult Doctors Online</title>
        <meta
          name="description"
          content="Book appointments with top doctors online"
        />
      </Head>

      <main className="bg-white text-gray-800">
        {/* Doctors Section */}
        <section className="bg-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-2">Our Top Doctors</h2>
              <p className="text-gray-600">
                Search by name or filter by specialty
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-8">
              <input
                type="text"
                placeholder="Search doctors or specialties..."
                className="border px-4 py-2 rounded w-full md:w-1/3"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <select
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
                className="border px-4 py-2 rounded w-full md:w-1/4"
              >
                <option value="All">All Specialties</option>
                <option value="Cardiology">Cardiology</option>
                <option value="Dermatology">Dermatology</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDoctors.map((doctor, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded shadow text-center"
                >
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold">{doctor.name}</h3>
                  <p className="text-blue-600 font-medium">
                    {doctor.specialty}
                  </p>
                  <p className="text-gray-500">{doctor.experience}</p>
                  <p className="text-sm text-gray-500">{doctor.location}</p>
                  <p className="mt-2 text-sm">
                    <i className="fas fa-clock mr-1"></i> {doctor.nextAvailable}
                  </p>
                  <p className="text-lg font-bold mt-3">{doctor.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Get started with DoctorBuddy in just three simple steps
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                {
                  step: 1,
                  title: "Choose Your Doctor",
                  desc: "Browse verified doctors and select the one best suited to your needs.",
                },
                {
                  step: 2,
                  title: "Book Appointment",
                  desc: "Schedule a consultation at a time that works for you.",
                },
                {
                  step: 3,
                  title: "Start Consultation",
                  desc: "Connect via video, phone, or chat. Receive prescriptions and guidance.",
                },
              ].map(({ step, title, desc }) => (
                <div key={step}>
                  <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                    {step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {title}
                  </h3>
                  <p className="text-gray-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 py-20 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Take Control of Your Health?
            </h2>
            <p className="text-xl mb-8">
              Join thousands of patients who trust DoctorBuddy. Start your
              journey to better health today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-md text-lg">
                <i className="fas fa-calendar-alt mr-2"></i> Book Your First
                Consultation
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-md text-lg">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="bg-blue-600 p-2 rounded-lg">
                    <i className="fas fa-heart text-white text-xl"></i>
                  </div>
                  <span className="text-xl font-bold">DoctorBuddy</span>
                </div>
                <p className="text-gray-400">
                  Making healthcare accessible, convenient, and secure for
                  everyone.
                </p>
                <div className="flex space-x-4">
                  {["facebook", "twitter", "linkedin"].map((icon) => (
                    <a
                      key={icon}
                      href="#"
                      className="text-gray-400 hover:text-white"
                    >
                      <i className={`fab fa-${icon} text-xl`}></i>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Services</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>Video Consultations</li>
                  <li>Prescription Refills</li>
                  <li>Health Records</li>
                  <li>Specialist Referrals</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Specialties</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>General Medicine</li>
                  <li>Cardiology</li>
                  <li>Dermatology</li>
                  <li>Mental Health</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-4">Company</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>About Us</li>
                  <li>Privacy Policy</li>
                  <li>Terms of Service</li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
              <p>&copy; 2024 DoctorBuddy. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

