import "./style.css";

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

app.directive("tooltip", {
  mounted(el, binding) {
    let tooltip: HTMLSpanElement | null = null;

    const showTooltip = () => {
      if (!tooltip) {
        tooltip = document.createElement("span");
        tooltip.classList.add(
          "text-xs",
          "bg-black",
          "text-white",
          "px-2",
          "py-1",
          "rounded-md",
          "absolute",
          "-bottom-8",
          "z-10",
          "left-1/2",
          "-translate-x-1/2"
        );
        tooltip.innerHTML = binding.value;
        el.parentNode.insertBefore(tooltip, el);
      }
    };

    const hideTooltip = () => {
      if (tooltip) {
        tooltip.remove();
        tooltip = null;
      }
    };

    el.addEventListener("mouseenter", showTooltip);
    el.addEventListener("mouseleave", hideTooltip);
  },
});

app.mount("#app");
