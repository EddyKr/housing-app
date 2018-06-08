<template>
  <div class="img" v-bind:style="{ backgroundImage: 'url(' + image + ')' }">
    <b-container fluid class="p-4 bg-dark">

      <div  align="center">  
        <h2>Title</h2>
      </div>
      
      <b-row>
        <b-col cols="8">
          <b-carousel id="carousel1"
                    style="text-shadow: 1px 1px 2px #333;"
                    controls
                    indicators
                    background="#ababab"
                    :interval="4000"
                    img-width="1024"
                    img-height="480"
                    v-model="slide"
                    @sliding-start="onSlideStart"
                    @sliding-end="onSlideEnd">
          

            <b-carousel-slide caption="First slide"
              text="Nulla vitae elit libero, a pharetra augue mollis interdum."
              img-src="https://picsum.photos/1024/480/?image=52">
            </b-carousel-slide>

            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
              <h1>Hello world!</h1>
            </b-carousel-slide>

            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58">
            </b-carousel-slide>

            <b-carousel-slide>
              <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
              src="https://picsum.photos/1024/480/?image=55" alt="image slot">
            </b-carousel-slide>

            <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
                ut lacus vel interdum.
              </p>
            </b-carousel-slide>

          </b-carousel>
        </b-col>
        
        <b-col>
          <table class="table table-dark">
            <tbody>
              <tr>
                <td>City:</td>
                <td>Eindhoven</td>
              </tr>

              <tr>
                <td>Address:</td>
                <td>Geldropseweg 321</td>
              </tr>
                
              <tr>
                <td>Post code:</td>
                <td>5611SM</td>
              </tr>

              <tr>
                <td>Property type:</td>
                <td>studio</td>
              </tr>

              <tr>
                <td>Property size:</td>
                <td>30m2</td>
              </tr>

              <tr>
                <td>Minimal renting period:</td>
                <td>6 months</td>
              </tr>

              <tr>
                <td>Available from:</td>
                <td>1/1/2019</td>
              </tr>

              <tr>
                <td>Available till:</td>
                <td>not specified</td>
              </tr>

              <tr>
                <td>Price:</td>
                <td>500 eu</td>
              </tr>

              <tr>
                <td>Deposit:</td>
                <td>500 eu</td>
              </tr>
            
            </tbody>
          </table>    

          <div  align="center">  
            <b-btn >Contact owner</b-btn>
          </div>

        </b-col>
      </b-row>

    </b-container>
  </div>
</template>

<script>
export default { 
  data(){
      return {
          image:require('../assets/plchld1600x800.jpg'),
          image2:require('../assets/avdef.png'),
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

<style>

</style>
