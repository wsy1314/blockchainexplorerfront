var app = new Vue({
  el: '#app',
  data: {
    recentBlocks:[],
  },
  computed:{
     showRecentBlocks(){
       var now = Date.now();
       this.recentBlocks.forEach(block => {
          block.showtime = (now - block.time)/1000/60/60;
       });
       return this.recentBlocks;
     }
  },
  mounted() {
    console.log("view nounted");
    this.getBlockRecent();
  },
  methods: {
    getBlockRecent() {
      axios.get('http://localhost:8080/block/getRecentBlocks')
        .then(function (response) {
          // handle success
          console.log(response);
          app.recentBlocks = response.data;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
  }

})