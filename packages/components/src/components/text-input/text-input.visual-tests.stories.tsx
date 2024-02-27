import React, { ReactElement, useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { within } from '@storybook/testing-library';
import { TextInput, TextInputProps } from './text-input';
import { Icon } from '../icon/icon';
import { Box } from '../box/box';
import { RESPONSIVE_STORY } from '../../docs/constants';

const meta: Meta<typeof TextInput> = {
  title: 'Components/TextInput/Visual Regression Tests',
  component: TextInput,
};

export default meta;

const Template: StoryFn<TextInputProps> = args => (
  <TextInput
    {...args}
    onChange={() => {}} // eslint-disable-line
  />
);

export const PrefixSuffixSizes: React.FC = (): ReactElement => {
  const [prefixValue, setPrefixValue] = useState('rhinolabssolar');
  const [prefixValue2, setPrefixValue2] = useState('49');
  const [prefixValue3, setPrefixValue3] = useState('');
  const [prefixValue4, setPrefixValue4] = useState('Pre-populated Value');
  return (
    <Box gap="xl" direction="row">
      <Box gap="md" width="33">
        <TextInput
          id="prefixSuffix1"
          value={prefixValue}
          label="Prefix"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPrefixValue(event.target.value)}
          prefix="@"
          size="sm"
        />
        <TextInput
          id="prefixSuffix2"
          value={prefixValue2}
          label="Prefix and Suffix"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPrefixValue2(event.target.value)}
          prefix="$"
          suffix=".99"
          size="sm"
        />
        <TextInput
          id="prefixSuffix3"
          value={prefixValue3}
          label="Suffix"
          placeholder="Contact name"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPrefixValue3(event.target.value)}
          suffix={<Icon name="book" />}
          size="sm"
        />
        <TextInput
          id="prefixSuffix4"
          value={prefixValue4}
          label="Suffix with Clear"
          placeholder="Contact name"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPrefixValue4(event.target.value)}
          onClear={() => setPrefixValue4('')}
          suffix={<Icon name="search" />}
          size="sm"
        />
      </Box>
      <Box gap="md" width="33">
        <TextInput
          id="prefixSuffix5"
          value={prefixValue}
          label="Prefix"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPrefixValue(event.target.value)}
          prefix="@"
        />
        <TextInput
          id="prefixSuffix6"
          value={prefixValue2}
          label="Prefix and Suffix"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPrefixValue2(event.target.value)}
          prefix="$"
          suffix=".99"
        />
        <TextInput
          id="prefixSuffix7"
          value={prefixValue3}
          label="Suffix"
          placeholder="Contact name"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPrefixValue3(event.target.value)}
          suffix={<Icon name="book" />}
        />
        <TextInput
          id="prefixSuffix8"
          value={prefixValue4}
          label="Suffix with Clear"
          placeholder="Contact name"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPrefixValue4(event.target.value)}
          onClear={() => setPrefixValue4('')}
          suffix={<Icon name="search" />}
        />
      </Box>
      <Box gap="md" width="33">
        <TextInput
          id="prefixSuffix9"
          value={prefixValue}
          label="Prefix"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPrefixValue(event.target.value)}
          prefix="@"
          size="lg"
        />
        <TextInput
          id="prefixSuffix10"
          value={prefixValue2}
          label="Prefix and Suffix"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPrefixValue2(event.target.value)}
          prefix="$"
          suffix=".99"
          size="lg"
        />
        <TextInput
          id="prefixSuffix11"
          value={prefixValue3}
          label="Suffix"
          placeholder="Contact name"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPrefixValue3(event.target.value)}
          suffix={<Icon name="book" />}
          size="lg"
        />
        <TextInput
          id="prefixSuffix112"
          value={prefixValue4}
          label="Suffix with Clear"
          placeholder="Contact name"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPrefixValue4(event.target.value)}
          onClear={() => setPrefixValue4('')}
          suffix={<Icon name="search" />}
          size="lg"
        />
      </Box>
    </Box>
  );
};

export const ResponsiveSize: StoryFn<TextInputProps> = Template.bind({});
ResponsiveSize.args = {
  size: {
    base: 'sm',
    tablet: 'md',
    desktop: 'lg',
    hd: 'sm',
  },
  value: 'responsive',
  suffix: '00',
  prefix: '$',
};
ResponsiveSize.parameters = RESPONSIVE_STORY;

export const Disabled: StoryFn<TextInputProps> = Template.bind({});
Disabled.args = {
  label: 'Disabled TextInput',
  isDisabled: true,
};

export const DisabledPlaceholder: StoryFn<TextInputProps> = Template.bind({});
DisabledPlaceholder.args = {
  label: 'Disabled TextInput',
  isDisabled: true,
  placeholder: 'placeholder text',
};

export const Error: StoryFn<TextInputProps> = Template.bind({});
Error.args = {
  label: 'Error TextInput',
  error: true,
};

export const ErrorValidationMessageRequired: StoryFn<TextInputProps> = Template.bind({});
ErrorValidationMessageRequired.args = {
  label: 'Error TextInput',
  isRequired: true,
  error: 'Helpful validation message',
};

export const ErrorValidationMessage: StoryFn<TextInputProps> = Template.bind({});
ErrorValidationMessage.args = {
  label: 'Error TextInput',
  error: 'Helpful validation message',
};

export const ErrorHiddenLabelValidationMessage: StoryFn<TextInputProps> = Template.bind({});
ErrorHiddenLabelValidationMessage.args = {
  label: 'Error TextInput',
  hideLabel: true,
  error: 'Helpful validation message',
};

export const DefaultFocus: StoryFn<TextInputProps> = Template.bind({});

DefaultFocus.args = {
  label: 'Default Focus',
};

DefaultFocus.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  canvas.getByLabelText('Default Focus').focus();
};

export const ErrorFocus: StoryFn<TextInputProps> = Template.bind({});

ErrorFocus.args = {
  label: 'Error Focus',
  error: 'validation message',
};

ErrorFocus.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  canvas.getByLabelText('Error Focus').focus();
};