<template>
  <b-container>
    <b-row>
      <b-col>
        <h1>Create a new experiment</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h4>Title</h4>
        <b-input
          autofocus
          :state="isTitleValid"
          placeholder="Experiment title"
          v-model="title"
        ></b-input>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-group
          title="Description"
          :description="`${description.length}/${maxDescriptionLength}`"
        >
          <b-textarea
            rows="8"
            :state="isDescriptionValid()"
            placeholder="Give a brief description of your experiment"
            v-model="description"
          ></b-textarea>
          <b-form-invalid-feedback>
            {{ descriptionInvalidMessage }}
          </b-form-invalid-feedback>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="auto">
        <b-button @click="save">Create Experiment</b-button>
      </b-col>
      <b-col cols="auto">
        <b-button to="/">Cancel</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "CreateNewExperiment",

  data() {
    return {
      title: "",
      description: "",
      descriptionInvalidMessage: "",
      minDescriptionLength: 10,
      maxDescriptionLength: 500,
    };
  },

  computed: {
    isTitleValid() {
      if (this.title.length === 0) return null;

      return this.title.length >= 10 && this.title.length < 20;
    },
  },

  methods: {
    async save() {
      this.$bvToast.toast("New experiment created", {
        title: "Application",
        autoHideDelay: 2000,
        appendToast: false,
      });
      console.log({ title: this.title, description: this.description });
    },

    isDescriptionValid() {
      if (this.description.length === 0) return null;

      if (this.description.length < this.minDescriptionLength) {
        this.descriptionInvalidMessage = `Descrição precisa ter ao menos ${this.minDescriptionLength} caracteres`;
        return false;
      } else if (this.description.length > this.maxDescriptionLength) {
        this.descriptionInvalidMessage = `Descrição precisa ter no máximo ${this.maxDescriptionLength} caracteres`;
        return false;
      }

      return true;
    },
  },
};
</script>

<style></style>
