import React from 'react';

const teamMembers = [
  {
    name: 'Azunyan U. Wu',
    role: 'Founder & CEO',
    desc: 'Used to work at IBM but quit because of robotz',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Silverstone Gray',
    role: 'Lead Design',
    desc: 'Hello, I like not doing anything at all. Let’s DM.',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Alan D. Watts',
    role: 'Lead Engineering',
    desc: 'Prodigy with record-breaking 176 IQ and many awards.',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    name: 'Oarack Babama',
    role: 'Lead Finance',
    desc: 'Hello, I like money. It is the only purpose of in my life.',
    img: 'https://randomuser.me/api/portraits/men/83.jpg',
  },
  {
    name: 'Azunyan U. Wu',
    role: 'Founder & CEO',
    desc: 'Used to work at IBM but quit because of robotz',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Silverstone Gray',
    role: 'Lead Design',
    desc: 'Hello, I like not doing anything at all. Let’s DM.',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Alan D. Watts',
    role: 'Lead Engineering',
    desc: 'Prodigy with record-breaking 176 IQ and many awards.',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    name: 'Oarack Babama',
    role: 'Lead Finance',
    desc: 'Hello, I like money. It is the only purpose of in my life.',
    img: 'https://randomuser.me/api/portraits/men/83.jpg',
  },
  
  
];

const AdvisoryProfile = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden text-center">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm text-indigo-500 font-semibold mb-2">We’re Hiring!</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let’s Meet Our Team</h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-6">
          Gravida in fermentum et sollicitudin ac orci phasellus egestas. Molestie a iaculis at erat pellentesque adipiscing commodo.
        </p>

        <div className="flex justify-center gap-4 mb-12">
          <button className="px-4 py-2 border border-magsum-purple rounded-full text-magsum-purple hover:bg-magsum-blue hover:border-magsum-blue hover:text-white transition">About Us</button>
          <button className="px-4 py-2 bg-magsum-purple text-white rounded-full hover:bg-magsum-purple/90 transition">Job Openings</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition p-6 flex flex-col items-center text-center mt-7 mb-7"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-20 h-20 rounded-full mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-magsum-purple text-sm font-medium">{member.role}</p>
              <p className="text-gray-500 text-sm mt-2">{member.desc}</p>

              <div className="flex gap-3 mt-4">
                <a href="#" className="text-gray-400 hover:text-magsum-purple transition">
                  <i className="fab fa-x-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-magsum-purple transition">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-magsum-purple transition">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvisoryProfile;
