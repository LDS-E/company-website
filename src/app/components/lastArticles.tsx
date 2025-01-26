// LastArticles.tsx
import Image from "next/image";

const LastArticles = () => {
  const articles = [
    { src: "/images/articles/01.jpg", alt: "Article 1" },
    { src: "/images/articles/02.jpg", alt: "Article 2" },
    { src: "/images/articles/03.jpg", alt: "Article 3" },
    { src: "/images/articles/04.jpg", alt: "Article 4" },
    { src: "/images/articles/05.jpg", alt: "Article 5" },
    { src: "/images/articles/06.jpg", alt: "Article 6" },
    { src: "/images/articles/07.jpg", alt: "Article 7" },
    { src: "/images/articles/08.jpg", alt: "Article 8" },
    { src: "/images/articles/09.jpg", alt: "Article 9" },
    { src: "/images/articles/10.jpg", alt: "Article 10" },
    { src: "/images/articles/11.jpg", alt: "Article 11" },
    { src: "/images/articles/12.jpg", alt: "Article 12" },
  ];

  return (
    <section className="last-articles bg-[#f8f9f9] py-16">
      <div className="container mx-auto">
        <h2 className="last-articles__title bg-[#63c6ae] py-3 text-white text-xl font-semibold uppercase mb-6">
          Last Articles
        </h2>
        <div className="last-articles__thumbs grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Mapeando os artigos */}
          {articles.map((article, index) => (
            <div
              key={index}
              className="last-articles__thumb bg-white rounded-md shadow-lg p-5"
            >
              <a href="#" className="block">
                <Image
                  src={article.src}
                  alt={article.alt}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover mb-4"
                />
              </a>
              <h3 className="text-lg font-semibold">
                Article Title {index + 1}
              </h3>
              <p className="text-sm text-[#929da5]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LastArticles;
