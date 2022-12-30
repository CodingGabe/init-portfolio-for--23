<template>
  <!-- Navigation -->
  <nav class="px-3 py-3 flex justify-between items-center fixed w-full backdrop-blur-sm sm:top-0 sm:bottom-auto sm:px-6 lg:py-4 border-b-1 border-nav--color .bg-navbar_bg bottom-0">
    <div class="top-0 absolute left-0 w-full bg-topbar"></div>
    <router-link to="/"><span class="px-3 py-1 pb-2 rounded-md transition-all sm:px-6 sm:py-2">Home</span></router-link>
    <div class="flex items-center gap-1 sm:gap-2">
        <router-link to="/about"><span class="px-3 py-1 pb-2 rounded-md transition-all sm:px-6 sm:py-2">About</span></router-link>
        <router-link to="/projects"><span class="px-3 py-1 pb-2 rounded-md transition-all sm:px-6 sm:py-2">Projects</span></router-link>
        <router-link to="/shop"><span class="px-3 py-1 pb-2 rounded-md transition-all sm:px-6 sm:py-2">Shop</span></router-link>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="css">
    a,
    a:hover {
        color: rgb(248 250 252);
        font-weight: bold;
    }
    span:hover {
        --tw-bg-opacity: 1;
        background-color: rgb(63 63 70/var(--tw-bg-opacity));
    }
    nav .active-link {
        --tw-bg-opacity: 1;
        --tw-text-opacity: 1;
        background-color: rgb(46 46 46/var(--tw-bg-opacity));
        border-radius: 0.375rem;
        color: rgb(246 246 246/var(--tw-text-opacity));
        padding-bottom: 0.5rem;
        padding-top: 0.5rem;
    }
    nav .bg-topbar {
        height: .25rem;
        background-image: linear-gradient(90deg, rgb(139 92 246),rgb(225 29 72), rgb(249 168 212));
    }
    .border-nav--color {
        border-color: rgba(54,54,54,.6);
    }
    .bg-navbar_bg {
        background-color: hsla(0,0%,7%,.8);
    }
    @media (min-width: 385px) {
        a {
            font-size: 1.1rem;
        }
    }
</style>