<template>
    <div class="catalog">
        <ItemCard 
        v-for="product in products"
        v-bind:key="product.id"
        :id="product.id"
        :product_data="product"/>
    </div>
</template>

<script>
import ItemCard from '@/components/ItemCard.vue'

export default {
    name: 'TheCatalog',
    data() {
        return{
            sold: (JSON.parse(localStorage.getItem("sold") || "false") === false) ? true : false,
            active: (JSON.parse(localStorage.getItem("active"), "false") === true) ? true : false,
            products: [
                {   "id" : 1,
                    "pic" : "pic.png",
                    "title" : "«Рождение Венеры»",
                    "author" : "Сандро Боттичелли",
                    "price" : "1 000 000 $",
                    "priceValue" : "2 000 000 $" 
                },
                {   "id" : 2,
                    "pic" : "pic2.png",
                    "title" : "«Тайная вечеря»",
                    "author" : "Леонардо да Винчи",
                    "price" : "3 000 000 $",
                },
                {   "id" : 3,
                    "pic" : "pic3.png",
                    "title" : "«Сотворение Адама»",
                    "author" : "Микеланджело",
                    "price" : "5 000 000 $",
                    "priceValue" : "6 000 000 $" 
                },
                {   "id" : 4,
                    "pic" : "pic4.png",
                    "title" : "«Урок анатомии»",
                    "author" : "Рембрандт",
                    "price" : "1 000 000 $"
                },
            ]
        }
    },
    components: {
        ItemCard
    },
    methods: {

    }
}
</script>