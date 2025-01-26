import Hero from "./components/Hero";
import PeopleCards from "./components/PeopleCards";
import LastArticles from "./components/lastArticles";

const Page = () => (
  <div>
    <Hero />

    <section className="people-cards">
      <PeopleCards />
    </section>

    <section className="last-articles">
      <LastArticles />
    </section>
  </div>
);

export default Page;
