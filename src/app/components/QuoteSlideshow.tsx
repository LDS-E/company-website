"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const quotes = [
  {
    text: "Nam mi enim, auctor non ultricies a, fringilla eu risus. Praesent vitae lorem et elit tincidunt accumsan suscipit eu libero.",
    author: "Nam mi enim, auctor non ultricies.",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis suscipit est, ut imperdiet tortor. Proin sed molestie massa.",
    author: "Nam mi enim, auctor.",
  },
];

const QuoteSlideshow = () => {
  const [index, setIndex] = useState(0);

  const nextQuote = () => {
    setIndex((prev) => (prev + 1) % quotes.length);
  };

  const prevQuote = () => {
    setIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  return (
    <section className="flex flex-col items-center justify-center py-10 px-5 bg-gray-100">
      <div className="relative w-full max-w-2xl">
        <AnimatePresence mode="wait">
          <motion.figure
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
              {quotes[index].text}
            </h2>
            <figcaption className="mt-4 text-gray-600">
              {quotes[index].author}
            </figcaption>
          </motion.figure>
        </AnimatePresence>

        {/* Botões de navegação */}
        <button
          onClick={prevQuote}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 text-gray-600 hover:text-gray-800"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={nextQuote}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 text-gray-600 hover:text-gray-800"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </section>
  );
};

export default QuoteSlideshow;
