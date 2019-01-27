import { describe, PropTypes } from 'react-desc';

import { getAvailableAtBadge, themeDocUtils } from '../../utils';

export const doc = RadioButton => {
  const DocumentedRadioButton = describe(RadioButton)
    .availableAt(getAvailableAtBadge('RadioButton'))
    .description('A radio button control.')
    .usage(
      `import { RadioButton } from 'grommet';
<RadioButton />`,
    )
    .intrinsicElement('input');

  DocumentedRadioButton.propTypes = {
    checked: PropTypes.bool.description('Same as React <input checked={} />'),
    disabled: PropTypes.bool.description(
      `Same as React <input disabled={} />. Also adds a hidden input element
with the same name so form submissions work.`,
    ),
    id: PropTypes.string.description(
      'The DOM id attribute value to use for the underlying <input/> element.',
    ),
    label: PropTypes.node.description(
      'Label text to place next to the control.',
    ),
    name: PropTypes.string.description(
      'The DOM name attribute value to use for the underlying <input/> element.',
    ).isRequired,
    onChange: PropTypes.func.description(
      `Function that will be called when the user clicks the radio button. It
      will be passed a React event object. The current state can be accessed
      via event.target.checked. Same as React <input onChange={} />.`,
    ),
  };

  return DocumentedRadioButton;
};

export const themeDoc = {
  ...themeDocUtils.focusStyle,
  ...themeDocUtils.normalizeColor,
};
