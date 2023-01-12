<template>
    <div class="selectBox">
        <span class="selectTop">SORT BY</span>
        <select class="select">
            <option value="">Decending Price</option>
        </select>
    </div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
.selectBox {
    position: relative;

}

.selectTop{
    font-size: 12px;
    position: absolute;
    top: -12px;
    left: 5px;
    padding-inline: 5px;
    background: #ffff;
    border: 1px solid #fff;
}
.select {
    border: 1px solid #5A5B6A;
    background: #ffff;
    padding: 7px;
}
</style>