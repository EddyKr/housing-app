<template>
 <div>
  <top-nav-bar/>
  <b-container fluid class="p-4 bg-dark">
  <div  align="center">  
    <h2 id="pageTitle">Studio Barrierweg</h2>
  </div>
    <b-row >
      <b-col sm="8" offset-sm="1">

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
          <b-carousel-slide
          img-src="https://media.pararius.nl/image/PR0001462000/PR0001462728/image/jpeg/613x920/EindhovenBarrierweg-9d8f_1.jpg">
          </b-carousel-slide>
          <b-carousel-slide 
          img-src="https://media.pararius.nl/image/PR0001462000/PR0001462728/image/jpeg/613x920/EindhovenBarrierweg-bcd9_2.jpg">
          </b-carousel-slide>
          <b-carousel-slide 
          img-src="https://media.pararius.nl/image/PR0001462000/PR0001462728/image/jpeg/613x920/EindhovenBarrierweg-3d98_4.jpg">
          </b-carousel-slide>
          <b-carousel-slide>
          <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
          src="https://media.pararius.nl/image/PR0001462000/PR0001462728/image/jpeg/613x920/EindhovenBarrierweg-7a9e_6.jpg" alt="image slot">
          </b-carousel-slide>
        </b-carousel>
        <b-row>
            <b-col sm="6" class="property-details">
                <table class="table table-dark">
                  <tbody>
                    <tr>
                      <td>City</td>
                      <td>Eindhoven</td>
                    </tr>
                    <tr>
                      <td>Address</td>
                      <td>Barrierweg</td>
                    </tr>
                    <tr>
                      <td>Post code</td>
                      <td>5622 CM</td>
                    </tr>
                    <tr>
                      <td>Property type</td>
                      <td>Studio</td>
                    </tr>
                    <tr>
                      <td>Property size</td>
                      <td>28 m²</td>
                    </tr>
                    <tr>
                      <td>Minimal renting period</td>
                      <td>6 months</td>
                    </tr>
                    <tr>
                     <td>Available from</td>
                      <td>1/1/2019</td>
                    </tr>
                    <tr>
                      <td>Available till</td>
                      <td>Not specified</td>
                    </tr>
                    <tr>
                      <td>Rent per month</td>
                      <td>485€</td>
                    </tr>
                    <tr>
                      <td>Deposit</td>
                      <td>485€</td>
                    </tr>
                  </tbody>
                </table>
            </b-col>
            <b-col sm="6">
                <span class="description-title">Description</span>
                <div class="description">
                    <p>Fully independent living space located on the 2nd floor of a stately home in Eindhoven, in the Woensel district.</p>

                    <p>The living space is located on the 2nd floor. Via a staircase you reach the living area. On the hall is the toilet located, pantry and central heating boiler.</p>

                    <p>Separate kitchen with hob, extractor and cupboard space. Shower is in the same room as the kitchen.</p>

                    <p>Separate living room with window units.</p>

                    <p>Through a sleeping loft you reach the bedroom with a skylight.</p>

                    <p>Rental price Euro 485.00, - including gas, water, electricity, TV, internet and local taxes.</p>

                    <p>Deposit 1 month rent.</p>

                    <p>Minimal rental periode 12 months.</p>
                </div>
            </b-col>
        </b-row>
      </b-col>

      <b-col sm="2" class="owner-info">
        <h1>Contact</h1>

        <div  align="center landlord">
            <img alt="User Pic" :src="avatar" style="width: 30%;">
            <p>Floris</p>
        </div>


        <b-container class="text-center information-container">
            <span class="information-label information">Phone: </span> <span class="information-value information">4564654567</span>
        </b-container>
        <b-container class="text-center information-container">
            <span class="information-label information">Email: </span> <span class="information-value information">some@email.com</span>
        </b-container>

        <b-container class="text-center contact-actions">
            <a href="" class="btn btn-success">Schedule a viewing</a>
        </b-container>
        <b-container class="text-center contact-actions">
            <a href="" class="btn btn-danger">Request more details</a>
        </b-container>
      </b-col>
    </b-row>
  </b-container>
 </div>
</template>

<script>
import TopNavBar from '@/components/top-nav-2.vue'

export default {
  components: {
    TopNavBar
  },
  data(){
      return {
          slide: 0,
          sliding: null,
          avatar:require('../assets/profile.png')
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
  #pageTitle{
    color: whitesmoke;
    font-style: italic;
  }

  .owner-info {
    background-color: #fff;
  }

  .information-container, .contact-actions {
    margin-bottom: 10px;
    margin-top: 10px;
  }

  .information {
    font-size: 1.2rem;
  }

  .information-label {
    color: #4d4d4d;
  }

  .information-value {
    color: #b3b3b3;
  }

  .img-fluid {
    max-height: 540px;
  }

  .description-title {
    color: #fff;
    font-size: 1.8rem;
    float: left;
    margin-bottom: 3px;
  }

  .description {
    color: #fff;
    float: left;
    text-align: left;
    font-size: 0.9rem;
  }
</style>
