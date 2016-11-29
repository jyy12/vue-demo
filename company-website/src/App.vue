<template>
    <div id="app">
        <v-header></v-header>
        <div class="container">
            <v-side></v-side>
            <div class="content">
                <router-view></router-view>
                <router-view name='b'></router-view>                
            </div>

        </div>
        <v-footer></v-footer>
    </div>
</template>

<script>
    import vHeader from './components/v-header'
    import vSide from './components/v-side'
    import vFooter from './components/v-footer'


    export default {
        name: 'app',
        components: {
            vHeader,
            vSide,
            vFooter
        }
    }
</script>

<style lang="less">
html,body,div,span,object,iframe,h1,h2,h3,h4,h5,h6,p,a,em,img,strike,strong,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td{margin:0;padding:0;border:0;font:inherit;vertical-align:baseline;}
ul,ol{list-style:none;}
body{color:#333333;line-height:24px;font-size:12px;}
a{color:#333333;text-decoration:none;}
a:hover{text-decoration:underline;}
*html .group{height:1%;}
*:first-child+html .group{min-height:1px;}
.group:after{content:".";display:block;height:0;clear:both;visibility:hidden;font-size:0;}


/* layout */
.wrap{width:960px;margin:0 auto;}
    .container{
        overflow: hidden;
        background-color: #eee;

    }
</style>


