<template>
  <section class="projects">
    <div class="w-full max-w-screen-lg mx-auto pb-24 sm:px-16 slg:px-24 lg:mt-48 lg:mt-58 px-4">
      <div class="flex flex-col gap-8 w-full lg:gap-12">
        <h1>My Projects</h1>
        <p>Full list of my most recent projects showcasing my skills in Development and Design.</p>
        <hr class="border-0 opacity-25 h-[4px]">
        <!-- Projects container -->
        <div class="flex flex-col items-center justify-center gap-28">
          <!-- Project -->
          <div class="flex flex-col gap-8 items-center">
            <!-- Image of Project -->
            <img src="../assets/shopping-app.png" alt="" class="rounded-md w-full object-cover">
            <!-- Project content -->
            <div class="flex flex-col items-left gap-6">
              <h3>Vue Shopping App</h3>
              <p>A simple shopping app built with Vue JS. I learned the basics on how to filter through json files data to load in content along with components, router and the fundamentals of Options API.</p>
              <a href="https://gabes-shopping-list.netlify.app" class="px-2 py-2 rounded-md transition-colors border-[1px] w-fit text-sm md:px-4 slg:px-6 bg-teal-500 border-black hover:bg-teal-700">View App</a>
            </div>
          </div>
          <!-- Project -->
          <div class="flex flex-col gap-8 items-center">
            <!-- Image of Project -->
            <img src="../assets/zarya.png" alt="" class="rounded-md w-full object-cover">
            <!-- Project content -->
            <div class="flex flex-col items-left gap-6">
              <h3>Zarya Creative Studio</h3>
              <p>A beautiful website crafted by me in Webflow.  Main goal was to really flex my design skills and think outside of the norm. This agency is for small business' to hire my friend and I for creative services at an affordable rate.</p>
              <a href="https://gabes-shopping-list.netlify.app" class="px-2 py-2 rounded-md transition-colors border-[1px] w-fit text-sm md:px-4 slg:px-6 bg-teal-500 border-black hover:bg-teal-700">View Site</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>