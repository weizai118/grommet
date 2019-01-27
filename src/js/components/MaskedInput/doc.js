import { describe, PropTypes } from 'react-desc';

import { getAvailableAtBadge, themeDocUtils } from '../../utils';

export const doc = MaskedInput => {
  const DocumentedMaskedInput = describe(MaskedInput)
    .availableAt(getAvailableAtBadge('MaskedInput'))
    .description('An input field with formalized syntax.')
    .usage(
      `import { MaskedInput } from 'grommet';
<MaskedInput id='item' name='item' />`,
    )
    .intrinsicElement('input');

  DocumentedMaskedInput.propTypes = {
    id: PropTypes.string.description('The id attribute of the input.'),
    name: PropTypes.string.description('The name attribute of the input.'),
    onChange: PropTypes.func.description(
      `Function that will be called when the user types or pastes text.`,
    ),
    onBlur: PropTypes.func.description(
      `Function that will be called when the user leaves the field.`,
    ),
    mask: PropTypes.arrayOf(
      PropTypes.shape({
        length: PropTypes.oneOfType([
          PropTypes.number,
          PropTypes.arrayOf(PropTypes.number),
        ]),
        fixed: PropTypes.string,
        options: PropTypes.arrayOf(PropTypes.string),
        regexp: PropTypes.shape({}), // RegExp
      }),
    ).description(
      `Describes the structure of the mask. If a regexp is provided, it should
      allow both the final full string element as well as partial strings
      as the user types characters one by one.`,
    ),
    size: PropTypes.oneOfType([
      PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
      PropTypes.string,
    ]).description('The size of the text.'),
    value: PropTypes.string.description(
      `What text to put in the input. The caller should ensure that it
      is initially valid with respect to the mask.`,
    ),
  };

  return DocumentedMaskedInput;
};

export const themeDoc = {
  ...themeDocUtils.focusStyle,
  ...themeDocUtils.placeholderStyle,
  ...themeDocUtils.inputStyle,
};
