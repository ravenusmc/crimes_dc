<template>
  <div>
    <header>
      <div>
        <h1>Welcome to DC Crimes</h1>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>


header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 700px;
  background-image: url('../../assets/images/home.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

header div {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
}

h1 {
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  text-shadow: 1px 0 2px rgba(0, 0, 0, 0.25);
}

</style>
