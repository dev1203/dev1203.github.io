<template>
	<div>
		<div class="on-left row landingpage">
			<div class="col landingpage__navigation text-center ">
				<div class="navigation__button">
					<q-btn @click="currentComponent='workExperience'" style="text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)" flat size="20px" label="WORK EXPERIENCE" />
				</div>
				<div class="navigation__button">
					<q-btn @click="currentComponent='aboutMe'" style="text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)" flat size="20px" label="ABOUT ME" />
				</div>
				<div class="navigation__button">
					<q-btn style="text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)" flat size="20px" label="EDUCATION" />
				</div>
				<div class="navigation__button">
					<q-btn style="text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)" flat size="20px" label="MY RESUME" />
				</div>
				<div class="navigation__button">
					<q-btn style="text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)" flat size="20px" label="PERSONAL PROJECTS" />
				</div>
			</div>
			<div class="col-9 text-center landingpage__content">
					<component :is="currentComponent"></component>
			</div>
		</div>
	</div>
</template>

<script>
import workExperience from './workExperience';
import aboutMe from './aboutMe';


export default {
	components : {
		workExperience,
		aboutMe
	},
	data() {
		return {
			currentComponent: 'workExperience' // name of your component
		}
	}
}
</script>

 <style scoped>
	.landingpage{
		height: 100vh;
		position: relative;
	}
	.landingpage__navigation{
		height: 100vh;
	}
	.landingpage__content{
		background: white;
		/* background: url('../assets/background.png'); */
		/* background-origin: initial; */
		/* background-position: center; */
		/* background-repeat: no-repeat; */
		/* background-size: cover; */
	}
	.navigation__button{
		font-family: Prompt;
		font-style: normal;
		font-weight: 300;
		font-size: 30px;
		line-height: 45px;
		margin-top: 30px;
		align-items: center;
		text-align: center;
		color: #000000;
	}
	
</style>
