<template>

<b-container class="bv-example-row">


    <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->

	    <b-row>
        <b-col cols="6" md="4"></b-col>
        <b-col cols="6" md="4">
			
			<h3 class="panel-title">Log In</h3>
				<form accept-charset="UTF-8" role="form">
                    <fieldset>
			    	  	<div class="form-group">
			    		    <input class="form-control" placeholder="E-mail" name="email" type="text">
			    		</div>
			    		<div class="form-group">
			    			<input class="form-control" placeholder="Password" name="password" type="password" value="">
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
        <b-col cols="6" md="4"></b-col>
    </b-row>
	 


</b-container>





</template>

<script>
export default {
  
}
</script>

<style scoped>
h3{
	color: whitesmoke;
	margin-left: 40%;
}
    #login {

        

 
    }
</style>