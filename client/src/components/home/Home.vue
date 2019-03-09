<template>
  <div>
    <Header/>
    <Main/>
  </div>
</template>

<script>
import Header from '@/components/home/Header';
import Main from '@/components/home/Main';

export default {
  name: 'Home',
  components: {
    Header,
    Main,
  },
};
</script>
