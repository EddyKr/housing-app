<template>
<b-container class="bg-white">
    <b-row>
        <b-col cols="6">
            <b-form >
                <b-form-group
                                label="Property type:"
                                label-for="house-type">
                    <b-form-select id="house-type">
                            <option v-for="type in house_types" :key="type.id">{{type.name}}</option>
                    </b-form-select>
                </b-form-group>
                <b-form-group id=""
                                label="Title:"
                                label-for="title">
                    <b-form-input id="title"
                                type="text"
                                v-model="new_property.title"                           
                                >
                    </b-form-input>
                </b-form-group>
                <b-form-group id=""
                                label="Address:"
                                label-for="address">
                    <b-form-input id="address"
                                type="text"
                                v-model="new_property.address">
                    </b-form-input>
                </b-form-group>
                <b-form-group id=""
                                label="Post code:"
                                label-for="post-code">
                    <b-form-input id="post-code"
                                type="text"
                                v-model="new_property.post_code">
                    </b-form-input>
                </b-form-group>
                <b-form-group id=""
                                label="City:"
                                label-for="city">
                    <b-form-input id="city"
                                type="text"
                                v-model="new_property.city">
                    </b-form-input>
                </b-form-group>
                
                <b-form-group id=""
                                label="Description:"
                                label-for="description">
                    <b-form-textarea id="description"
                        placeholder=""
                        :rows="3"
                        :max-rows="6"
                        v-model="new_property.description">
                    </b-form-textarea>
                </b-form-group>
                <b-form-group id=""
                                label="Price:"
                                label-for="price">
                    <b-form-input id="price"
                                type="text"
                                v-model="new_property.price">
                    </b-form-input>
                </b-form-group>
                <b-form-group>
                    <b-form-checkbox v-model="new_property.incl" class="mb-2 mr-sm-2 mb-sm-0">Inclusive</b-form-checkbox>
                    <b-form-checkbox v-model="new_property.furnished" class="mb-2 mr-sm-2 mb-sm-0">Furnished</b-form-checkbox>
                </b-form-group>
                <b-form-group id=""
                                label="Bedrooms:"
                                label-for="bedrooms">
                    <b-form-input id="bedrooms"
                                type="text"
                                v-model="new_property.bedrooms">
                    </b-form-input>
                </b-form-group>
                <b-form-group id=""
                                label="Minimum stay (in months):"
                                label-for="min-stay">
                    <b-form-input id="min-stay"
                                type="text"
                                v-model="new_property.minimum">
                    </b-form-input>
                </b-form-group>
                
                <b-form-group id=""
                                label="Image:"
                                label-for="house-image">
                    <b-form-input id="house-image"
                                type="text"
                                v-model="new_property.image">
                    </b-form-input>
                </b-form-group>
                <b-form-group id=""
                                label="Size:"
                                label-for="house-size">
                    <b-form-input id="house-size"
                                type="text"
                                v-model="new_property.size">
                    </b-form-input>
                </b-form-group>
                <b-form-group id=""
                                label="Available:"
                                label-for="available">
                    <b-form-input id="available"
                                type="date"
                                v-model="new_property.available">
                    </b-form-input>
                </b-form-group>
                <button @click.prevent="createPost()">Submit</button>
            </b-form>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
import ApiHelper from '../apiHelper.js'
export default {
    data(){
        return{
            date: '',
            new_property: [{
                type_id: 1,
                title: '',
                address: '',
                post_code: '',
                city: '',
                description: '',
                price: '',
                incl: false,
                bedrooms: '',
                minimum: '',
                image: '',
                room_size: '',
                available: '',
                furnished: '',
            }],
            house_types: []
        }
    },
    methods:{
        getTypes:function(){
            let self = this
            ApiHelper.apiPost(this, null, 'types').then(function(response){
                console.log(response.data.data.types)
                self.house_types = response.data.data.types;
            })
        },
        createPost:function(){
            let data = {
                type_id: 1,
                title: this.new_property.title,
                address: this.new_property.address,
                post_code: this.new_property.post_code,
                city: this.new_property.city,
                description: this.new_property.description,
                price: this.new_property.price,
                incl: this.new_property.incl,
                bedrooms: this.new_property.bedrooms,
                minimum: this.new_property.minimum,
                image: this.new_property.image,
                size: this.new_property.room_size,
                available: this.new_property.available,
                furnished: this.new_property.furnished
                }
            console.log(data);
             ApiHelper.apiPost(this,data,'posts/add').then(function(response){
                console.log(response);
             })
        }
    },
    created:function(){
        this.getTypes();
    }
}
</script>

<style>

</style>
