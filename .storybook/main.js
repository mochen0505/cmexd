module.exports = {
  "stories": ["../packages/**/stories/*.stories.@(js|svelte)"],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-svelte-csf"
  ],
  "framework": "@storybook/svelte"
}
