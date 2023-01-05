<template>
  <section id="about" class="max-w-screen-lg w-full mx-auto">
    <div class="flex flex-col gap-8 lg:gap-12 w-full">
      <img src="../assets/port-daughter.png" alt="daughter and me" class="w-full rounded-sm object-cover mb-3 lg:h-80">
      <h2 class="pl-5">About Me</h2>
      <p>As a Front-End Web Developer, I am skilled in crafting engaging and intuitive user experiences for websites and web
        applications. With a strong foundation in HTML, CSS, and JavaScript, I have the technical expertise to bring designs
        to life and create visually stunning and interactive web pages.</p>
      <p>I am also proficient in responsive design principles, ensuring that the websites I build are mobile-friendly and
        accessible on all devices. Whether working on a simple landing page or a complex e-commerce platform, I am committed
        to
        delivering high-quality and reliable solutions that meet the needs of my clients and users.</p>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
h2 {
  font-size: 2.75rem;
  font-weight: bold;
}
#about {
  padding-top: 2.75rem;
}
p {
  margin-bottom: 1rem;
}
@media (min-width: 400px) {
  #about {
    padding-top: 7.75rem;
  }
}
</style>