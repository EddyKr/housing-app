<template>
  <div>
    <top-nav-bar/>
	<b-container class="bv-example-row">
		<b-row>		
			<b-col md="4" offset-md="4" sm="5" offset-sm="4">			
				<h3 class="panel-title" style="text-align: center;">Log In</h3>
					<div>
						<fieldset>
							<div class="form-group">
								<input class="form-control" v-model="credentials.email" placeholder="E-mail" name="email" type="text">
							</div>
							<div class="form-group">
								<input class="form-control" v-model="credentials.password" placeholder="Password" name="password" type="password" value="">
							</div>
							<div class="checkbox">
								<label>
									<input name="remember" type="checkbox" value="Remember Me"> Remember Me
								</label>
							</div>
							<router-link to="/dashboard" class="btn btn-lg btn-success btn-block">Login</router-link>
						</fieldset>
					</div>  	  
			</b-col>		
		</b-row>
	</b-container>
  </div>
</template>

<script>
  import auth from '@/auth'

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
				login() {
					auth.login(this, this.credentials, '/');
				}
			}  
	}
</script>

<style scoped>
	h3{
		color: whitesmoke;
	}
</style>