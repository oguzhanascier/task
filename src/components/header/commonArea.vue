<template>
    <header>
        <div class="top">
            <label><img src="../../assets/search.png" class="search" alt=""></label>
            <img src="../../assets/logo.png" class="logo" alt="">
            <div class="user">
                <div class="account">
                    <img src="../../assets/User.png" alt="">
                    <span>Account</span>
                </div>
                <div class="shoppingCart">
                    <img src="../../assets/Bag_alt.png" alt="">
                    <span>Shopping</span>
                </div>
            </div>
        </div>
        <br>
        <hr>
        <headerDirection />
    </header>

    <div class="sort-search">
        <commonButton />
    </div>

</template>

<script>
import headerDirection from '../directions/headerDirection.vue';
import commonButton from '../commonButton.vue';

export default {
    components: { headerDirection, commonButton },
   
}
</script>

<style lang="scss" scoped>
$main: #F1F1F1;


header {
    padding: 25px 59px;
    background: $main;
}

.top {
    display: flex;
    justify-content: space-between;
    align-items: center;

}

.logo {
    height: 34px;
    margin-left: 160px;
}

.user {
    display: flex;
    justify-content: end;
    align-items: center;

}

.account {
    margin-right: 32px;
}

span {
    font-size: 14px;
    margin-left: 6px;
}

.sort-search{
    padding: 25px 59px;

}
</style>