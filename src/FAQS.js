import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; 
const faqs = [
  {
    id: 1,
    question: 'What is GDG?',
    answer:
      'Google Developer Groups (GDG) are community groups for college and university students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a GDG, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.',
    lineColor_arrow: 'text-red-500',
    lineColor_bg: 'bg-red-500'
  },
  {
    id: 2,
    question: 'How can you become a part of GDG?',
    answer:
      'We conduct an annual team recruitment process. The details of recruitment are posted online a few weeks prior. It’s a two-step process involving form filling and personal interview. Students acing both rounds are selected to be part of the core team.',
    lineColor_arrow: 'text-green-500',
    lineColor_bg: 'bg-green-500'
  },
  {
    id: 3,
    question: 'What does a GDG Lead do?',
    answer:
      'A GDG Lead fills a lot of shoes. He works with the university to build the club, recruit the core team, host workshops, build projects, and collaborate with local partners.',
    lineColor_arrow: 'text-blue-500',
    lineColor_bg: 'bg-blue-500'
  },
  {
    id: 4,
    question: 'How is DSC related to Google?',
    answer:
      'A GDG Lead fills a lot of shoes. He works with the university to build the club, recruit the core team, host workshops, build projects, and collaborate with local partners.',
    lineColor_arrow: 'text-yellow-500',
    lineColor_bg: 'bg-yellow-500'
  },
  {
    id: 5,
    question: 'How to reach us?',
    answer: 'Mail us at "dsc.rknec@gmail.com "',
    lineColor_arrow: 'text-purple-500',
    lineColor_bg: 'bg-purple-500'
  },
];

function FAQS() {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setActiveFAQ((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-12 ">
      <h2 className="text-3xl font-bold text-center mb-4">FAQs</h2>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {faqs.map((faq) => (
          <div key={faq.id} className="mb-4">
            <button
              onClick={() => toggleFAQ(faq.id)}
              className="w-full flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-md"
            >
              <span className="text-xl font-semibold dark:text-black">{faq.question}</span>
              <span className={`text-2xl ${activeFAQ === faq.id ? faq.lineColor_arrow : 'text-gray-600'}`}>
              {activeFAQ === faq.id ? (
                  <FaChevronUp className={faq.lineColor} /> // Up chevron
                ) : (
                  <FaChevronDown className={faq.lineColor} /> // Down chevron
                )}
              </span>
            </button>
            {activeFAQ === faq.id && (
              <div className="flex mt-2 bg-gray-50 rounded-lg shadow-inner">
                <span className={`hidden md:block w-2 rounded-s-xl ${faq.lineColor_bg}`}></span> {/*  vertical line color */}
                <div className="p-4 w-full">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQS;
