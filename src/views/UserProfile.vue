<template>
  <b-container>
    <b-row>
      <b-col cols="auto">
        <img
          class="user-profile"
          src="../assets/logo.png"
          alt="Imagem Perfil"
        />
      </b-col>
      <b-col cols="auto">
        <b-row no-gutters>
          <b-col>
            <h4>Joana Vicente</h4>
          </b-col>
        </b-row>
        <b-row no-gutters>
          <b-col> <small>1 followers</small>*<small>0 following</small> </b-col>
        </b-row>
        <b-row no-gutters>
          <b-col>
            <b-button>
              <b-icon-pencil-square></b-icon-pencil-square>
              Edit Profile
            </b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-button to="/create-new-experiment">Create Experiment</b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-table
          :per-page="perPage"
          :current-page="currentPage"
          :fields="fields"
          :items="experimentsInProgress"
          striped
          borderless
          caption="Experiments in progress"
          caption-top
        >
          <template #cell(authors)="data">
            {{ data.value.join(", ") }}
          </template>
        </b-table>
        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          :current-page="currentPage"
          aria-controls="my-table"
        ></b-pagination>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "UserProfile",

  data() {
    return {
      currentPage: 1,
      perPage: 10,

      fields: [
        { key: "title", label: "Título" },
        { key: "authors", label: "Autores" },
        { key: "lastUpdated", label: "Última atualização" },
      ],

      experimentsInProgress: [
        {
          title: "Gamification and Flow Experience",
          authors: ["Joao Vicente"],
          lastUpdated: new Date().toLocaleDateString(),
        },
        {
          title: "Gamification and Flow Experience",
          authors: ["Joao Vicente", "João Vicente 2"],
          lastUpdated: new Date().toLocaleDateString(),
        },
        {
          title: "Gamification and Flow Experience",
          authors: ["Joao Vicente", "João Vicente 2"],
          lastUpdated: new Date().toLocaleDateString(),
        },
        {
          title: "Gamification and Flow Experience",
          authors: ["Joao Vicente", "João Vicente 2"],
          lastUpdated: new Date().toLocaleDateString(),
        },
        {
          title: "Gamification and Flow Experience",
          authors: ["Joao Vicente", "João Vicente 2"],
          lastUpdated: new Date().toLocaleDateString(),
        },
        {
          title: "Gamification and Flow Experience",
          authors: ["Joao Vicente", "João Vicente 2"],
          lastUpdated: new Date().toLocaleDateString(),
        },
        {
          title: "Gamification and Flow Experience",
          authors: ["Joao Vicente", "João Vicente 2"],
          lastUpdated: new Date().toLocaleDateString(),
        },
        {
          title: "Gamification and Flow Experience",
          authors: ["Joao Vicente", "João Vicente 2"],
          lastUpdated: new Date().toLocaleDateString(),
        },
        {
          title: "Gamification and Flow Experience",
          authors: ["Joao Vicente", "João Vicente 2"],
          lastUpdated: new Date().toLocaleDateString(),
        },
        {
          title: "Gamification and Flow Experience",
          authors: ["Joao Vicente", "João Vicente 2"],
          lastUpdated: new Date().toLocaleDateString(),
        },
        {
          title: "Gamification and Flow Experience",
          authors: ["Joao Vicente", "João Vicente 2"],
          lastUpdated: new Date().toLocaleDateString(),
        },
        {
          title: "Gamification and Flow Experience",
          authors: ["Joao Vicente", "João Vicente 2"],
          lastUpdated: new Date().toLocaleDateString(),
        },
        {
          title: "Gamification and Flow Experience",
          authors: ["Joao Vicente", "João Vicente 2"],
          lastUpdated: new Date().toLocaleDateString(),
        },
        {
          title: "Gamification and Flow Experience",
          authors: ["Joao Vicente", "João Vicente 2"],
          lastUpdated: new Date().toLocaleDateString(),
        },
        {
          title: "Gamification and Flow Experience",
          authors: ["Joao Vicente", "João Vicente 2"],
          lastUpdated: new Date().toLocaleDateString(),
        },
        {
          title: "Gamification and Flow Experience",
          authors: ["Joao Vicente", "João Vicente 2"],
          lastUpdated: new Date().toLocaleDateString(),
        },
        {
          title: "Gamification and Flow Experience",
          authors: ["Joao Vicente", "João Vicente 2"],
          lastUpdated: new Date().toLocaleDateString(),
        },
        {
          title: "Gamification and Flow Experience",
          authors: ["Joao Vicente", "João Vicente 2"],
          lastUpdated: new Date().toLocaleDateString(),
        },
        {
          title: "Gamification and Flow Experience",
          authors: ["Joao Vicente", "João Vicente 2"],
          lastUpdated: new Date().toLocaleDateString(),
        },
        {
          title: "Gamification and Flow Experience",
          authors: ["Joao Vicente", "João Vicente 2"],
          lastUpdated: new Date().toLocaleDateString(),
        },
        {
          title: "Gamification and Flow Experience",
          authors: ["Joao Vicente", "João Vicente 2"],
          lastUpdated: new Date().toLocaleDateString(),
        },
        {
          title: "Gamification and Flow Experience",
          authors: ["Joao Vicente", "João Vicente 2"],
          lastUpdated: new Date().toLocaleDateString(),
        },
        {
          title: "Gamification and Flow Experience",
          authors: ["Joao Vicente", "João Vicente 2"],
          lastUpdated: new Date().toLocaleDateString(),
        },
        {
          title: "Gamification and Flow Experience",
          authors: ["Joao Vicente", "João Vicente 2"],
          lastUpdated: new Date().toLocaleDateString(),
        },
        {
          title: "Gamification and Flow Experience",
          authors: ["Joao Vicente", "João Vicente 2"],
          lastUpdated: new Date().toLocaleDateString(),
        },
        {
          title: "Gamification and Flow Experience",
          authors: ["Joao Vicente", "João Vicente 2"],
          lastUpdated: new Date().toLocaleDateString(),
        },
        {
          title: "Gamification and Flow Experience",
          authors: ["Joao Vicente", "João Vicente 2"],
          lastUpdated: new Date().toLocaleDateString(),
        },
        {
          title: "Gamification and Flow Experience",
          authors: ["Joao Vicente", "João Vicente 2"],
          lastUpdated: new Date().toLocaleDateString(),
        },
        {
          title: "Gamification and Flow Experience",
          authors: ["Joao Vicente", "João Vicente 2"],
          lastUpdated: new Date().toLocaleDateString(),
        },
        {
          title: "Gamification and Flow Experience",
          authors: ["Joao Vicente", "João Vicente 2"],
          lastUpdated: new Date().toLocaleDateString(),
        },
        {
          title: "Gamification and Flow Experience",
          authors: ["Joao Vicente", "João Vicente 2"],
          lastUpdated: new Date().toLocaleDateString(),
        },
        {
          title: "Gamification and Flow Experience",
          authors: ["Joao Vicente", "João Vicente 2"],
          lastUpdated: new Date().toLocaleDateString(),
        },
        {
          title: "Gamification and Flow Experience",
          authors: ["Joao Vicente", "João Vicente 2"],
          lastUpdated: new Date().toLocaleDateString(),
        },
        {
          title: "Gamification and Flow Experience",
          authors: ["Joao Vicente", "João Vicente 2"],
          lastUpdated: new Date().toLocaleDateString(),
        },
      ],
    };
  },

  computed: {
    rows() {
      return this.experimentsInProgress.length;
    },
  },
};
</script>

<style>
img.user-profile {
  width: 100px;
  height: 100px;
  object-fit: contain;
}
</style>
