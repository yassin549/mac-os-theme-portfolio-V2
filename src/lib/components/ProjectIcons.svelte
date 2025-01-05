<script lang="ts">
  export let iconName: string;
</script>

{#if iconName === "javascript"}
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
    <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/>
  </svg>
{:else if iconName === "python"}
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
    <path d="M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"/>
  </svg>
{:else if iconName === "react"}
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
  </svg>
{:else if iconName === "vue"}
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.027 3h-4.017L12 8.33 8.99 3H4.973L12 18l7.027-15zM12 13.1L8.008 5.12h2.518L12 7.85l1.474-2.73h2.518L12 13.1z"/>
  </svg>
{:else if iconName === "angular"}
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.5l8.84 3.15-1.34 11.7L12 21.5l-7.5-4.15-1.34-11.7L12 2.5z M12 4.5L5 7l1.1 9.3 5.9 3.3 5.9-3.3L19 7l-7-2.5z"/>
  </svg>
{:else if iconName === "svelte"}
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.7L20 9v6l-8 4-8-4V9l8-4.3z"/>
  </svg>
{:else if iconName === "go"}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    version="1.1"
    id="Layer_1"
    x="0px"
    y="0px"
    viewBox="0 0 254.5 225"
    style="enable-background:new 0 0 254.5 225;"
    xml:space="preserve"
  >
    <style type="text/css">
      .st0 {
        fill: #2dbcaf;
      }
      .st1 {
        fill: #5dc9e1;
      }
      .st2 {
        fill: #fddd00;
      }
      .st3 {
        fill: #ce3262;
      }
      .st4 {
        fill: #00acd7;
      }
      .st5 {
        fill: #ffffff;
      }
    </style>
    <g>
      <g>
        <g>
          <g>
            <path
              class="st4"
              d="M40.2,101.1c-0.4,0-0.5-0.2-0.3-0.5l2.1-2.7c0.2-0.3,0.7-0.5,1.1-0.5l35.7,0c0.4,0,0.5,0.3,0.3,0.6      l-1.7,2.6c-0.2,0.3-0.7,0.6-1,0.6L40.2,101.1z"
            />
          </g>
        </g>
      </g>
      <g>
        <g>
          <g>
            <path
              class="st4"
              d="M25.1,110.3c-0.4,0-0.5-0.2-0.3-0.5l2.1-2.7c0.2-0.3,0.7-0.5,1.1-0.5l45.6,0c0.4,0,0.6,0.3,0.5,0.6      l-0.8,2.4c-0.1,0.4-0.5,0.6-0.9,0.6L25.1,110.3z"
            />
          </g>
        </g>
      </g>
      <g>
        <g>
          <g>
            <path
              class="st4"
              d="M49.3,119.5c-0.4,0-0.5-0.3-0.3-0.6l1.4-2.5c0.2-0.3,0.6-0.6,1-0.6l20,0c0.4,0,0.6,0.3,0.6,0.7l-0.2,2.4      c0,0.4-0.4,0.7-0.7,0.7L49.3,119.5z"
            />
          </g>
        </g>
      </g>
      <g>
        <g id="CXHf1q_3_">
          <g>
            <g>
              <path
                class="st4"
                d="M153.1,99.3c-6.3,1.6-10.6,2.8-16.8,4.4c-1.5,0.4-1.6,0.5-2.9-1c-1.5-1.7-2.6-2.8-4.7-3.8       c-6.3-3.1-12.4-2.2-18.1,1.5c-6.8,4.4-10.3,10.9-10.2,19c0.1,8,5.6,14.6,13.5,15.7c6.8,0.9,12.5-1.5,17-6.6       c0.9-1.1,1.7-2.3,2.7-3.7c-3.6,0-8.1,0-19.3,0c-2.1,0-2.6-1.3-1.9-3c1.3-3.1,3.7-8.3,5.1-10.9c0.3-0.6,1-1.6,2.5-1.6       c5.1,0,23.9,0,36.4,0c-0.2,2.7-0.2,5.4-0.6,8.1c-1.1,7.2-3.8,13.8-8.2,19.6c-7.2,9.5-16.6,15.4-28.5,17       c-9.8,1.3-18.9-0.6-26.9-6.6c-7.4-5.6-11.6-13-12.7-22.2c-1.3-10.9,1.9-20.7,8.5-29.3c7.1-9.3,16.5-15.2,28-17.3       c9.4-1.7,18.4-0.6,26.5,4.9c5.3,3.5,9.1,8.3,11.6,14.1C154.7,98.5,154.3,99,153.1,99.3z"
              />
            </g>
            <g>
              <path
                class="st4"
                d="M186.2,154.6c-9.1-0.2-17.4-2.8-24.4-8.8c-5.9-5.1-9.6-11.6-10.8-19.3c-1.8-11.3,1.3-21.3,8.1-30.2       c7.3-9.6,16.1-14.6,28-16.7c10.2-1.8,19.8-0.8,28.5,5.1c7.9,5.4,12.8,12.7,14.1,22.3c1.7,13.5-2.2,24.5-11.5,33.9       c-6.6,6.7-14.7,10.9-24,12.8C191.5,154.2,188.8,154.3,186.2,154.6z M210,114.2c-0.1-1.3-0.1-2.3-0.3-3.3       c-1.8-9.9-10.9-15.5-20.4-13.3c-9.3,2.1-15.3,8-17.5,17.4c-1.8,7.8,2,15.7,9.2,18.9c5.5,2.4,11,2.1,16.3-0.6       C205.2,129.2,209.5,122.8,210,114.2z"
              />
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
{:else if iconName === "wails"}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    version="1.1"
    viewBox="0 0 550 310"
    xml:space="preserve"
    style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"
    ><g
      ><path
        d="M0.883,-0.081L0.121,0.081L0.256,-0.063L0.883,-0.081Z"
        transform="matrix(-166.599,4.57132,4.57132,166.599,147.403,167.648)"
        style="fill:url(#_Linear1);fill-rule:nonzero"
      /></g
    ><g
      ><path
        d="M0.878,-0.285L-0.073,0.71L-1.186,0.542L0.015,0.207L-0.846,0.077L0.355,-0.258L-0.505,-0.388L0.649,-0.71L0.878,-0.285Z"
        transform="matrix(-106.443,-16.0669,-16.0669,106.443,428.19,188.033)"
        style="fill:url(#_Linear2);fill-rule:nonzero"
      /></g
    ><g
      ><path
        d="M0.44,-0.04L0.265,-0.056L0.177,0.437L-0.311,-0.255L0.262,-0.437L0.568,-0.437L0.44,-0.04Z"
        transform="matrix(-114.484,-162.408,-162.408,114.484,333.291,285.804)"
        style="fill:url(#_Linear3);fill-rule:nonzero"
      /></g
    ><g
      ><path
        d="M0.622,-0.115L0.761,-0.115L0.806,-0.013L0.826,0.182L0.622,-0.115Z"
        transform="matrix(238.126,298.893,298.893,-238.126,113.516,-150.536)"
        style="fill:url(#_Linear4);fill-rule:nonzero"
      /></g
    ><g
      ><path
        d="M0.467,0.005L0.49,0.062L0.271,-0.062L0.467,0.005Z"
        transform="matrix(-369.529,-97.4118,-97.4118,369.529,582.38,94.027)"
        style="fill:url(#_Linear5);fill-rule:nonzero"
      /></g
    ><g
      ><path
        d="M0.2,0.001L0.219,-0.018L0.614,0.012L0.519,0.089L0.282,0.068L0.2,0.135L0.463,0.194L0.374,0.266L0.138,0.186L0.047,0.033L-0.131,-0.266L0.2,0.001Z"
        transform="matrix(-496.156,-53.9751,-53.9751,496.156,367.888,125.085)"
        style="fill:url(#_Linear6);fill-rule:nonzero"
      /></g
    ><g
      ><path
        d="M269.095,104.527L287.764,111.419L263.632,106.75L269.095,104.527Z"
        transform="matrix(0.436503,-1.22916,4.88651,1.73532,-368.043,253.619)"
        style="fill:#fff"
      /></g
    ><defs
      ><linearGradient
        id="_Linear1"
        x1="0"
        x2="1"
        y1="0"
        y2="0"
        gradientTransform="matrix(1,-3.46945e-18,3.46945e-18,1,0,-3.05761e-06)"
        gradientUnits="userSpaceOnUse"
        ><stop offset="0" style="stop-color:#e33232;stop-opacity:1" /><stop
          offset="1"
          style="stop-color:#6b000d;stop-opacity:1"
        /></linearGradient
      ><linearGradient
        id="_Linear2"
        x1="0"
        x2="1"
        y1="0"
        y2="0"
        gradientTransform="matrix(1,0,0,1,0,-2.75467e-06)"
        gradientUnits="userSpaceOnUse"
        ><stop offset="0" style="stop-color:#e33232;stop-opacity:1" /><stop
          offset="1"
          style="stop-color:#6b000d;stop-opacity:1"
        /></linearGradient
      ><linearGradient
        id="_Linear3"
        x1="0"
        x2="1"
        y1="0"
        y2="0"
        gradientTransform="matrix(1,-1.11022e-16,1.11022e-16,1,0,-2.61861e-06)"
        gradientUnits="userSpaceOnUse"
        ><stop offset="0" style="stop-color:#e33232;stop-opacity:1" /><stop
          offset="1"
          style="stop-color:#6b000d;stop-opacity:1"
        /></linearGradient
      ><linearGradient
        id="_Linear4"
        x1="0"
        x2="1"
        y1="0"
        y2="0"
        gradientTransform="matrix(-0.801899,-0.59746,0.59746,-0.801899,1.3495,0.447457)"
        gradientUnits="userSpaceOnUse"
        ><stop offset="0" style="stop-color:#e33232;stop-opacity:1" /><stop
          offset="1"
          style="stop-color:#6b000d;stop-opacity:1"
        /></linearGradient
      ><linearGradient
        id="_Linear5"
        x1="0"
        x2="1"
        y1="0"
        y2="0"
        gradientTransform="matrix(1,-2.77556e-17,2.77556e-17,1,0,-1.92826e-06)"
        gradientUnits="userSpaceOnUse"
        ><stop offset="0" style="stop-color:#e33232;stop-opacity:1" /><stop
          offset="1"
          style="stop-color:#6b000d;stop-opacity:1"
        /></linearGradient
      ><linearGradient
        id="_Linear6"
        x1="0"
        x2="1"
        y1="0"
        y2="0"
        gradientTransform="matrix(1,0,0,1,0,9.68429e-07)"
        gradientUnits="userSpaceOnUse"
        ><stop offset="0" style="stop-color:#e33232;stop-opacity:1" /><stop
          offset="1"
          style="stop-color:#6b000d;stop-opacity:1"
        /></linearGradient
      ></defs
    ></svg
  >
{/if}
