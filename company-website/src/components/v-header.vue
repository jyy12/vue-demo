<template>
    <div class="header">
        <h1>{{ name }}</h1>
        <ul>
            <router-link to="/home" tag="li" active-class="active">Home</router-link>
            <router-link to="/about" tag="li" active-class="active">About</router-link>
            <router-link to="/news" tag="li" active-class="active">news</router-link>
            <router-link to="/contact" tag="li" active-class="active">contact</router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'v-header',
        data () {
            return {
                name: 'website'
            }
        }
    }
</script>

<style lang="less">
.header{
    background-color: lighten(#6BADF6,10%);
    h1{
        margin: 0;
        padding:0 20px;
        line-height: 2em;
        font-size: 24px;
    }
    ul{
        overflow: hidden;
        li{
            float: left;
            width: 120px;
            line-height: 24px;
            background-color: #ccc;
            margin: 0 10px;
            text-align: center;
            cursor: pointer;
        }
        .active{
            background-color: blue;
            color: #fff;
        }
    }
}

</style>
