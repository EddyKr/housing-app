<template>
  <div>
    <b-container class="bv-example-row">
        <b-row> 
            <b-col md="4" offset-md="4" sm="5" offset-sm="4">                
                
                <b-form @submit="submit()">

                    <div class="form-group">
                                            <h3 class="panel-title" style="text-align: center;">Registration</h3>
                        <label class="sr-only" for="inlineFormInputName2">Name</label>
                        <b-input class="mb-2 mr-sm-2 mb-sm-0" id="inlineFormInputName2" placeholder="E-mail" v-model="credentials.email" />
                    </div>
                    <div class="form-group">
                        <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
                        <b-input-group left="@" class="mb-2 mr-sm-2 mb-sm-0">
                            <b-input type="password" id="inlineFormInputGroupUsername2" placeholder="Password" v-model="credentials.password"  />
                        </b-input-group>
                    </div>
                    <input class="btn btn-lg btn-primary btn-block" type="submit" value="Register">
                </b-form>
            </b-col>            
        </b-row>
    </b-container>
  </div>
</template>

<script>
    import  auth  from "@/auth";
    import TopNavBar from '@/components/top-navbar.vue'

    export default {
        components: {
            TopNavBar
        },
        data() {
            return {
                credentials: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            submit() {
                var credentials = {
                    email: this.credentials.email,
                    password: this.credentials.password
                }
                auth.signup(this, credentials, '/')
            }
        }
    };
</script>

<style scoped>
    h3 {
    color: whitesmoke;

    }
</style>

