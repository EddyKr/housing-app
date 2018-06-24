<template>
<div>
    <div id="imgBackground">
        <my-banner />
        <b-container>
            <my-grid/>
        </b-container>    
    </div>
</div>
</template>

<script>
    // @ is an alias to /src
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    import MyBanner from '@/components/banner.vue'
    import MyGrid from '@/components/grid.vue'
    import TopNavBar from '@/components/top-navbar.vue'
    import auth from '@/auth.js'

    export default {
        components:{
            MyBanner,
            MyGrid,
            TopNavBar
        },
        data() {
            return {
                logged : auth.checkAuth()
            }
        }
    }
</script>

<style>
.navbar{
       background: darkslategray !important;
}
    #imgBackground {
        max-width: 100%;
        max-height: 100%; 
        background-image: url('../assets/bckg2.jpg');       
    }

    #rowTiles{
        padding-top: 5%;
        padding-bottom: 5%;
    }

    .card-product .img-wrap {
        border-radius: 3px 3px 0 0;
        overflow: hidden;
        position: relative;
        height: 220px;
        text-align: center;
    }

    .card-product .img-wrap img {
        max-height: 100%;
        max-width: 100%;
        object-fit: cover;
    }

    .card-product .info-wrap {
        overflow: hidden;
        padding: 15px;
        border-top: 1px solid #eee;
    }

    .card-product .bottom-wrap {
        padding: 15px;
        border-top: 1px solid #eee;
    }

    .label-rating { margin-right:10px;
        color: #333;
        display: inline-block;
        vertical-align: middle;
    }

    .card-product .price-old {
        color: #999;
    }
</style>
