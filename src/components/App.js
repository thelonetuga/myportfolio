import React, { Component } from 'react';
import { init } from 'ityped';
import ytIcon from './images/icons/yt.png';

export default class App extends Component {
  componentDidMount() {
    const hobbiesText = document.querySelector('#hobbiesText');
    init(hobbiesText, {
      showCursor: false,
      loop: true,
      strings: ['Software Developer', 'Photographer', 'Content Creator.']
    });
  }

  render() {
    return (
      <div>
        <main class="font-mono bg-cover bg-fixed bg-landing-image relative overflow-hidden h-screen">
          <header class="text-gray-600 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
              <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <span class="ml-3 text-xl text-indigo-blue">Joao Marques</span>
              </a>
              <nav class="md:ml-auto text-white flex flex-wrap items-center text-base justify-center">
                <a class="mr-9 hover:text-indigo-blue" href="#home">
                  Home
                </a>
                <a class="mr-9 hover:text-indigo-blue" href="#about">
                  About
                </a>
                <a class="mr-9 hover:text-indigo-blue" href="#skills">
                  SKills
                </a>
                <a class="mr-9 hover:text-indigo-blue" href="#projects">
                  Projects
                </a>
                <a class="mr-9 hover:text-indigo-blue" href="#photography">
                  Photography
                </a>
              </nav>
            </div>
          </header>
          <div class="flex h-full  relative z-20 ">
            <div class="container mb-16 mx-auto px-6 flex flex-col justify-center  relative py-4 ">
              <div class="flex flex-col w-full">
                <p class="text-3xl my-6 text-center text-white">
                  Hi, I&#x27;m Joao Marques 🤘
                </p>
                <div class="h-24 p-4 hidden md:block">
                  <h2
                    id="hobbiesText"
                    class=" max-w-3xl  none text-5xl md:text-6xl font-bold mx-auto text-indigo-blue text-center py-2"
                  ></h2>
                </div>
                <div class="w-full flex items-center justify-evenly mt-4 p-6">
                  <a
                    class="text-white "
                    href="https://www.facebook.com/joao1marques/"
                  >
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-8 h-8 transition-transform transform hover:scale-150"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a
                    class="ml-3 text-white"
                    href="https://twitter.com/joaomarquescode"
                  >
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-8 h-8 transition-transform transform hover:scale-150"
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
                      class="w-8 h-8 transition-transform transform hover:scale-150"
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
                    href="https://www.linkedin.com/in/joaohmarques/"
                  >
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="0"
                      class="w-8 h-8 transition-transform transform hover:scale-150"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="none"
                        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                      ></path>
                      <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                  </a>
                  <a
                    class="ml-3"
                    href="https://www.youtube.com/channel/UCE4H4OvpcgXA-Lmw409Cg8A"
                  >
                    <img
                      src={ytIcon}
                      class="square-full w h-8 mx-auto transition-transform transform hover:scale-150"
                    />
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
