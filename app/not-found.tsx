import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-teal-500">404</h1>
        <p className="mt-4 text-xl font-medium text-gray-700">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="mt-2 text-gray-500">
          It seems like you found a broken link or entered a URL that doesn't exist.
        </p>
        <div className="mt-6">
          <Link href="/" passHref>
            <button className="px-6 py-2 text-white bg-teal-500 rounded-lg hover:bg-teal-600">
              Go to Homepage
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
