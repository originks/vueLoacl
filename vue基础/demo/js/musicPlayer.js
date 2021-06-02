var musicApp = new Vue({
  el: "#musicApp",
  data: {
    query: "张学友",
    songsList: [],
    audioUrl: "",
    songsImg: "https://p2.music.126.net/8cxEF5lBfKLWbAqrF0yVmg==/109951166032666632.jpg",
  },
  methods: {
    querySongs() {
      var that = this;
      axios.get("https://autumnfish.cn/search?keywords=" + this.query).then(function (param) {
        // console.log(param.data.result.songs);
        that.songsList = param.data.result.songs;
      })
    },
    playSongs(id) {
      var that = this;
      axios.get("https://autumnfish.cn/song/url?id=" + id).then(function (param) {
        console.log(param.data.data[0].url);
        that.audioUrl = param.data.data[0].url;
      })
      axios.get("https://autumnfish.cn/song/detail?ids=" + id).then(function (param) {
        console.log(param.data.songs[0].al.picUrl);
        that.songsImg = param.data.songs[0].al.picUrl;
      })
    }
  },
})