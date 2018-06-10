<template>

<b-container class="bv-example-row">
    <b-row>
        <b-col cols="6" md="4"></b-col>
            <b-col cols="6" md="4">                
                <h3 class="panel-title">Registration</h3>
                <b-form @submit="submit()">
                    <label class="sr-only" for="inlineFormInputName2">Name</label>
                    <b-input class="mb-2 mr-sm-2 mb-sm-0" id="inlineFormInputName2" placeholder="Jane Doe" v-model="credentials.email" />

                    <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
                    <b-input-group left="@" class="mb-2 mr-sm-2 mb-sm-0">
                        <b-input type="password" id="inlineFormInputGroupUsername2" placeholder="Password" v-model="credentials.password"  />
                    </b-input-group>

                    <b-button type="submit" variant="primary">Register</b-button>
                </b-form>
            </b-col>
            <b-col cols="6" md="4"></b-col>
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

