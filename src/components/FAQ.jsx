import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking at least 2-3 months in advance for bridal makeup and 1-2 weeks for party makeup.",
  },
  {
    question: "Do you travel to the client's location?",
    answer:
      "Yes, we provide both studio and on-location makeup services depending on your requirements.",
  },
  {
    question: "Which makeup brands do you use?",
    answer:
      "We use premium brands such as MAC, Huda Beauty, NARS, Dior, Charlotte Tilbury, and Kryolan.",
  },
  {
    question: "Do you offer trial makeup?",
    answer:
      "Yes, bridal trial sessions are available before your wedding day.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-24 bg-[#fffaf8]">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-14">
          <p className="uppercase tracking-[6px] text-pink-500 font-semibold">
            FAQ
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >

              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="w-full flex justify-between items-center p-6 text-left"
              >

                <span className="font-semibold text-lg">
                  {faq.question}
                </span>

                {open === index ? (
                  <ChevronUp />
                ) : (
                  <ChevronDown />
                )}

              </button>

              {open === index && (

                <div className="px-6 pb-6 text-gray-600 leading-7">
                  {faq.answer}
                </div>

              )}

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}