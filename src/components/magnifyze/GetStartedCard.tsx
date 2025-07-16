import { X } from 'lucide-react';
import React, { useState } from 'react'

const GetStartedCard:React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  return (
   <>
      <section className="bg-white rounded-3xl text-black py-12 px-6 sm:px-12 max-w-4xl mx-auto text-center shadow-xl mt-[80px] mb-10">
        <div className="flex flex-col items-center gap-4 ">
        

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Book Your Free <span className="text-magsum-purple">Business Assessment</span>
          </h2>

          {/* Subtext */}
          <p className="text-black max-w-md">
            Get a strategic snapshot of your business — what's working, what’s not, and where to go next. Our expert team will review your goals, challenges, and performance to help you uncover actionable opportunities for growth.
          </p>

          {/* CTA Button */}
          <button
            onClick={() => setShowModal(true)}
            className="mt-4 bg-magsum-purple hover:bg-magsum-blue text-white font-medium px-6 py-2 rounded-full shadow-md transition"
          >
           Book Your Free Assessment
          </button>
        </div>
      </section>

      {/* Modal with iframe */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl max-w-4xl w-full p-4 relative shadow-lg">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              <X size={24} />
            </button>

            {/* Iframe */}
            <iframe
              aria-label="Business Performance Review"
              frameBorder="0"
              allow="camera;microphone"
              style={{ height: '500px', width: '100%', border: 'none' }}
              src="https://forms.zohopublic.in/magsumsolutions1/form/BusinessPerformanceReview/formperma/YVfL6toUcbKSbZFEFexqz7Bu5IuCjaM3O-IVyzSrG8I"
              title="Business Performance Review"
            ></iframe>
          </div>
        </div>
      )}
    </>
  )
}

export default GetStartedCard