import React from 'react'
import {
  spacing,
  uiGroups,
  fontSizes,
  screenSizes,
  borderRadii,
  borderSizes,
} from '../../utils/theme'
import List from '../List'
import Anchor from '../Anchor'
import Image from '../Image'
import Icon from '../Icon'

export default ({ visual, description, links, tags }) => (
  <div>
    {tags ? (
      <div
        style={{
          marginBottom: spacing.large,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        {tags.sort((a, b) => a.order - b.order).map(tag => (
          <div
            key={tag.label}
            style={{
              border: `${borderSizes.xsmall}px solid ${tag.color}`,
              borderRadius: borderRadii.medium,
              color: tag.color,
              fontSize: fontSizes.small,
              paddingTop: spacing.xsmall,
              paddingBottom: spacing.xsmall,
              paddingRight: spacing.small,
              paddingLeft: spacing.small,
              marginRight: spacing.small,
              marginBottom: spacing.small,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {tag.icon ? (
                <Icon type={tag.icon} fill={tag.color} size={fontSizes.large} />
              ) : null}
              <div
                style={{
                  marginLeft: tag.icon ? spacing.xsmall : 0,
                }}
              >
                {tag.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    ) : null}

    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {visual ? (
        <div
          style={{
            marginBottom: spacing.xsmall,
            marginRight: spacing.large,
            maxWidth: 200,
          }}
        >
          {visual && visual.startsWith('/') ? (
            <Image src={visual} description="Decorative image" quiet />
          ) : (
            <Icon type={visual} fill={uiGroups.gray2} size={70} />
          )}
        </div>
      ) : null}

      <div
        style={{
          flexGrow: 1,
          flexShrink: 0,
          flexBasis: screenSizes.small,
        }}
      >
        <div>{description}</div>
        {links ? (
          <div
            style={{
              marginTop: spacing.small,
            }}
          >
            <List
              items={links.map(link => (
                <span key={link.href}>
                  <Anchor href={link.href}>{link.description}</Anchor>
                </span>
              ))}
              type="link"
            />
          </div>
        ) : null}
      </div>
    </div>
  </div>
)
