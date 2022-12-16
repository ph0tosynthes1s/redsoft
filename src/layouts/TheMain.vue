<template>
    <section class="main">
        <div class="container">
            <h1 class="main__title">
                Картины эпохи Возрождения
            </h1>
            <TheCatalog/>
        </div>
    </section>
</template>

<script>
import TheCatalog from '@/components/TheCatalog.vue'

export default {
    name: 'TheMain',
    components: {
        TheCatalog
    }
}
</script>
