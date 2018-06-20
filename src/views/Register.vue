<template>
    <b-container class="bv-example-row">
        <b-row>
            <b-col></b-col>
            <b-col sm="6" md="6" lg="5" xl="4">                
                <h3 class="panel-title">Registration</h3>
                <b-form @submit="submit()">
                    <div class="form-group">
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
            <b-col></b-col>
            
        </b-row>
    </b-container>
</template>

<script>
    import  auth  from "@/auth";

    export default {
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
    margin-left: 30%;
    }
</style>

