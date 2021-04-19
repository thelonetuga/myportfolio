import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import outsystems from './images/outsystems.png';
import vueIcon from './images/vue.png';
import reactIcon from './images/react.png';
import cIcon from './images/c.png';
import laravel from './images/laravel.png';
import java from './images/java.png';
import tailwindcss from './images/tailwindcss.svg';
export default class Skills extends Component {
  render() {
    return (
      <section id="skills" class="text-gray-600 body-font bg-indigo-darkblue">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Technologies I've worked with
            </h1>
          </div>
          <div class="flex flex-wrap -m-4 text-center">
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-gray-200 px-4 py-6 rounded-lg">
                <img src={vueIcon} class="square-full w-28 h-28 mx-auto" />
                <h2 class="p-2 title-font font-medium text-xl text-indigo-gray">
                  Vue JS
                </h2>
              </div>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-gray-200 px-4 py-6 rounded-lg">
                <img src={reactIcon} class="square-full w-28 h-28 mx-auto" />
                <h2 class="p-2 title-font font-medium text-xl text-indigo-gray">
                  React JS
                </h2>
              </div>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-gray-200 px-4 py-6 rounded-lg">
                <img src={cIcon} class="square-full w-28 h-28 mx-auto" />
                <h2 class="p-2 title-font font-medium text-xl text-indigo-gray">
                  C#
                </h2>
              </div>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-gray-200 px-4 py-6 rounded-lg">
                <img src={outsystems} class="rounded-full w-28 h-28 mx-auto" />
                <h2 class="p-2 title-font font-medium text-xl text-indigo-gray">
                  OutSystems
                </h2>
              </div>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-gray-200 px-4 py-6 rounded-lg">
                <img src={laravel} class="square-full w-28 h-28 mx-auto" />
                <h2 class="p-2 title-font font-medium text-xl text-indigo-gray">
                  Laravel
                </h2>
              </div>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-gray-200 px-4 py-6 rounded-lg">
                <img src={java} class="square-full w-28 h-28 mx-auto" />
                <h2 class="p-2 title-font font-medium text-xl text-indigo-gray">
                  Java
                </h2>
              </div>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-gray-200 px-4 py-6 rounded-lg">
                <img src={tailwindcss} class="square-full w-28 h-28 mx-auto" />
                <h2 class="p-2 title-font font-medium text-xl text-indigo-gray">
                  Tailwindcss
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
