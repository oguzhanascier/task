<template>
    <div class="cards">
        <div class="card" v-for="product in products" :key="product.id">
            <img :src="product.img" alt="">
            <div class="title">{{ product.productTitle }}</div>
            <div class="subText">{{ product.price }}</div>
            <div class="rating">
                <div class="star">{{ product.star }}</div>
                <button class="watch">watch</button>
            </div>
        </div>

    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState([
            'products'
        ])

    },

};
</script>

<style lang="scss">
$line-height: 25px;

.cards {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.card {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 250px;
    height: 300px;
    padding: 16px;
    font-family: 'Inter', sans-serif;
}

img {}

.title {
    font-size: 16px;
    font-weight: regular;
    line-height: $line-height;
    overflow: hidden;
    white-space: nowrap;
    /* Don't forget this one */
    text-overflow: ellipsis;
    text-transform: uppercase;

}

.price {
    font-size: 24px;
    font-weight: bold;
    line-height: 30px;

}

.subText {
    font-size: 14px;
    font-weight: 200;
    line-height: $line-height;

}

.rating {
    display: flex;
    justify-content: space-between;
    align-items: center;
    bottom: -20px;

}

.watch {}

.star {}
</style>