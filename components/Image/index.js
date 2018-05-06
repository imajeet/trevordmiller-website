import React from 'react'
import PropTypes from 'prop-types'
import { uiGroups, borderRadii, borderSizes } from 'utils/theme'

const maxWidthsBySize = {
  medium: 400,
}

const Image = ({ src, description, quiet = false, style, size }) => (
  <img
    style={{
      border: quiet ? 0 : `${borderSizes.medium}px solid ${uiGroups.gray2}`,
      borderRadius: borderRadii.medium,
      width: '100%',
      maxWidth: maxWidthsBySize[size] ? maxWidthsBySize[size] : '100%',
      ...style,
    }}
    src={src}
    alt={description}
  />
)

Image.propTypes = {
  src: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quiet: PropTypes.bool,
  style: PropTypes.object,
  size: PropTypes.oneOf(Object.keys(maxWidthsBySize)),
}

export default Image
