import React, { Component } from 'react';
import meFoto from './images/me.jpg';

function Hero() {
  return (
    <section id="about" class="text-gray-600 body-font bg-indigo-blue">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            class="object-cover object-center rounded"
            alt="hero"
            src={meFoto}
          />
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            About me
          </h1>
          <p class="mb-8 leading-relaxed text-justify text-indigo-orange text-lg">
            My name is João Marques and I'm from Tomar, Portugal. Currently, I
            have completed my bachelor's degree in computer engineering at
            Leiria's University. Currently I am an Outsystems Developer working
            for Deloitte Portugal. My goals are to be a full stack/Android
            developer because those are the fields I like the most. I'm also
            really excited about artificial intelligence as I think it is the
            future. Nowadays, technology is changing at an astonishing pace, so
            we need to keep pushing ourselves constantly, which means we shall
            be humble and keep learning all the time. Otherwise, we might lose
            the train. I have decided to follow this path, and I'm happy with
            it. In my spare time, I practice cycling and amateur photography. At
            last one of my biggest dreams is to travel around the world. Thank
            you!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
