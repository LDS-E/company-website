const Content = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6 md:px-12">
        <article className="mb-10">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Lorem ipsum dolor sit amet consectetur adipiscing elit.
          </h3>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            mattis suscipit est, ut imperdiet tortor. Proin sed molestie massa.
            Nullam condimentum mauris et rhoncus sagittis.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              BUTTON
            </a>
            <a
              href="#"
              className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg shadow-md hover:bg-gray-400 transition"
            >
              BUTTON
            </a>
          </div>
        </article>

        {/* Segundo artigo */}
        <article>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Lorem ipsum dolor sit amet consectetur adipiscing elit.
          </h3>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            mattis suscipit est, ut imperdiet tortor. Proin sed molestie massa.
            Nullam condimentum mauris et rhoncus sagittis.
          </p>
          <p className="text-gray-600">
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean
            vitae lectus erat. Duis consequat laoreet velit. Mauris convallis,
            sapien sit amet scelerisque accumsan.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Content;
