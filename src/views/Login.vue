<template>
	<b-container class="bv-example-row">
		<b-row>		
			<b-col md="4" offset-md="4" sm="5" offset-sm="4">			
				<h3 class="panel-title" style="text-align: center;">Log In</h3>
					<form @submit="login()" accept-charset="UTF-8" role="form">
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
							<input class="btn btn-lg btn-success btn-block" type="submit" value="Login">
						</fieldset>
					</form>  	  
			</b-col>		
		</b-row>
	</b-container>
</template>

<script>
  import auth from '@/auth'

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