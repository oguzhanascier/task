<template>
    <div class="button-group">
        <div class="selectBox">
            <span class="selectTop">SORT BY</span>
            <select class="select">
                <option value="low">Low to High</option>
                <option value="high">High to Low</option>
            </select>
        </div>
        <div class="search">
            <button>Search</button>
        </div>
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

.button-group{
    display: flex;
    justify-content: space-between;
}


button{
    border: 1px solid #9DC2FF;
    padding: 7px;
    color: #2264D1;
    font-weight: bold;
    background: #fff;
    cursor: pointer;
}
</style>