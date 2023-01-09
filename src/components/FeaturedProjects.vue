<template>
    <section id="featured">
        <div class="flex flex-col gap-2 lg:gap-2">
            <h3>Featured Projects</h3>
            <p class="text-sm lg:text-lg slg:leading-8 leading-relaxed">Check out some of my favorite projects.</p>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-7 pt-8 mx-auto">
                <a href="https://gabes-shopping-list.netlify.app" class="flex flex-col w-full p-6 py-6 lg:p-6 lg:py-10 items-center gap-8 rounded-sm transition-colors border-[1px] bg-zinc-900 border-light" target="_blank">
                    <img src="../assets/shopping-app.png" alt="Shopping App" class="w-full object-cover rounded-sm">
                    <div class="flex-flex-col justify-between gap-4">
                        <h3 class="mb-3">Vue Shopping List App</h3>
                        <p class="text-zinc-400">A small shopping list app that showcases my knowledge of the basics of Vue.</p>
                        
                    </div>
                </a>
                <a href="https://sombruh.webflow.io/" class="flex flex-col w-full p-6 py-6 lg:p-6 lg:py-10 items-center gap-8 rounded-sm transition-colors border-[1px] bg-zinc-900 border-light" target="_blank">
                    <img src="../assets/zarya.png" alt="Zarya Creative" class="w-full object-cover rounded-sm">
                    <div class="flex-flex-col justify-between gap-4">
                        <h3 class="mb-3">Zarya Creative Studio</h3>
                        <p class="text-zinc-400">This creative studio was created with the goal of helping small business create beautiful websites at an affordable price while not sacrificing creativity.</p>
                    </div>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style style="css">

#featured {
    padding-top: 0;
}

h3 {
    font-size: 1.4rem;
}

</style>