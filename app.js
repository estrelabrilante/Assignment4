const app = Vue.createApp({
  data() {
    return {
      //store input whatever user enters
      inputClass: "",
      paragraphIsVisible: true,
      inputBackgroundColor: "",
    };
  },
  methods: {
    toggleParagraphVisibility() {
      this.paragraphIsVisible = !this.paragraphIsVisible;
    },
  },
  computed: {
    paraClass() {
      return {
        user1: this.inputClass === "user1",
        user2: this.inputClass === "user2",
        visible: this.paragraphIsVisible,
        hidden: !this.paragraphIsVisible,
      };
    },
  },
});
app.mount("#assignment");
