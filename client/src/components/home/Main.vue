<template>
  <div class='background_area'>

    <section id="section_one">

      <div class='video_div'>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/aFjLc9HokCw"
                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;
                picture-in-picture" allowfullscreen></iframe>

        <div class='text_div'>
          <h3 class='center'>What DC Crimes is</h3>
          <p>DC Crimes is a data science project that I've built that allows people
             to look at crimes throughout the DC area. The data comes from Kaggle
             and a user can find the exact link to the data by refering to the
             readme section of this project. The project is in no way partnered
             with any law enforcement agency. It's simply a project to focus on
             learning data science.
          </p>
        </div>

      </div>

    </section>

    <section id='section_two'>

      <div class='section_two_div'>

        <div>
          <div class='about image_div'>
          </div>
          <div class='sub_div'>
            <h5>About</h5>
            <p>Head to this page to find out more about me and specifically
              why I built this page. I'm pretty sure that you'll find my
              background quite interesting!
            </p>
            <button><router-link class="nav-link" to="/Map">About</router-link></button>
          </div>
        </div>

        <div>
          <div class='about image_div'>
          </div>
          <div class='sub_div'>
            <h5>About</h5>
            <p>Head to this page to find out more about me and specifically
              why I built this page. I'm pretty sure that you'll find my
              background quite interesting!
            </p>
            <button><router-link class="nav-link" to="/Map">About</router-link></button>
          </div>
        </div>

        <div>
          <div class='about image_div'>
          </div>
          <div class='sub_div'>
            <h5>About</h5>
            <p>Head to this page to find out more about me and specifically
              why I built this page. I'm pretty sure that you'll find my
              background quite interesting!
            </p>
            <button><router-link class="nav-link" to="/Map">About</router-link></button>
          </div>
        </div>

      </div>

    </section>

  </div>
</template>

<script>
export default {
  name: 'Main',
}
</script>

<style scoped>

.center {
  text-align: center;
}

.background_area {
  background-color: #ebebeb;
}

#section_one {
  border: 2px solid #ebebeb;
}

.video_div {
  margin-top: 100px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  margin-left: 15%;
  margin-right: 15%;
}

.text_div {
  width: 75%;
  margin-left: 5%;
  margin-right: 5%;
}

/* CSS for section two */
#section_two {
  border: 2px solid #ebebeb;
}

.section_two_div {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2em;
  margin-top: 25px;
  margin-bottom: 50px;
  text-align: center;
  margin-left: 3%;
  margin-right: 3%;
}

.sub_div {
  background-color: #fff;
  padding: 10px;
}

button {
  background-color: #288dc1;
  border-color: #247eac;
  color: #fff;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 50%;
}

button a {
  color: #fff;
}

.about {
  background-image: url('../../assets/images/about.jpg');
  height: 200px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: cover;
}


</style>
