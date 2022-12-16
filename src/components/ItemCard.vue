<template>
    <div class="item-card"  
    :id="product_data.id" 
    :class="sold ? 'item-card--sold' : 'item-card--active'">
        <img class="item-card__pic" 
        :src="require(`@/assets/img/${product_data.pic}`)" alt="">
        <h2 class="item-card__title">{{product_data.title}}</h2>
        <h2 class="item-card__author">{{product_data.author}}</h2>
        <div class="item-card__bottom">
            <div class="item-card__bottom-block">
                <h6 class="item-card__bottom-block-value">{{product_data.priceValue}}</h6>
                <h3 class="item-card__bottom-block-price">{{product_data.price}}</h3>
            </div>
            <button 
            v-on:click="addToCart" 
            class="item-card__bottom-block-button"
            :class="active ? 'item-card__bottom-block-button--active' : 'item-card__bottom-block-button--non-active'">
                <div v-if="loading">      
                    <div class="loader"><div></div><div></div><div></div><div></div></div>
                </div>
                <div v-else>
                    <img src="@/assets/img/added.svg" alt="" class="item-card__bottom-block-button-pic">
                    {{active ? 'В корзине' : 'Купить'}}
                </div>

            </button>
            <h2 class="item-card__bottom-sold">Продана на аукционе</h2>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

    export default {
        name: 'ItemCard',
        props: {
            id: Number,
            product_data: {
                type:Object,
                default(){
                    return{}
                }
            }
        },
        data() {
            return {
                loading: false,
                sold: localStorage.getItem("sold") === "false",
                active: localStorage.getItem("active") === "false",
                objects: []
            };
        },
        mounted() {
            if (localStorage.getItem('sold-'+ this.id)) this.sold = JSON.parse(localStorage.getItem('sold-'+ this.id));
            if (localStorage.getItem('active-'+ this.id)) this.active = JSON.parse(localStorage.getItem('active-'+ this.id));
        },
        methods: {
            addToCart(){
                this.loading = true;
                axios.get('https://jsonplaceholder.typicode.com/posts/1')
                    .then(response => { 
                        this.objects = response.data;
                        if(this.objects.id == this.product_data.id){
                            this.active = !this.active;
                            localStorage.setItem("active-" + this.id, this.active)
                        }else{
                            this.sold = !this.sold;
                            localStorage.setItem("sold-" + this.id, this.sold)
                        }
                    })
                    .catch(error => {
                        console.log(error);
                        this.errored = true;
                    })
                    .finally(() => this.loading = false);
                 },
    }
}
    
</script>

  