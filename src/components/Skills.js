import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import outsystems from './images/outsystems.png';
import vueIcon from './images/vue.svg';
import reactIcon from './images/react.svg';
import cIcon from './images/c.svg';

export default class Skills extends Component {
  render() {
    return (
      <section id="skills" class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              SKILLS
            </h1>
          </div>
          <div class="flex flex-wrap -m-4 text-center">
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <img src={vueIcon} class="square-full w-28 h-28 mx-auto" />
                <h2 class="title-font font-medium text-3xl text-gray-900">
                  VUE JS
                </h2>
              </div>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <img src={reactIcon} class="square-full w-28 h-28 mx-auto" />
                <h2 class="title-font font-medium text-3xl text-gray-900">
                  REACT JS
                </h2>
              </div>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <img src={cIcon} class="square-full w-28 h-28 mx-auto" />
                <h2 class="title-font font-medium text-3xl text-gray-900">
                  C#
                </h2>
              </div>
            </div>
            <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <img src={outsystems} class="rounded-full w-28 h-28 mx-auto" />
                <h2 class="title-font font-medium text-3xl text-gray-900">
                  OUTSYSTEMS
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
