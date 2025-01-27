import Hero from "./components/Hero";
import PeopleCards from "./components/PeopleCards";
import LastArticles from "./components/LastArticles";
import Content from "./components/Content";
import Slideshow from "./components/Slideshow";
import QuoteSlideshow from "./components/QuoteSlideshow";

const Page = () => (
  <div>
    <Hero />

    <section className="people-cards">
      <PeopleCards />
    </section>

    <section className="last-articles">
      <LastArticles />
    </section>

    <Content />

    <Slideshow />

    <QuoteSlideshow />
  </div>
);

export default Page;
