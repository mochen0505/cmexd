// Button.stories.js

import Button from '../src/Button.svelte';

export default {
  title: 'Button',
  component: Button,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
  Component: Button,
  props: args,
});

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { label: 'Button' };
