<template>
  <section class="hero">
      <div class="flex flex-col gap-8">
          <h1>Crafting Beautiful &amp; Intuitive Web Experiences</h1>
      <p>Howdy, my name is Gabe and I'm a Front-End Web Developer with a passion for creating dynamic and user-friendly websites and web applications. With strong skills in HTML, CSS, and JavaScript, I bring designs to life with stunning visuals and interactive features.</p>
      <p>I also specialize in responsive design, ensuring that my work looks great and functions seamlessly on all devices. Take a look at my portfolio to see some of my recent projects and learn more about my expertise as a Front-End Web Developer.</p>
      </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped lang="css">
section.hero {
    padding: 2.5rem 1.75rem;
}
h1 {
    font-size: 1.75rem;
    font-weight: bold;
    line-height: 1.2;
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