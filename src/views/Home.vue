<template>
<div class="img" v-bind:style="{ backgroundImage: 'url(' + image + ')' }">

    <my-banner />
<my-grid/>
    
</div>

</template>

<script>
// @ is an alias to /src

    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    import MyBanner from '@/components/banner.vue'
    import MyGrid from '@/components/grid.vue'

    export default {
        components:{
            MyBanner,
            MyGrid
            
        },
            data(){
            return {
                image:['https://scontent-ams3-1.xx.fbcdn.net/v/t31.0-8/18056478_1499561853388371_2053835354663588596_o.jpg?_nc_cat=0&oh=54d9ae5335c02b9092f41d9ce1259f19&oe=5BC50409']
            }
        }

    }
</script>
<style>
    .img {
    max-width: 100%;
    max-height: 100%;
    }
</style>
