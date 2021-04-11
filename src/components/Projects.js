import React, { Component } from 'react';
import img_resturantManager from './images/projects/restaurant_dash.jpg';
import img_financialManager from './images/projects/finacesApp.png';
import img_snakeGame from './images/projects/snakeGame.png';
import img_carParking from './images/projects/carParkingApp.jpg';
import img_softwareManager from './images/projects/software.png';
import img_faceRecognition from './images/projects/smartBrainApp.png';

export default class Projects extends Component {
  render() {
    return (
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Projects
              </h1>
              <div class="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Below are my projects developed during my student life in my
              computer science degree.
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            <a
              href="https://github.com/vidalocapt/projeto"
              class="xl:w-1/4 md:w-1/2 p-4"
            >
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src={img_resturantManager}
                  alt="content"
                />
                <h3 class="tracking-widest text-indigo-500 text-sm font-medium title-font">
                  Restaurant Manager
                </h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Technologies used:
                </h2>
                <p class="leading-relaxed text-base">
                  PHP, LARAVEL, VUEJS, WEBSOCKETS
                </p>
              </div>
            </a>
            <a
              href="https://github.com/vidalocapt/Projeto-Ainet"
              class="xl:w-1/4 md:w-1/2 p-4"
            >
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src={img_financialManager}
                  alt="content"
                />
                <h3 class="tracking-widest text-indigo-500 text-sm font-medium title-font">
                  FINANCIAL Manager
                </h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Technologies used:
                </h2>
                <p class="leading-relaxed text-base">PHP, LARAVEL, BOOTSTRAP</p>
              </div>
            </a>
            <a
              href="https://github.com/vidalocapt/IAProject"
              class="xl:w-1/4 md:w-1/2 p-4"
            >
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src={img_snakeGame}
                  alt="content"
                />
                <h3 class="tracking-widest text-indigo-500 text-sm font-medium title-font">
                  Smart Snake Game
                </h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-3">
                  Technologies used:
                </h2>
                <p class="leading-relaxed text-base">JAVA</p>
                <p class="leading-relaxed text-base">GENETIC ALGORITHMS</p>
                <p class="leading-relaxed text-base">NEURAL NETWORKS</p>
              </div>
            </a>
            <a
              href="https://github.com/vidalocapt/Taes_ParkingCarApp"
              class="xl:w-1/4 md:w-1/2 p-4"
            >
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src={img_carParking}
                  alt="content"
                />
                <h3 class="tracking-widest text-indigo-500 text-sm font-medium title-font">
                  CAR PARKING
                </h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Technologies used:
                </h2>
                <p class="leading-relaxed text-base">ANDROID, FIREBASE, JIRA</p>
              </div>
            </a>
            <a
              href="https://github.com/vidalocapt/ProjectDAE"
              class="xl:w-1/4 md:w-1/2 p-4"
            >
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src={img_softwareManager}
                  alt="content"
                />
                <h3 class="tracking-widest text-indigo-500 text-sm font-medium title-font">
                  SOFTWARE MANAGER
                </h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Technologies used:
                </h2>
                <p class="leading-relaxed text-base">
                  JAVA, GLASSFISH 5, NUXTJS, VUE
                </p>
              </div>
            </a>
            <a
              href="https://github.com/vidalocapt/smartBrainApp"
              class="xl:w-1/4 md:w-1/2 p-4"
            >
              <div class="bg-gray-100 p-6 rounded-lg">
                <img
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src={img_faceRecognition}
                  alt="content"
                />
                <h3 class="tracking-widest text-indigo-500 text-sm font-medium title-font">
                  FACE RECOGNITION
                </h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                  Technologies used:
                </h2>
                <p class="leading-relaxed text-base">
                  REACTJS, EXPRESSJS, CLARIFAI API
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    );
  }
}
