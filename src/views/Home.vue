<template>
  <section class="hero">
      <!-- Spacing wrapper -->
      <div class="flex flex-col gap-8 lg:gap-16">
        <!-- Content -->
        <div class="flex flex-col gap-8">
            <h1>Crafting Beautiful &amp; Intuitive Web Experiences</h1>
            <p>Howdy, my name is Gabe and I'm a Front-End Web Developer with a passion for creating dynamic and user-friendly websites and web applications. With strong skills in HTML, CSS, and JavaScript, I bring designs to life with stunning visuals and interactive features.</p>
            <p>I also specialize in responsive design, ensuring that my work looks great and functions seamlessly on all devices. Take a look at my portfolio to see some of my recent projects and learn more about my expertise as a Front-End Web Developer.</p>
        </div>
        <!-- Social -->
        <div class="flex justify-between items-center">
            <!-- icons wrapper-->
            <div class="flex gap-1">
                <a href="https://www.instagram.com/creative.gabe/?hl=en" title="Instagram" target="_blank">
                    <svg role="img" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram rounded-md p-2 transition-all"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="https://github.com/CodingGabe" title="Github" target="_blank">
                    <svg role="img" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github rounded-md p-2 transition-all"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
                <a href="https://www.linkedin.com/in/gabeamaya/" title="LinkedIn" target="_blank">
                    <svg role="img" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin rounded-md p-2 transition-all"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
            </div>
            <!-- Contact Button -->
            <a href="mailto:gabeamaya2@gmail.com" class="bg-rose-500 hover:bg-rose-700 px-2 py-2 rounded-sm w-fit md:px-4 slg:px-6 slg:py3 transition-colors">Contact Me</a>
        </div>
        <hr class="border-0 h-[4px] opacity-25">
        <featured-projects />
        
      </div>

  </section>
  
</template>

<script>

import FeaturedProjects from '../components/FeaturedProjects.vue'

export default {
    name: 'Home',
    components: {
        FeaturedProjects
    }
}
</script>

<style scoped lang="css">

section.hero {
    padding: 2.5rem 0;
}
h1 {
    font-size: 1.75rem;
    font-weight: bold;
    line-height: 1.2;
}
.projects h3 {
    font-size: 1.125rem;
    font-weight: bold;
}
.projects p {
    font-size: 1rem;
    font-weight: normal;
    color: rgb(161 161 170);
}
@media (min-width: 392px) {
    section.hero {
        padding: 12rem 0 5.75rem 0;
    }
    h1 {
        font-size: 3.75rem;
    }
}

</style>