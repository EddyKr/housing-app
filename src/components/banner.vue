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
                        <input type="text" class="form-control"  placeholder="City/Address/etc..." >
                    </b-col>
                    <b-col sm="12" md="12" lg="2" xl="2">
                        <span class="input-group-addon">
                            <b-button id="btnS" type="submit">
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
    export default {           
    }
</script>

<style scoped>
    h2,h4{
            color: whitesmoke;
            font-style: italic;
    }

    #btnS{
        width: 150px;
    }  
</style>




