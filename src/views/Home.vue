<template>
<my-banner />
</template>

<script>
// @ is an alias to /src

    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    import MyBanner from '@/components/banner.vue'
    
    export default {
        components:{
            MyBanner
        }
    }
</script>
