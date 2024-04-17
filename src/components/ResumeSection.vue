<template>
  <section id="resume-section" class="resume-section min-w-screen min-h-screen bg-neutral-500 py-8">
  
    <div class="container shadow-lg mx-auto w-full max-w-5xl grid grid-cols-[1fr_2fr] min-h-96 bg-neutral-50">
      <div class="left-side bg-gradient-to-b from-primary-950 to-primary-800 p-8">
        <div class="profile-text flex flex-col gap-2 justify-center items-center">
          <div class="img-box">
            <img src="/assets/Jan Madeyski.jpg" alt="Jan Madeyski" class="rounded-full aspect-square w-40">
          </div>
          <h1 class="font-semibold text-3xl text-white">Jan Madeyski</h1>
          <div class="text-sm text-white/85 uppercase">Full Stack Developer</div>
        </div>

        <div class="w-3/4 mx-auto my-6 border-b border-white/50"></div>

        <div class="contact-info mt-8">
          <h3 class="font-bold text-lg mb-3 uppercase tracking-widest">Contact</h3>
          <ul class="flex flex-col gap-2 text-sm">
            <li>
              <i class="fa-solid fa-envelope fa-fw mr-3 text-primary-400/60"></i>
              <a href="mailto:jan.madeyski@gmail.com" class="hover:opacity-80">jan.madeyski@gmail.com</a>
            </li>
            <li>
              <i class="fa-solid fa-phone fa-fw mr-3 text-primary-400/60"></i>
              <a href="tel:+48668292049" class="hover:opacity-80">+48 668 292 049</a>
            </li>
            <li>
              <i class="fa-brands fa-linkedin fa-fw mr-3 text-primary-400/60"></i>
              <a href="https://www.linkedin.com/in/jan-madeyski" target="_blank" rel="noopener noreferrer" class="hover:opacity-80">www.linkedin.com/in/jan-madeyski</a>
            </li>
            <li>
              <i class="fa-solid fa-map-marker fa-fw mr-3 text-primary-400/60"></i>
              <a href="https://www.google.pl/maps/place/Warszawa" target="_blank" rel="noopener noreferrer" class="hover:opacity-80">Warsaw, Poland</a>
            </li>
          </ul>
        </div>

        <div class="w-3/4 mx-auto my-6 border-b border-white/50"></div>

        <div class="skills mt-8">
          <h3 class="font-bold text-lg mb-3 uppercase tracking-widest">Skills</h3>
          <div class="my-1">
            <div class="font-semibold">JavaScript</div>
            <progress value="75" max="100" class="w-full h-3" />
          </div>
          <div class="my-1">
            <div class="font-semibold">PHP</div>
            <progress value="75" max="100" class="w-full h-3" />
          </div>
          <div class="my-1">
            <div class="font-semibold">SQL</div>
            <progress value="85" max="100" class="w-full h-3" />
          </div>
  
          <div class="w-3/4 mx-auto my-6 border-b border-white/50"></div>

          <div class="font-bold text-lg mb-3 uppercase tracking-widest">Languages</div>
          <div class="my-1">
            <div class="font-semibold">English</div>
            <progress value="75" max="100" class="w-full h-3" />
          </div>
          <div class="my-1">
            <div class="font-semibold">Russian</div>
            <progress value="25" max="100" class="w-full h-3" />
          </div>
        </div>
      </div>

      <div class="text-black p-8">
        <p class="text-sm">
          <span class="font-bold">Full Stack Developer</span> with over 10 years of experience.
        </p>

        <h2 class="mt-10 mb-2 font-bold text-2xl">Experience</h2>

        <div class="mb-4">
          <h3 class="my-2 font-bold text-lg">Full Stack Developer</h3>
          <div class="text-xs font-mono text-gray-500 uppercase">2019 - present</div>
        </div>

        <div class="mb-4">
          <h3 class="my-2 font-bold text-lg">Implementation Consultant</h3>
          <div class="text-xs font-mono text-gray-500 uppercase">2014 - 2019</div>
        </div>

      </div>
    </div>
  </section>
</template>

