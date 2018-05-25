<template>
	<figure class="card card-product">
		<div class="img-wrap"><img src="https://s9.postimg.org/tupxkvfj3/image.jpg"></div>
		<figcaption class="info-wrap">
				<h5 class="title">Title</h5>
				<p class="desc">Some small description goes here</p>
				<div class="rating-wrap">
					<div class="label-rating">132 views</div>
				</div> <!-- rating-wrap.// -->
		</figcaption>
		<div class="bottom-wrap">
			<a href="" class="btn btn-sm btn-primary float-right">Take a look</a>	
			<div class="price-wrap h5">
				<span class="price-new">500 eu.</span> <del class="price-old"> 750 eu.</del>
			</div> <!-- price-wrap.// -->
		</div> <!-- bottom-wrap.// -->
	</figure>

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

</style>

