<template>
<div class="img" v-bind:style="{ backgroundImage: 'url(' + image + ')' }">

    <my-banner />
    <b-container>


<div class="row" style="padding-top: 5%;padding-bottom: 5%;">
<div class="col-md-4">
<my-grid/>
</div> <!-- col // -->
<div class="col-md-4">
<my-grid/>	
</div> <!-- col // -->
<div class="col-md-4">
	<my-grid/>
</div> <!-- col // -->
</div> <!-- row.// -->

<div class="row" style="padding-top: 5%;padding-bottom: 5%;">
<div class="col-md-4">
	<my-grid/>
</div> <!-- col // -->
<div class="col-md-4">
	<my-grid/>
</div> <!-- col // -->
<div class="col-md-4">
<my-grid/>
</div> <!-- col // -->
</div> <!-- row.// -->





        
    </b-container>
    
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
