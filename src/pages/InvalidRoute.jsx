import { Link, useRouteError } from "react-router-dom";

const InvalidRoute = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col gap-5 justify-center items-center min-h-screen px-8">
      <h1 className="text-4xl font-bold text-center">Uh oh!</h1>
      <p className="text-xl font-medium text-center">
        It seems you&apos;ve wandered into a path we don&apos;t recognize.
        Don&apos;t worry, help is on the way!
      </p>
      <p className="text-lg text-center opacity-75">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link
        to={`/`}
        className="bg-transparent hover:bg-blue-500 text-blue-600 font-bold py-2 px-4 rounded-full border border-blue-600 hover:border-blue-700 hover:text-white transition-all"
      >
        Take me back home
      </Link>
    </div>
  );
};

export default InvalidRoute;
