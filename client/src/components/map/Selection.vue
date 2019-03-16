<template>
  <div>

    <section>
      <p>Please select the shift</p>
        <form @submit="submitSelection">

          <md-datepicker v-model="firstDate" md-immediately />

          <select v-model="shift" name="shift">
            <option v-for="shift in shifts" :value="shift">{{shift}}</option>
          </select>

          <select v-model="offense" name="offense">
            <option v-for="offense in offenses" :value="offense">{{offense}}</option>
          </select>

          <button type="submit" variant="primary">Submit</button>
        </form>
    </section>

  </div>
</template>

<script>
import { eventBus } from '../../main.js';

export default {
  name: 'Selection',
  data() {
    return {
      shift: '',
      shifts: ['EVENING', 'MIDNIGHT', 'DAY'],
      offense: '',
      offenses: ['THEFT/OTHER','MOTOR VEHICLE THEFT','BURGLARY','ROBBERY',
                'ASSAULT W/DANGEROUS WEAPON','THEFT F/AUTO','SEX ABUSE','HOMICIDE',
                'ARSON']
    }
  },
  methods: {
    submitSelection(evt) {
      evt.preventDefault();
      const queryData = {
        shift: this.shift,
        offense: this.offense
      };
      // this.$emit('dataSubmitted', queryData)
      eventBus.$emit('dataSubmitted', queryData)
    }
  },
}
</script>

<style scoped>

section {
  border: 2px solid black;
}

</style>
