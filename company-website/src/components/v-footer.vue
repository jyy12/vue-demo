<template>
    <div class="footer">
        {{foot}}

    </div>
</template>

<script>
    export default {
        name: 'v-footer',
        data () {
            return {
                foot: 'foot content'
            }
        }
    }
</script>

<style lang="less">
.footer{
    text-align: center;
    background-color: #eee;
    line-height: 80px;
    font-size: 24px;
}

</style>
