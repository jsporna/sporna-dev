<template>
  <a :href="href">
    <div class="post">
      <div class="post-img">
        <img :src="image" :alt="title"/>
      </div>
      <div class="post-info">
        <h3>{{ title }}</h3>
        <small>{{ date }}</small>
        <p>{{ excerpt }}</p>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    excerpt: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false
    }
  },
};
</script>

<style>
.post {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0px;
  margin-bottom: 10px;
  padding: 10px 10px;
  border: 1px solid grey;
}

.post-img img{
  width: 450px;
  height: 300px;
  float: left
}

.post-info {
  padding-top: 20px;
  padding-left: 20px;
}

.post-info h3 {
  margin-top: 5px;
  height: 33px;
  font-size: 24px;
  font-weight: 600;
}

.post-info small {
  color: red;
  font-weight: 300;
}

.post-info p {
  width: 70%;
}

@media (min-width: 768px) {
  .post {
    grid-template-columns: 1fr 2fr;
  }
  .post-img img {
    float: right;
  }
}
</style>