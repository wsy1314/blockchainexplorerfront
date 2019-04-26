var app = new Vue({
  el: '#app',
  data: {
    input:'',
    recentBlocks:[],
  },
  computed:{
     showRecentBlocks(){
       var now = Date.now();
       this.recentBlocks.forEach(block => {
          block.showtime = parseInt((now - block.time)/1000/60);
          block.showSizeOnDisk = block.sizeOnDisk.toLocaleString("en");
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
    },
    handleclick(val){
      console.log(val)
    }
  }

})