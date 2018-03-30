import React from 'react'
import {
  uiGroups,
  colorValues,
  spacing,
  borderRadii,
  fontSizes,
} from '../../utils/theme'

const stylesByType = {
  primary: {
    paddingTop: spacing.medium,
    paddingBottom: spacing.medium,
    paddingLeft: spacing.large,
    paddingRight: spacing.large,
    background: colorValues.colors.blue,
    color: uiGroups.background,
  },
  secondary: {
    paddingTop: spacing.medium,
    paddingBottom: spacing.medium,
    paddingLeft: spacing.large,
    paddingRight: spacing.large,
    background: uiGroups.gray2,
    color: uiGroups.background,
  },
  inline: {
    background: 'transparent',
    color: colorValues.colors.blue,
    textDecoration: 'underline',
  },
}

export default ({ onClick, type = 'primary', children }) => (
  <button
    onClick={onClick}
    style={{
      minWidth: 175,
      cursor: 'pointer',
      display: 'inline-block',
      textAlign: 'center',
      border: 'none',
      fontSize: fontSizes.medium,
      outline: 'none',
      borderRadius: borderRadii.medium,
      ...stylesByType[type],
    }}
  >
    {children}
  </button>
)
