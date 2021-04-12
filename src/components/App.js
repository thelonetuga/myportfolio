import React, { Component } from 'react';
import { init } from 'ityped';

export default class App extends Component {
  componentDidMount() {
    const hobbiesText = document.querySelector('#hobbiesText');
    init(hobbiesText, {
      showCursor: false,
      strings: ['A Developer', 'Photographer', 'Content Creator.']
    });
  }

  render() {
    return (
      <div>
        <main class="font-mono bg-blue-800 relative overflow-hidden h-screen">
          <header class="sm:h-16 flex items-center z-30 w-full ">
            <div class="container mx-auto px-6 flex items-center justify-between">
              <div class="uppercase text-white font-black text-3xl flex items-center">
                <span class="text-base ml-3 mt-1">Joao Marques</span>
              </div>
              <div class="flex items-center">
                <nav class="font-sen text-white uppercase text-lg lg:flex items-center hidden">
                  <a href="#" class="py-2 px-6 flex hover:text-blue-200">
                    Home
                  </a>
                  <a href="#about" class="py-2 px-6 flex hover:text-blue-200">
                    About
                  </a>
                  <a href="#skills" class="py-2 px-6 flex hover:text-blue-200">
                    Skills
                  </a>
                  <a
                    href="#projects"
                    class="py-2 px-6 flex hover:text-blue-200"
                  >
                    Projects
                  </a>
                  <a
                    href="#photography"
                    class="py-2 px-6 flex hover:text-blue-200"
                  >
                    Photography
                  </a>
                </nav>
                <button class="lg:hidden flex flex-col ml-4">
                  <span class="w-6 h-1 bg-gray-800 mb-1"></span>
                  <span class="w-6 h-1 bg-gray-800 mb-1"></span>
                  <span class="w-6 h-1 bg-gray-800 mb-1"></span>
                </button>
              </div>
            </div>
          </header>
          <div class="flex h-full relative z-20 items-center">
            <div class="container  mx-auto px-6 flex flex-col justify-between items-center relative py-4 ">
              <div class="flex flex-col">
                <p class="text-3xl my-6 text-center text-white">
                  Hi, I&#x27;m Joao Marques 🤘
                </p>
                <div class="p-4">
                  <h2
                    id="hobbiesText"
                    class="max-w-3xl text-5xl md:text-6xl font-bold mx-auto text-white text-center py-2"
                  ></h2>
                </div>
                <div class="flex items-center justify-center mt-4 p-6">
                  <a
                    class="text-white"
                    href="https://www.facebook.com/joao1marques/"
                  >
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-8 h-8"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a class="ml-3 text-white" href="https://twitter.com/home">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-8 h-8"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a
                    class="ml-3 text-white"
                    href="https://www.instagram.com/joao1marques/"
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-8 h-8"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  <a
                    class="ml-3 text-white"
                    href="https://www.linkedin.com/in/eckocode/"
                  >
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="0"
                      class="w-8 h-8"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="none"
                        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                      ></path>
                      <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}