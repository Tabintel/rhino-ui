import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { RESPONSIVE_STORY } from '../../docs/constants';
import { RadioGroup, RadioGroupProps } from './radio-group';
import { Box } from '../box/box';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup/Visual Regression Tests',
  component: RadioGroup,
};

export default meta;

const sizes = [
  'sm',
  'md',
  'lg',
  {
    base: 'sm',
    tablet: 'md',
    desktop: 'lg',
    hd: 'sm',
  },
] as RadioGroupProps['size'][];

const options = [
  {
    id: 'one',
    value: 'one',
    label: 'One',
  },
  {
    id: 'two',
    value: 'two',
    label: 'Two',
  },
  {
    id: 'three',
    value: 'three',
    label: <div>Three - node label</div>,
  },
];

const Template: StoryFn<RadioGroupProps> = ({ ...args }) => (
  <Box gap="xl">
    {sizes.map(size => (
      <Box gap="md" key={`${args.id}-${size}`}>
        {/* eslint-disable-next-line */}
        {/* @ts-ignore */}
        <RadioGroup size={size} options={options} {...args} />
      </Box>
    ))}
  </Box>
);

export const AllSizes: StoryFn<RadioGroupProps> = Template.bind({});
AllSizes.args = { id: 'AllSizes' };

export const AllSizesChecked: StoryFn<RadioGroupProps> = Template.bind({});
AllSizesChecked.args = {
  id: 'AllSizesChecked',
  isRequired: true,
  title: 'title required',
  value: 'one',
};
AllSizesChecked.parameters = RESPONSIVE_STORY;

export const AllSizesError: StoryFn<RadioGroupProps> = Template.bind({});
AllSizesError.args = { id: 'AllSizesError', error: 'Agreement is required' };

export const AllSizesDisabled: StoryFn<RadioGroupProps> = Template.bind({});
AllSizesDisabled.args = { id: 'AllSizesDisabled', isDisabled: true };

export const AllSizesDisabledChecked: StoryFn<RadioGroupProps> = Template.bind({});
AllSizesDisabledChecked.args = {
  id: 'AllSizesDisabledChecked',
  isDisabled: true,
  value: 'one',
};

export const AllSizesTitle: StoryFn<RadioGroupProps> = Template.bind({});
AllSizesTitle.args = { id: 'AllSizesTitle', title: 'title' };

export const AllSizesTitleDisabled: StoryFn<RadioGroupProps> = Template.bind({});
AllSizesTitleDisabled.args = {
  id: 'AllSizesTitleDisabled',
  title: 'title',
  isDisabled: true,
};

export const AllSizesTitleDisabledError: StoryFn<RadioGroupProps> = Template.bind({});
AllSizesTitleDisabledError.args = {
  id: 'AllSizesTitleDisabledError',
  title: 'title',
  isDisabled: true,
  error: 'this is required',
};

export const AllSizesTitleDisabledErrorChecked: StoryFn<RadioGroupProps> = Template.bind({});
AllSizesTitleDisabledErrorChecked.args = {
  id: 'AllSizesTitleDisabledErrorChecked',
  title: 'title',
  isDisabled: true,
  error: 'this is required',
  value: 'one',
};

export const AllSizesTitleDisabledOption: StoryFn<RadioGroupProps> = Template.bind({});
AllSizesTitleDisabledOption.args = {
  id: 'AllSizesTitleDisabledOption',
  title: 'title',
  value: 'one',
  options: [
    ...options,
    {
      value: 'disabled',
      id: 'disabled',
      label: 'disabled',
      disabled: true,
    },
  ],
};

export const AllSizesTitleDisabledOptionSelected: StoryFn<RadioGroupProps> = Template.bind({});
AllSizesTitleDisabledOptionSelected.args = {
  id: 'AllSizesTitleDisabledOptionSelected',
  title: 'title',
  value: 'disabled',
  options: [
    ...options,
    {
      value: 'disabled',
      id: 'disabled',
      label: 'disabled',
      disabled: true,
    },
  ],
};

export const AllSizesHorizontal: StoryFn<RadioGroupProps> = Template.bind({});
AllSizesHorizontal.args = { id: 'AllSizesHorizontal', direction: 'row' };

