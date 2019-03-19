<template>
  <div>

    <section>
        <form @submit="submitSelection">

          <h5>Select the Date:</h5>
          <md-datepicker v-model="firstDate" md-immediately />
          <md-datepicker v-model="lastDate" md-immediately />

          <h5>Select the Shift:</h5>
          <select v-model="shift" name="shift">
            <option v-for="shift in shifts" :value="shift">{{shift}}</option>
          </select>
          <br>
          <h5>Select the Offense:</h5>
          <select v-model="offense" name="offense">
            <option v-for="offense in offenses" :value="offense">{{offense}}</option>
          </select>
          <br>
          <md-button type="submit" class="md-raised md-primary">See Crimes</md-button>
        </form>
    </section>

  </div>
</template>

<script>
import moment from 'moment';
import { eventBus } from '../../main';


export default {
  name: 'Selection',
  data() {
    return {
      firstDate: new Date(),
      lastDate: new Date(),
      shift: 'EVENING',
      shifts: ['EVENING', 'MIDNIGHT', 'DAY'],
      offense: 'THEFT/OTHER',
      offenses: ['THEFT/OTHER', 'MOTOR VEHICLE THEFT', 'BURGLARY', 'ROBBERY',
        'ASSAULT W/DANGEROUS WEAPON', 'THEFT F/AUTO', 'SEX ABUSE', 'HOMICIDE',
        'ARSON'],
    };
  },
  methods: {
    submitSelection(evt) {
      evt.preventDefault();
      this.firstDate = moment(this.firstDate).format('M/D/YYYY h:mm:ss A');
      this.lastDate = moment(this.firstDate).format('M/D/YYYY h:mm:ss A');
      const queryData = {
        firstDate: this.firstDate,
        lastDate: this.lastDate,
        shift: this.shift,
        offense: this.offense,
      };
      eventBus.$emit('dataSubmitted', queryData);
    },
  },
};
</script>

<style scoped>

section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

form {
  margin-top: 30px;
  margin-bottom: 45px;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 3px 5px #888888;
  text-align: center;
  border: 1px solid black;
}


</style>
