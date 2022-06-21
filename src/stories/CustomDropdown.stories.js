import CustomDropdown from "./CustomDropdown";

// YourComponent.stories.js|jsx

//👇 This default export determines where your story goes in the story list
export default {

  title: 'Dropdown',
  component: CustomDropdown,
  argTypes: {
    type: {
      description: "Types of dropdowns, the first is normal, the second is with pictures, the third is without pictures, the fourth is with radio buttons"
    },
    image: {
      description: "Image for the second type"
    },
    placeholder: {
      description: "Placeholder"
    },
    options: {
      description: 'Options value',
      control: 'array'
    },
    descriptionOption: {
      description: "description for the fourth type"
    }
  },
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => <CustomDropdown {...args} />;

export const Dropdown = Template.bind({});

