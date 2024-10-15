function Contact() {
    return (
      <section className="bg-blue-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mb-4">
            <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
              
              <h2 className="font-heading mb-4 font-bold tracking-tight text-green-600  text-3xl sm:text-5xl">
                Contact 
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">
                Any enquiry About books
              </p>
            </div>
          </div>
          <div className="flex items-stretch justify-center">
            <div className="grid md:grid-cols-2">
              <div className="h-full pr-6">
                <p className="mt-3 mb-12 text-lg text-gray-900">
                  If you need any help from us .Or if you want to give any advice to us for Books send message or call us
                </p>
                <ul className="mb-6 md:mb-0">
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-green-500 text-gray-50">
                      
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 ">Our Address</h3>
                      <p className="text-gray-900">Dhaka,Bangladesh</p>
                      <p className="text-gray-900">Mobile :2342532345</p>
                    </div>
                  </li>
                  
                </ul>
              </div>
              <div className="card h-fit max-w-6xl p-5 md:p-12">
                <h2 className="mb-4 text-2xl font-bold">What You Want?</h2>
                <form id="contactForm">
                  <div className="mb-6">
                    <div className="mx-0 mb-1 sm:mb-4">
                      
                    </div>
                    <textarea id="textarea" name="textarea" cols="30" rows="5" placeholder="Write your message..." className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"></textarea>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="w-full bg-green-500 text-white px-6 py-3 font-xl rounded-md sm:mb-0">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
  </section>)}
  export default Contact