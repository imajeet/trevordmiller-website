import React from 'react'
import PropTypes from 'prop-types'
import { spacing, uiGroups } from '../../../../../../utils/theme'
import Heading from '../../../../../Heading'

const Section = ({ children, note, title }) => (
  <section
    id={title}
    style={{
      paddingBottom: spacing.xlarge,
      paddingLeft: spacing.large,
      paddingRight: spacing.large,
    }}
  >
    {note && (
      <div
        style={{
          color: uiGroups.gray3,
        }}
      >
        {note}
      </div>
    )}
    {title && <Heading level={3}>{title}</Heading>}
    {children}
  </section>
)

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
}

export default Section
