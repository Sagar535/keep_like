<template>
  <v-container fluid>
    <!--<v-slide-y-transition mode="out-in">-->
    <v-layout row>
      <v-layout column align-center>
        <v-input class="input">
          <input
            class="title"
            type="text"
            placeholder="Title"
            v-if="add"
            v-model="current_title"
          >
          <textarea
            placeholder="Take a note"
            v-model="current_text"
            v-on:click="addText"
            style="width: 100%"
          ></textarea>
        </v-input>
      </v-layout>
    </v-layout>
    <v-layout
      row
      v-on:click="addText"
      v-on:click_outside="removeAdd"
    >
      <v-layout row>
        <v-layout column align-center>
          <v-btn
            v-if="add"
            v-on:click="addNote"
          >
            Add
          </v-btn>
        </v-layout>
      </v-layout>

    </v-layout>

    <v-layout>
      <v-card
        height = "200px"
        width = "150px"
        v-for="(note, index) in notes"
        :key = index
      >
        <h2>{{ note.title }}</h2>
        <p>{{note.text}}</p>
      </v-card>
    </v-layout>

    <!--</v-slide-y-transition>-->
  </v-container>
</template>

<script>
  export default {
    directives: {
      click_outside: {
        bind () {
          this.event = event => this.vm.$emit(this.expression, event)
          this.el.addEventListener('click', this.stopProp)
          document.body.addEventListener('click', this.event)
        },
        unbind() {
          this.el.removeEventListener('click', this.stopProp)
          document.body.removeEventListener('click', this.event)
        },

        stopProp(event) { event.stopPropagation() }
      }
    },
    data() {
      return {
        current_text: '',
        current_title: '',
        add: false,

        notes: []
      };
    },
    methods: {
      addText: function() {
          this.add = true;
        },

      removeAdd: function () {
        this.add = false;
      },

      addNote: function () {
        if (this.current_text.trim().length>0) {
          this.notes.push({
            text:this.current_text,
            title: this.current_title
          });
        }

        this.current_text = '';
        this.current_title = '';

        console.log(this.notes);
      }

    },
    name: 'Keep-like'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .input {
    background-color: lightyellow;
    height: 50px;
    width: 50%;
  }
</style>
