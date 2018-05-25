<template>

    <b-container>


<div class="img" v-bind:style="{ backgroundImage: 'url(' + image + ')' }">

<div class="row" style="padding-top: 5%;padding-bottom: 5%;">
<div class="col-md-4">
	<figure class="card card-product">
		<div class="img-wrap"><img src="https://s9.postimg.org/tupxkvfj3/image.jpg"></div>
		<figcaption class="info-wrap">
				<h4 class="title">Another name of item</h4>
				<p class="desc">Some small description goes here</p>
				<div class="rating-wrap">
					<div class="label-rating">132 reviews</div>
					<div class="label-rating">154 orders </div>
				</div> <!-- rating-wrap.// -->
		</figcaption>
		<div class="bottom-wrap">
			<a href="" class="btn btn-sm btn-primary float-right">Order Now</a>	
			<div class="price-wrap h5">
				<span class="price-new">$1280</span> <del class="price-old">$1980</del>
			</div> <!-- price-wrap.// -->
		</div> <!-- bottom-wrap.// -->
	</figure>
</div> <!-- col // -->
<div class="col-md-4">
	<figure class="card card-product">
		<div class="img-wrap"><img src="https://s9.postimg.org/ojb106167/image.jpg"> </div>
		<figcaption class="info-wrap">
				<h4 class="title">Good product</h4>
				<p class="desc">Some small description goes here</p>
				<div class="rating-wrap">
					<div class="label-rating">132 reviews</div>
					<div class="label-rating">154 orders </div>
				</div> <!-- rating-wrap.// -->
		</figcaption>
		<div class="bottom-wrap">
				<a href="" class="btn btn-sm btn-primary float-right">Order Now</a>	
				<div class="price-wrap h5">
					<span class="price-new">$1280</span> <del class="price-old">$1980</del>
				</div> <!-- price-wrap.// -->
		</div> <!-- bottom-wrap.// -->
	</figure>
</div> <!-- col // -->
<div class="col-md-4">
	<figure class="card card-product">
		<div class="img-wrap"><img src="https://s9.postimg.org/4ooze1tof/image.jpg"></div>
		<figcaption class="info-wrap">
				<h4 class="title">Product name goes here</h4>
				<p class="desc">Some small description goes here</p>
				<div class="rating-wrap">
					<div class="label-rating">132 reviews</div>
					<div class="label-rating">154 orders </div>
				</div> <!-- rating-wrap.// -->
		</figcaption>
		<div class="bottom-wrap">
				<a href="" class="btn btn-sm btn-primary float-right">Order Now</a>	
				<div class="price-wrap h5">
					<span class="price-new">$1280</span> <del class="price-old">$1980</del>
				</div> <!-- price-wrap.// -->
		</div> <!-- bottom-wrap.// -->
	</figure>
</div> <!-- col // -->
</div> <!-- row.// -->

<div class="row" style="padding-top: 5%;padding-bottom: 5%;">
<div class="col-md-4">
	<figure class="card card-product">
		<div class="img-wrap"><img src="https://s9.postimg.org/tupxkvfj3/image.jpg"></div>
		<figcaption class="info-wrap">
				<h4 class="title">Another name of item</h4>
				<p class="desc">Some small description goes here</p>
				<div class="rating-wrap">
					<div class="label-rating">132 reviews</div>
					<div class="label-rating">154 orders </div>
				</div> <!-- rating-wrap.// -->
		</figcaption>
		<div class="bottom-wrap">
			<a href="" class="btn btn-sm btn-primary float-right">Order Now</a>	
			<div class="price-wrap h5">
				<span class="price-new">$1280</span> <del class="price-old">$1980</del>
			</div> <!-- price-wrap.// -->
		</div> <!-- bottom-wrap.// -->
	</figure>
</div> <!-- col // -->
<div class="col-md-4">
	<figure class="card card-product">
		<div class="img-wrap"><img src="https://s9.postimg.org/ojb106167/image.jpg"> </div>
		<figcaption class="info-wrap">
				<h4 class="title">Good product</h4>
				<p class="desc">Some small description goes here</p>
				<div class="rating-wrap">
					<div class="label-rating">132 reviews</div>
					<div class="label-rating">154 orders </div>
				</div> <!-- rating-wrap.// -->
		</figcaption>
		<div class="bottom-wrap">
				<a href="" class="btn btn-sm btn-primary float-right">Order Now</a>	
				<div class="price-wrap h5">
					<span class="price-new">$1280</span> <del class="price-old">$1980</del>
				</div> <!-- price-wrap.// -->
		</div> <!-- bottom-wrap.// -->
	</figure>
</div> <!-- col // -->
<div class="col-md-4">
	<figure class="card card-product">
		<div class="img-wrap"><img src="https://s9.postimg.org/4ooze1tof/image.jpg"></div>
		<figcaption class="info-wrap">
				<h4 class="title">Product name goes here</h4>
				<p class="desc">Some small description goes here</p>
				<div class="rating-wrap">
					<div class="label-rating">132 reviews</div>
					<div class="label-rating">154 orders </div>
				</div> <!-- rating-wrap.// -->
		</figcaption>
		<div class="bottom-wrap">
				<a href="" class="btn btn-sm btn-primary float-right">Order Now</a>	
				<div class="price-wrap h5">
					<span class="price-new">$1280</span> <del class="price-old">$1980</del>
				</div> <!-- price-wrap.// -->
		</div> <!-- bottom-wrap.// -->
	</figure>
</div> <!-- col // -->
</div> <!-- row.// -->


</div>


        
    </b-container>
</template>


<script>
export default {
    
  data(){
            return {
                image:['']
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
