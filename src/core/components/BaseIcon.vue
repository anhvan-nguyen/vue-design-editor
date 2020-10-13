<template>
   <span
    :class="['mdi', `mdi-${name}`, spin ? 'mdi-spin' : undefined]"
    :role="role"
    :aria-label="ariaLabel"
  >
    <svg
      :fill="color"
      :width="width || size"
      :height="height || size"
      :viewBox="viewBox"
      :xmlns="xmlns"
    >
      <title v-if="title">{{ title }}</title>
      <path :d="svgIcon" />
    </svg>
  </span>
</template>

<script lang="ts">
import { computed } from 'vue';
import icons from '../composition/useIcons';

export default {
  setup(props: any) {
    const svgIcon = computed(() => icons[props.name]);

    return { svgIcon };
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    width: {
      type: [Number, String],
      default: null,
    },
    height: {
      type: [Number, String],
      default: null,
    },
    size: {
      type: [Number, String],
      default: 20,
    },
    viewBox: {
      type: [String],
      default: '0 0 24 24',
    },
    xmlns: {
      type: String,
      default: 'http://www.w3.org/2000/svg',
    },
    ariaLabel: {
      type: String,
      default: 'Material Design Icons',
    },
    role: {
      type: String,
      default: 'img',
    },
    title: {
      type: String,
      required: false,
    },
    spin: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'currentColor',
    },
  },
};
</script>

<style lang="scss">
.mdi > svg {
  vertical-align: middle;
}

.mdi.mdi-spin > svg {
  -webkit-animation: mdi-spin 2s infinite linear;
     -moz-animation: mdi-spin 2s infinite linear;
          animation: mdi-spin 2s infinite linear;
}

@-webkit-keyframes mdi-spin {
  0% {
      -webkit-transform: rotate(0deg);
         -moz-transform: rotate(0deg);
              transform: rotate(0deg);
  }
  100% {
      -webkit-transform: rotate(360deg);
         -moz-transform: rotate(360deg);
              transform: rotate(360deg);
  }
}
@keyframes mdi-spin {
  0% {
      -webkit-transform: rotate(0deg);
         -moz-transform: rotate(0deg);
              transform: rotate(0deg);
  }
  100% {
      -webkit-transform: rotate(360deg);
         -moz-transform: rotate(360deg);
              transform: rotate(360deg);
  }
}
</style>
