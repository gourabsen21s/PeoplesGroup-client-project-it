"use client";

import { useState, useRef, useEffect } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  question: string;
  answer: string;
}

function FAQAccordionItem({ question, answer }: FAQAccordionProps) {
  const [accordion, setAccordion] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setHeight(containerRef.current.scrollHeight);
    }
  }, []);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        setAccordion(!accordion);
      }}
      className="flex w-full py-6 px-8 mb-4 items-start justify-between text-left shadow-md rounded-2xl"
    >
      <div>
        <div className="pr-5">
          <h5 className="text-lg font-medium">{question}</h5>
        </div>
        <div
          ref={containerRef}
          style={{ height: accordion ? `${height}px` : "0px" }}
          className="overflow-hidden pr-5 duration-500"
        >
          <p className="text-gray-700 mt-4">{answer}</p>
        </div>
      </div>
      <span className="flex-shrink-0">
        <div className={accordion ? "hidden" : ""}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5.69995V18.3"
              stroke="#1D1F1E"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.69995 12H18.3"
              stroke="#1D1F1E"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className={accordion ? "" : "hidden"}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.69995 12H18.3"
              stroke="#1D1F1E"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </span>
    </button>
  );
}

export default FAQAccordionItem;


