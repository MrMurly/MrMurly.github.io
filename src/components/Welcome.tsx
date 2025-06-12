export const Welcome = () => {
  return (
    <div className="h-screen flex">
      <div className="max-w-200 max-h-50 text-wrap   m-auto">
        <h3 className="text-4xl text-center lg:text-left mb-3">
          Hi! I'm
          <br className="inline lg:hidden" /> Gustav Melefors
        </h3>
        <div className="text-wrap text-center lg:text-left lg:max-w-150">
          <p>
            A fullstack developer born in Norrköping, Sweden I enjoy building
            applications that focus on usability and scalability.
          </p>
        </div>
      </div>
    </div>
  );
};
