<template>
  <div>
    <div class="row" id="rowTiles">
        <div v-for="prop in properties" v-bind:key="prop.id" class="col-md-4">
            <figure class="card card-product">
                <div class="img-wrap"><img :src="prop.image">
                </div>
                <figcaption class="info-wrap">
                        <h5 class="title">{{prop.address}}, {{prop.city}}</h5>
                        <div v-html="trimString(prop.description)"  class="desc"></div>
                    <router-link :to="{name:'post', params:{id: prop.id}}">View property</router-link>
                </figcaption>
            </figure>
        </div>
    </div>

  </div>
</template>


<script>
import ApiHelper from '../apiHelper.js'
	export default {    
	    data(){
				return {
                    image:[''],
                    properties: []
				}
            },
        methods:{
            getProperties:function() {
                let self = this
                 ApiHelper.apiPost(this, null, 'posts').then(function(response){
                    self.properties = response.body.data.posts;
                    console.log(response.body.data.posts);
                    });
            },
            trimString:function(data) {
                let result = data.substring(0,100);
                return result;
            }
        },
        created:function() {
            this.getProperties();
        }
	}
</script>

<style>
</style>

