import { describe, PropTypes } from 'react-desc';

import { getAvailableAtBadge, themeDocUtils } from '../../utils';

export const doc = CheckBox => {
  const DocumentedCheckBox = describe(CheckBox)
    .availableAt(getAvailableAtBadge('CheckBox'))
    .description('A checkbox toggle control.')
    .usage(
      `import { CheckBox } from 'grommet';
<CheckBox />`,
    )
    .intrinsicElement('input');

  DocumentedCheckBox.propTypes = {
    checked: PropTypes.bool
      .description('Same as React <input checked={} />')
      .defaultValue(false),
    disabled: PropTypes.bool
      .description(
        `Same as React <input disabled={} />. Also adds a hidden input element
      with the same name so form submissions work.`,
      )
      .defaultValue(false),
    id: PropTypes.string.description(
      'The DOM id attribute value to use for the underlying <input/> element.',
    ),
    label: PropTypes.node.description(
      'Label text to place next to the control.',
    ),
    name: PropTypes.string.description(
      'The DOM name attribute value to use for the underlying <input/> element.',
    ),
    onChange: PropTypes.func.description(
      `Function that will be called when the user clicks the check box. It
      will be passed a React event object. The current state can be accessed
      via event.target.checked. Same as React <input onChange={} />.`,
    ),
    reverse: PropTypes.bool
      .description('Whether to show the label in front of the checkbox.')
      .defaultValue(false),
    toggle: PropTypes.bool
      .description('Whether to visualize it as a toggle switch.')
      .defaultValue(false),
    indeterminate: PropTypes.bool
      .description(
        `Whether state is indeterminate.
NOTE: This can only be used with non-toggle components`,
      )
      .defaultValue(false),
  };

  return DocumentedCheckBox;
};

export const themeDoc = {
  ...themeDocUtils.focusStyle,
  ...themeDocUtils.normalizeColor,
};
