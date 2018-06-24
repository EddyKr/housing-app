<template>
 <div>
  <b-container fluid class="p-4 bg-dark">
  <div  align="center">  
    <h2 id="pageTitle">{{property.title}}</h2>
  </div>
    <b-row >
      <b-col sm="8" offset-sm="1">

        <img alt="User Pic" :src="property.image" id="property-img">
        <b-row>
            <b-col sm="6" class="property-details">
                <table class="table table-dark">
                  <tbody>
                    <tr>
                      <td>City</td>
                      <td>{{property.city}}</td>
                    </tr>
                    <tr>
                      <td>Address</td>
                      <td>{{property.address}}</td>
                    </tr>
                    <tr>
                      <td>Post code</td>
                      <td>{{property.postcode}}</td>
                    </tr>
                    <tr>
                      <td>Property type</td>
                      <td>{{type.name}}</td>
                    </tr>
                    <tr>
                      <td>Property size</td>
                      <td>{{property.size}} m²</td>
                    </tr>
                    <tr>
                      <td>Minimal renting period</td>
                      <td>{{property.minimum}} months</td>
                    </tr>
                    <tr>
                     <td>Available from</td>
                      <td>{{property.available}}</td>
                    </tr>
                    <tr>
                      <td>Rent per month</td>
                      <td>{{property.price}}€</td>
                    </tr>
                    <tr>
                      <td>Deposit</td>
                      <td>{{property.price}}€</td>
                    </tr>
                  </tbody>
                </table>
            </b-col>
            <b-col sm="6">
                <span class="description-title">Description</span>
                <div class="description" v-html="property.description">
                </div>
            </b-col>
        </b-row>
              <modal
                v-show="isModalVisible"
                    @close="closeModal"
              />
      </b-col>

      <b-col sm="2" class="owner-info">
        <h1>Contact</h1>

        <div  align="center landlord">
            <img alt="User Avatar" :src="avatar" style="width: 30%;">
            <p>{{user.first_name}}</p>
        </div>


        <b-container class="text-center information-container">
            <span class="information-label information">Phone: </span> <span class="information-value information">{{user.phone}}</span>
        </b-container>
        <b-container class="text-center information-container">
            <span class="information-label information">Email: </span> <span class="information-value information">{{user.email}}</span>
        </b-container>

        <b-container class="text-center contact-actions">
            <input id="meeting" type="date" v-model="meeting_date"/>
            <b-btn variant="btn btn-success" class="mb-3" v-on:click="scheduleMeeting()">Schedule a viewing</b-btn>
        </b-container>
        <b-container class="text-center contact-actions">
            <!-- <a href="" class="btn btn-danger">Request more details</a> -->
        </b-container>
      </b-col>
    </b-row>
  </b-container>
 </div>
</template>

<script>
import ApiHelper from '../apiHelper.js'
import modal from '../components/modal.vue';

export default {
  components: {
    modal
  },
  data(){
      return {
          property: [],
          user: [],
          type: [],
          meeting_date: '',
          isModalVisible: false,
          slide: 0,
          sliding: null,
          avatar:require('../assets/profile.png')
      }
  },
  created: function() {
    var self = this;
    var data = {
        post_id: this.$route.params.id
    };
    this.getPostInfo(data);
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    },
    getPostInfo:function(data) {
        ApiHelper.apiPost(this, data, 'posts/view').then(function(response){
          this.property = response.body.data.post;
          this.user = response.body.data.post.user;
          this.type = response.body.data.post.type;
          console.log(response.body.data.post);
        });
    },
    scheduleMeeting:function() {
        console.log(this.property.id);
        console.log(this.meeting_date);

        if (this.meeting_date == ''){
            return;
        }

        let payload = {
            post_id: this.property.id,
            meeting_time: this.meeting_date
        }

        ApiHelper.apiPost(this, payload, 'meetings/schedule').then(function(response){
            if (response.body.success) {
                this.showModal();
            }
        });
    },
    showModal() {
        this.isModalVisible = true;
    },
    closeModal() {
        this.isModalVisible = false;
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

  #property-img {
    width: 100%;
    max-height: 560px;
    margin-bottom: 10px;
  }
</style>
