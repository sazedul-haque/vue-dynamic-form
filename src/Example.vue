<template>
  <div class="container">
    <form @submit="formSubmit" class="mb-5 mt-5"><!-- 
      <input type="checkbox" v-model="colors" value="red">Red
      <input type="checkbox" v-model="colors" value="white">white -->
      <div class="col-md-12 mb-3" v-for="(color, index) in colors">
        <span>{{ color }}</span>
        <button class="btn btn-danger" @click.prevent="remove(index)">✕</button>
      </div>
      <div class="col-md-12 mb-3 text-right">
        <input
          class="form-control"
          type="text"
          v-model="color"
        />
        <button class="btn btn-secondary" @click.prevent="add()">Add Color</button>
      </div>

      <div class="col-md-12 text-right">
        <button class="btn btn-secondary">submit</button>
      </div>
    </form>

    <div>
      <pre>{{ output }}</pre>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        output: '',
        color: '',
        colors: ['black']
      }
        
    },
    methods: {
      formSubmit(e) {
          e.preventDefault();
            let currentObj = this;
            this.axios.post('https://jsonplaceholder.typicode.com/posts', {
              colors: this.colors,
              
            })
            .then(function (response) {
                currentObj.output = response.data;
                console.log(currentObj.output);
            })
            .catch(function (error) {
                currentObj.output = error;
                console.log(currentObj.output);
            });
        },
        remove(index) {
          this.colors.splice(index, 1)
        },
        add(color) {
          this.colors.push(this.color)
          this.color = ''
        }
    },
    mounted() {
      this.axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => (this.posts = response.data))
    },
  }
</script>