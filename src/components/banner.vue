<template>
    <b-container>            
        <div class="row">
            <b-container class="bv-example-row">
                <b-row class="text-center">
                    <b-col></b-col>
                    <b-col cols="8">
                        <h2>Welcome at YourHousing</h2>
                        <h4>Feel free to explore available listnings or post one yourself</h4>
                    </b-col>
                    <b-col></b-col>
                </b-row>
                <b-row class="text-center">
                    <b-col></b-col>
                    <b-col sm="12" md="12" lg="8" xl="8">
                        <input type="text" class="form-control" v-model="phrase"  placeholder="City/Address/etc..." >
                    </b-col>
                    <b-col sm="12" md="12" lg="2" xl="2">
                        <span class="input-group-addon">
                            <b-button class="btnSearch" type="submit" v-on:click="performSearch()">
                                Search
                            </b-button>  
                        </span>
                    </b-col>
                    <b-col></b-col>
                </b-row>
            </b-container><!--bv-example-row-->
        </div><!--row-->
    </b-container>
</template>

<script>
import ApiHelper from '../apiHelper.js'

    export default {
       data() {
        return {
            phrase: ''
        }
       },
       methods: {
          performSearch:function() {
            this.$router.push({name:'Search', params:{phrase: this.phrase}});
            location.reload();
          }
       }
    }
</script>

<style scoped>
    h2,h4{
            color: whitesmoke;
            font-style: italic;
    }

    .btnSearch{
        width: 150px;
    }  
</style>




