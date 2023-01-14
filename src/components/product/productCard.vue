<template>
    <div class="cards">
        <div class="card">
            <img src="../../assets/Image.png" alt="">
            <div class="title">MEN'S BETTER THAN NAKED - JACKET</div>
            <div class="price">99.99</div>
            <div class="subText">1258 bids, 359 watchers.</div>
            <div class="rating">
                <div class="star">31</div>
                <button class="watch">watch</button>
            </div>
        </div>
        <div class="card">
            <img src="../../assets/Image.png" alt="">
            <div class="title">MEN'S BETTER THAN NAKED - JACKET</div>
            <div class="price">99.99</div>
            <div class="subText">1258 bids, 359 watchers.</div>
            <div class="rating">
                <div class="star">31</div>
                <button class="watch">watch</button>
            </div>
        </div>
        <div class="card">
            <img src="../../assets/Image.png" alt="">
            <div class="title">MEN'S BETTER THAN NAKED - JACKET</div>
            <div class="price">99.99</div>
            <div class="subText">1258 bids, 359 watchers.</div>
            <div class="rating">
                <div class="star">31</div>
                <button class="watch">watch</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {

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
    width: 260px;
    height: 473px;
    padding: 16px;
    font-family: 'Inter', sans-serif;
}

img {}

.title {
    font-size: 16px;
    font-weight: regular;
    line-height: $line-height;
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
    line-height: $line-height;

}
</style>