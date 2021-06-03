var musicApp = new Vue({
  el: "#musicApp",
  data: {
    query: "张学友",
    songsList: [],
    audioUrl: "",
    songsImg: "https://p2.music.126.net/8cxEF5lBfKLWbAqrF0yVmg==/109951166032666632.jpg",
    commentList: [],
    mvUrl: "",
    mvshow: false
  },
  methods: {
    querySongs() {
      var that = this;
      axios.get("https://autumnfish.cn/search?keywords=" + this.query).then(function (param) {
        that.songsList = param.data.result.songs;

      })
    },
    playSongs(id) {
      var that = this;
      axios.get("https://autumnfish.cn/song/url?id=" + id).then(function (param) {
        that.audioUrl = param.data.data[0].url;

      })
      axios.get("https://autumnfish.cn/song/detail?ids=" + id).then(function (param) {
        that.songsImg = param.data.songs[0].al.picUrl;
      })
      axios.get("https://autumnfish.cn/comment/hot?type=0&id=" + id).then(function (param) {
        that.commentList = param.data.hotComments;
      })
    },
    playMV(mvid) {
      var that = this;
      axios.get("https://autumnfish.cn/mv/url?id=" + mvid).then(function (param) {
        that.mvUrl = param.data.data.url;
        that.mvshow = true;
      })
    },
    returnMainPanel() {
      this.mvshow = false;
    }
  },
})