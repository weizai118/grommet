import { describe, PropTypes } from 'react-desc';

import { getAvailableAtBadge, themeDocUtils } from '../../utils';

export const doc = TextArea => {
  const DocumentedTextArea = describe(TextArea)
    .availableAt(getAvailableAtBadge('TextArea'))
    .description('A control to input multiple lines of text.')
    .usage(
      `import { TextArea } from 'grommet';
<TextArea id='item' name='item' />`,
    )
    .intrinsicElement('textarea');

  DocumentedTextArea.propTypes = {
    id: PropTypes.string.description('The id attribute of the textarea.'),
    fill: PropTypes.bool
      .description('Whether the width and height should fill the container.')
      .defaultValue(false),
    focusIndicator: PropTypes.bool.description(
      'Whether the plain textarea should receive a focus outline.',
    ),
    name: PropTypes.string.description('The name attribute of the textarea.'),
    onChange: PropTypes.func.description(
      'Function that will be called when the user types in the textarea.',
    ),
    placeholder: PropTypes.string.description(
      'Placeholder text to use when no value is provided.',
    ),
    plain: PropTypes.bool.description(
      `Whether this is a plain textarea with no border or padding.
Only use this when the containing context provides sufficient affordance.`,
    ),
    value: PropTypes.string.description('What text to put in the textarea.'),
    resize: PropTypes.oneOfType([
      PropTypes.oneOf(['vertical', 'horizontal']),
      PropTypes.bool,
    ])
      .description('Whether user is allowed to resize the textarea.')
      .defaultValue(true),
  };

  return DocumentedTextArea;
};

export const themeDoc = {
  'textArea.extend': {
    description: 'Any additional style for Text.',
    type: 'string | (props) => {}',
    defaultValue: undefined,
  },
  ...themeDocUtils.focusStyle,
  ...themeDocUtils.placeholderStyle,
  ...themeDocUtils.inputStyle,
};
