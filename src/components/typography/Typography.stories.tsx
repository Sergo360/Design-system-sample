import type { Meta, StoryObj } from '@storybook/react';
import {
  H1, H2, H3, H4, P, Span, Typography,
} from './Typography';

const meta: Meta<typeof Typography<'p'>> = {
  component: Typography,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Typography component',
      },
    },
  },

  argTypes: {
    tag: {
      category: 'Tag',
      description: 'Any Components or HTML tags',
      options: ['p', 'h1', 'h2', 'h3', 'h4', 'p', 'span', 'ReactComponent'],
      control: { type: 'select' },
    },

    HTMLContent: {
      type: 'string',
    },
  },

};

export default meta;

const text = 'In the beginning, there was a word. That word was "soup".';

const typeStyle = {
  display: 'flex',
  gap: '40px',
  alignItems: 'center',
};

type Story = StoryObj<typeof Typography<'p'>>;

export const Basic: Story = {
  args: {
    tag: 'p',
  },
  render: (args) => {
    if (args.HTMLContent) {
      return <Typography {...args} />;
    }

    return (
      <Typography {...args}>
        Oh, Snail! As you climb Mount Fuji,
        <br />
        You need not hurry...
        <br />
        Taking out the pen, I added:
        <br />
        At the summit of Mount Fuji,
        <br />
        There are many snails, indeed.
        <br />
      </Typography>
    );
  },
};

export const Examples: Story = {
  args: {
  },
  render: () => (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
    }}
    >
      <div style={typeStyle}>
        <H3 style={{ width: '50px' }}>H1</H3>
        <H1>{text}</H1>
      </div>

      <div style={typeStyle}>
        <H3 style={{ width: '50px' }}>H2</H3>
        <H2>{text}</H2>
      </div>

      <div style={typeStyle}>
        <H3 style={{ width: '50px' }}>H3</H3>
        <H3>{text}</H3>
      </div>

      <div style={typeStyle}>
        <H3 style={{ width: '50px' }}>H4</H3>
        <H4>{text}</H4>
      </div>

      <div style={typeStyle}>
        <H3 style={{ width: '50px' }}>P</H3>
        <P>{text}</P>
      </div>

      <div style={typeStyle}>
        <H3 style={{ width: '50px' }}>Span</H3>
        <Span>{text}</Span>
      </div>
    </div>
  ),
};
