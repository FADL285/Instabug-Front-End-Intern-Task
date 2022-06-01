<script>
// import Swiper core and required modules
import { Pagination, A11y, Autoplay } from "swiper";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/autoplay";

import image1 from "../assets/images/slider/products-overview.svg";
import image2 from "../assets/images/slider/products-bug-reporting.svg";
import image3 from "../assets/images/slider/products-crash-reporting.svg";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      slides: [
        { img: image1, desc: "Accelerate Your Entire Mobile team workflow" },
        {
          img: image2,
          desc: "the most comprehensive bug reporting tool for mobile apps",
        },
        { img: image3, desc: "secure crash reporting with Real-Time alerts" },
      ],
    };
  },
  setup() {
    return {
      modules: [Pagination, A11y, Autoplay],
    };
  },
};
</script>

<template>
  <div class="slider mw-100">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :pagination="{ clickable: true }"
      :autoplay="{ delay: 4000, disableOnInteraction: false }"
    >
      <swiper-slide
        v-for="slide in slides"
        :key="slide.img"
        class="text-center"
      >
        <img :src="slide.img" alt="Feature Image" />
        <p>
          {{ slide.desc }}
        </p>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style>
.swiper-pagination-bullet,
.swiper-pagination-bullet-active {
  background: var(--light-color);
}

.swiper-slide {
  margin-block-end: 3.5rem;
  padding-inline: 1rem;
  color: var(--light-color);
  text-transform: capitalize;
  font-size: var(--font-large);
}
</style>
