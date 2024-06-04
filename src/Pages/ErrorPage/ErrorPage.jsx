import { Link } from "react-router-dom";

const ErrorPage = () => {
      return (
            <div>
                  <section className="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800">
                        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                              <div className="max-w-md text-center">
                                    <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
                                          <span className="sr-only">Error</span>404
                                    </h2>
                                    <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                                    <p className="mt-4 mb-8 dark:text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>
                                    <Link to='/'>
                                          <button className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#BC986B] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                                                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#BC986B] group-hover:h-full"></span>
                                                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                                      <svg className="w-5 h-5 text-[#BC986B]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                                </span>
                                                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                                      <svg className="w-5 h-5 text-[#BC986B]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                                </span>
                                                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Button Text</span>
                                          </button>
                                    </Link>
                              </div>
                        </div>
                  </section>
            </div>
      );
};

export default ErrorPage;