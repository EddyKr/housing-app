<template>
  <div id="divMN">
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                background="#ababab"
                :interval="4000"
                img-width="1024"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >

      <!-- Text slides with image -->
      <b-carousel-slide 
                        img-src="https://scontent-ams3-1.xx.fbcdn.net/v/t31.0-8/22550380_1686967227981165_3966190760440151229_o.jpg?_nc_cat=0&oh=0f0520f5ccb3c68e9db6c64ef236be46&oe=5B7827FC"
                        
      >
      <div class="row fixed-top">
      <b-container class="bv-example-row ">
    <b-row class="text-center">
        <b-col></b-col>
        <b-col cols="8">

          <h1>Welcome at YourHousing</h1>
           <h4>Feel free to explore available listnings or post one yourself</h4>

        </b-col>
        <b-col></b-col>
    </b-row>
    <b-row class="text-center">
        <b-col></b-col>
        <b-col cols="8">

          <input type="text" class="form-control"  placeholder="City/Address/etc..." >
                    


        </b-col>
        <span class="input-group-addon">
                        <b-button type="submit">
                            Search
                        </b-button>  
                    </span>
        <b-col></b-col>
    </b-row>
</b-container>
</div>






</b-carousel-slide>


    </b-carousel>



  </div>
</template>

<script>
export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>
<!-- carousel-1.vue -->

<style>

</style>
