import Link from "next/link";
import Image from "next/image";

export default function Login() {
  return (
    <div className="">
      <div>
        <p className="mb-0 py-3 bg-lime-500 text-center">
          Want to learn how to build templates like this one? Visit{" "}
          <a href="#!">www.pixelrocket.store</a>
        </p>
      </div>
      <section className="relative py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div className="max-w-md mx-auto">
                <div className="mb-8 text-center lg:text-left">
                  <Link href="/" className="inline-block mb-6">
                    <Image src="/images/logo.svg" alt="Logo" width={120} height={32} />
                  </Link>
                  <h1 className="font-heading text-4xl sm:text-5xl mb-4">Welcome back</h1>
                  <p className="text-gray-700">Sign in to your account to continue</p>
                </div>
                <form>
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2" htmlFor="email">
                      Email address
                    </label>
                    <input
                      className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-lime-500"
                      type="email"
                      id="email"
                      placeholder="name@company.com"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2" htmlFor="password">
                      Password
                    </label>
                    <input
                      className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-lime-500"
                      type="password"
                      id="password"
                      placeholder="••••••••"
                    />
                  </div>
                  <div className="flex items-center justify-between mb-6">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Remember me</span>
                    </label>
                    <a href="#!" className="text-sm text-teal-900 hover:text-teal-700">
                      Forgot password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-teal-900 hover:bg-black text-white font-medium rounded-full transition duration-200 mb-4"
                  >
                    Sign in
                  </button>
                  <button
                    type="button"
                    className="w-full py-3 px-6 border border-gray-300 hover:border-gray-400 text-gray-900 font-medium rounded-full transition duration-200 flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                      <path fill="none" d="M1 1h22v22H1z" />
                    </svg>
                    Sign in with Google
                  </button>
                  <p className="text-center text-sm text-gray-700 mt-6">
                    Don't have an account?{" "}
                    <Link href="/register" className="text-teal-900 hover:text-teal-700 font-medium">
                      Sign up
                    </Link>
                  </p>
                </form>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="relative">
                <Image
                  className="w-full rounded-3xl"
                  src="/fauna-assets/sign-in/image-circle-photos.png"
                  alt="Login"
                  width={600}
                  height={600}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


