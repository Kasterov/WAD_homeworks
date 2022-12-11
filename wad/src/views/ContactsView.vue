<template>
  <div class="card">
    <div class="created">
      <h1>Posts - Vue App</h1>
      <h2>Created by:</h2>
      <ul>
        <li>
          Ivan Piven: <a href="mailto:ivan.piven@ut.ee">ivan.piven@ut.ee</a>
        </li>
        <li>
          Viacheslav Kastierov:
          <a href="mailto:viacheslav.kastierov@ut.ee"
            >viacheslav.kastierov@ut.ee</a
          >
        </li>
        <li>
          Eldar Hasanov:
          <a href="mailto:eldar.hasanov.1@ut.ee">eldar.hasanov.1@ut.ee</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactsView',
};
</script>

<style scoped>
.card {
  justify-content: center;
  margin-top: 30px;
  max-width: 600px;
  min-width: 400px;
  background-color: #d4d6d6;
  margin-right: auto;
  margin-left: auto;
  border-radius: 20px;
}

h1,
h2 {
  text-align: center;
}

.created {
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
}
</style>