export const AllSizesHorizontalChecked: StoryFn<RadioGroupProps> = Template.bind({});
AllSizesHorizontalChecked.args = {
  id: 'AllSizesHorizontalRequired',
  isRequired: true,
  title: 'title required',
  value: 'one',
  direction: 'row',
};

export const AllSizesHorizontalError: StoryFn<RadioGroupProps> = Template.bind({});
AllSizesHorizontalError.args = {
  id: 'AllSizesHorizontalError',
  error: 'Agreement is required',
  direction: 'row',
};

export const AllSizesHorizontalDisabled: StoryFn<RadioGroupProps> = Template.bind({});
AllSizesHorizontalDisabled.args = {
  id: 'AllSizesHorizontalDisabled',
  isDisabled: true,
  direction: 'row',
};

export const AllSizesHorizontalDisabledChecked: StoryFn<RadioGroupProps> = Template.bind({});
AllSizesHorizontalDisabledChecked.args = {
  id: 'AllSizesHorizontalDisabled',
  isDisabled: true,
  value: 'one',
  direction: 'row',
};

export const AllSizesHorizontalTitle: StoryFn<RadioGroupProps> = Template.bind({});
AllSizesHorizontalTitle.args = {
  id: 'AllSizesHorizontalTitle',
  title: 'title',
  direction: 'row',
};

export const AllSizesHorizontalTitleDisabled: StoryFn<RadioGroupProps> = Template.bind({});
AllSizesHorizontalTitleDisabled.args = {
  id: 'AllSizesHorizontalTitleDisabled',
  title: 'title',
  isDisabled: true,
  direction: 'row',
};

export const AllSizesHorizontalTitleDisabledError: StoryFn<RadioGroupProps> = Template.bind({});
AllSizesHorizontalTitleDisabledError.args = {
  id: 'AllSizesHorizontalTitleDisabledError',
  title: 'title',
  isDisabled: true,
  error: 'this is required',
  direction: 'row',
};

export const AllSizesHorizontalTitleDisabledErrorChecked: StoryFn<RadioGroupProps> = Template.bind({});
AllSizesHorizontalTitleDisabledErrorChecked.args = {
  id: 'AllSizesHorizontalTitleDisabledErrorChecked',
  title: 'title',
  isDisabled: true,
  error: 'this is required',
  value: 'one',
  direction: 'row',
};

export const AllSizesHorizontalTitleDisabledOption: StoryFn<RadioGroupProps> = Template.bind({});
AllSizesHorizontalTitleDisabledOption.args = {
  id: 'AllSizesHorizontalTitleDisabledOption',
  title: 'title',
  value: 'one',
  options: [
    ...options,
    {
      value: 'disabled',
      id: 'disabled',
      label: 'disabled',
      disabled: true,
    },
  ],
  direction: 'row',
};

export const AllSizesHorizontalTitleDisabledOptionSelected: StoryFn<RadioGroupProps> = Template.bind({});
AllSizesHorizontalTitleDisabledOptionSelected.args = {
  id: 'AllSizesHorizontalTitleDisabledOptionSelected',
  title: 'title',
  value: 'disabled',
  options: [
    ...options,
    {
      value: 'disabled',
      id: 'disabled',
      label: 'disabled',
      disabled: true,
    },
  ],
  direction: 'row',
};

const SimpleTemplate: StoryFn<RadioGroupProps> = ({ ...args }) => (
  <RadioGroup {...args} options={options} />
);

export const FocusSelected: StoryFn<RadioGroupProps> = SimpleTemplate.bind({});
FocusSelected.args = {
  id: 'FocusSelected',
  isRequired: true,
  title: 'title required',
  value: 'one',
};
FocusSelected.parameters = {};

FocusSelected.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const radios = canvas.queryAllByRole('radio');
  radios[0].focus();
};

export const FocusUnselected: StoryFn<RadioGroupProps> = SimpleTemplate.bind({});
FocusUnselected.args = {
  id: 'AllSizesChecked',
  isRequired: true,
  title: 'title required',
  value: 'two',
};
FocusUnselected.parameters = {};

FocusUnselected.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const radios = canvas.queryAllByRole('radio');
  radios[0].focus();
};