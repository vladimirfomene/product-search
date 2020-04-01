const app = new Vue({
  el: "#app",
  data: {
    results: [],
    query: "",
    searchDebounce: null
  },
  async created() {
    this.results = await this.search(); // Search for default term
  },
  methods: {
    //make an axios request to the server with the current search query
    search() {
      console.log("search was called");
      axios
        .get("http://localhost:3000/search?searchterm=" + this.query)
        .then(response => {
          clearTimeout(this.searchDebounce);
          this.searchDebounce = setTimeout(async () => {
            this.results = await response.data.hits.hits;
            console.log(this.results);
          }, 500);
        });
    }
  },

  watch: {
    // watch for change in the query string and recall the search method
    query() {
      this.search();
    }
  }
});
