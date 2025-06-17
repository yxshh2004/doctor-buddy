import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [specialty, setSpecialty] = useState("All");

  const doctors = [/*... same as before ...*/];
  const filteredDoctors = doctors.filter((doctor) => {/*... same as before ...*/});

  return (
    <>
      <Head>
        <title>DoctorBuddy - Consult Doctors Online | Healthcare Platform</title>
        <meta name="description" content="Connect with certified doctors through secure online consultations." />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
      </Head>

      <main>
        {/* ...previous sections... */}

        {/* How It Works */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Get started with DoctorBuddy in just three simple steps
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                {
                  step: 1,
                  title: "Choose Your Doctor",
                  desc: "Browse our network of verified doctors and select the specialist that best fits your needs.",
                },
                {
                  step: 2,
                  title: "Book Appointment",
                  desc: "Schedule your consultation at a convenient time. Same-day appointments often available.",
                },
                {
                  step: 3,
                  title: "Start Consultation",
                  desc: "Connect with your doctor via video call, phone, or chat. Get prescriptions and follow-up care.",
                },
              ].map(({ step, title, desc }) => (
                <div key={step}>
                  <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                    {step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
                  <p className="text-gray-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-blue-600 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Take Control of Your Health?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of patients who trust DoctorBuddy for their healthcare needs. Start your journey to better health today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4 rounded-md">
                <i className="fas fa-calendar-alt mr-2"></i>
                Book Your First Consultation
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4 rounded-md">
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
                  Making healthcare accessible, convenient, and secure for everyone.
                </p>
                <div className="flex space-x-4">
                  {[
                    { icon: "facebook" },
                    { icon: "twitter" },
                    { icon: "linkedin" },
                  ].map(({ icon }) => (
                    <button
                      key={icon}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <i className={`fab fa-${icon} text-xl`}></i>
                    </button>
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
