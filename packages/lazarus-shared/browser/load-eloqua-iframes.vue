<template>
  <div class="lazarus-load-eloqua-iframes" :data-selector="selector" style="display: none;" />
</template>

<script>
export default {
  props: {
    selector: {
      type: String,
      default: '.penton-eloqua-form',
    },
  },

  created() {
    const elements = document.querySelectorAll(this.selector);
    Array.prototype.forEach.call(elements, (element) => {
      const qs = window.location.search.substring(1);
      const src = element.getAttribute('data-src').includes('?') ? `${element.getAttribute('data-src')}&${qs}` : `${element.getAttribute('data-src')}?${qs}`;
      const hasProcessed = element.getAttribute('data-has-processed');
      if (!hasProcessed && src) {
        const iframe = document.createElement('iframe');
        iframe.setAttribute('data-src', src);
        iframe.setAttribute('class', 'lazyload eloqua-iframe');
        element.setAttribute('data-has-processed', 'true');
        element.appendChild(iframe);
      }
    });
  },
};
</script>
