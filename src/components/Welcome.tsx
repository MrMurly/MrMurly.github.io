export const Welcome = () => {
  return (
    <div className="h-screen flex">
      <div className="max-w-200 max-h-50 text-wrap   mx-auto mt-40 lg:mt-80">
        <h3 className="text-4xl text-center lg:text-left mb-3">
          Hi! I'm
          <br className="inline lg:hidden" /> Gustav Melefors
        </h3>
        <div className="text-wrap text-center lg:text-left lg:max-w-150">
          <p>A fullstack developer born in Norrköping, Sweden.</p>
          <p>
            I enjoy building applications that focus on usability and
            scalability.
          </p>
        </div>
      </div>
    </div>
  );
};
