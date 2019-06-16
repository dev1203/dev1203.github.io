<template>
  <LandingPage></LandingPage>
</template>

<script>
import LandingPage from './components/landingPage';

export default {
  name: 'LayoutDefault',

  components: {
    LandingPage
  },

  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  }
}
</script>

<style>
body{
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
}
.container{
    margin-left: 10%;
    margin-right: 10%;
}
</style>
