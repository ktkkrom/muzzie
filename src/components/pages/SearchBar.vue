<template lang="html">
  <v-container grid-list-xs,sm,md,lg,xl>
    <v-form ref="form">
      <v-container grid-list-xs,sm,md,lg,xl>
        <v-layout row wrap align-baseline>
          <v-flex xs12 md8 lg10>
            <v-text-field
            name="keyWord"
            label="Search a song"
            id="keyWord"
            v-model="keyWord"
            :rules="inputRules"
            >
            </v-text-field>
          </v-flex>
          <v-flex xs12 md4 lg2 text-center>
            <v-btn class="deep-purple--text" @click="search()">
              <span>Search</span>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      keyWord: '',
      inputRules: [
        v => v.length >= 3 || 'Minimum length is 3 characters'
      ]
    }
  },
  methods: {
    search() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('loadSongs', this.keyWord)
      }
    }
  },
  computed: {
    buttonColor() {
      if (this.keyWord.length >= 3) {
        return 'primary';
      }
      return 'disabled';
    }
  }

}
</script>

<style lang="css" scoped>
</style>
