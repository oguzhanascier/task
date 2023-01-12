<template>
    <div class="direction">
        <div v-for="item in directionItem" :key="item.name">
            <a href="" class="links">{{ item.name }}</a>
        </div>
    </div>


</template>

<script>
import { ref } from 'vue';
export default {
    setup() {

        let directionItem = ref([{ name: 'Jewelry & Accessories' }, { name: 'Clothing & Shoes' }, { name: 'Home & Living' }, { name: 'Wedding & Party' }, { name: 'Toys & Entertainment' }, { name: 'Art & Collectibles' }, { name: 'Craft Supplies & Tools' }])



        return { directionItem }
    }
}
</script>

<style lang="scss" scoped>
.links {
    font-size: 16px;
    color: #000;
    text-decoration: none;
    position: relative;
}

.direction {
    clear: both;
    width: 100%;
    display: flex;
    background: #F1F1F1;
    justify-content: space-between;
    margin-top: 55px;
}
</style>