import React from "react";
// import {useTranslation} from 'react-i18next';

export default function Contact() {
  // const {t} = useTranslation()
  //
  // const [name, setName] = React.useState("");
  // const [email, setEmail] = React.useState("");
  // const [message, setMessage] = React.useState("");

  // const encode = (data) => {
  //   return Object.keys(data)
  //     .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
  //     .join("&");
  // };

  // const handleSubmit = (e) => {
  //   //TODO add tostify
  //   e.preventDefault();
  //   console.log(name, email, message);
  //   fetch("/", {
  //     method: "POST",
  //     headers: {"Content-Type": "application/x-www-form-urlencoded"},
  //     body: encode({"form-name": "contact", name, email, message}),
  //   })
  //     .then(() => {
  //       alert("Success!")
  //     })
  //     .catch((error) => alert(error));
  // };

  return (
    <section id="contact" className="relative">

      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./Programming.gif"
          />
        </div>
             <div className="flex flex-wrap py-6 rounded">
            <div className="lg:w-2/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Caracas. <br />
                Venezuela <br />
              </p>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                29dalfonzo@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">(+58) 412-816-0254</p>
            </div>
          </div>
{/*         <form
          netlify
          onSubmit={handleSubmit}
          name="contact"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            {t('contact')}
          </h2>
          <p className="leading-relaxed mb-5">
            {t('contactMessage')}
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              {t('name')}
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              {t('email')}
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              {t('message')}
            </label>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            {t('send')}
          </button>
        </form> */}
      </div>
    </section>
  );
}
