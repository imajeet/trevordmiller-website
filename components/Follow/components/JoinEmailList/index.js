import React, { Component } from 'react'
import {
  spacing,
  borderRadii,
  borderSizes,
  fontSizes,
  uiGroups,
  colorValues,
} from 'utils/theme'
import Button from 'components/Button'
import Anchor from 'components/Anchor'

const inputResetStyles = {
  fontSize: fontSizes.medium,
  border: 0,
  WebkitAppearance: 'none',
  MozAppearance: 'none',
}

const submitUrl =
  'https://trevordmiller.us3.list-manage.com/subscribe/post?u=70b7070413b98c77c71e28694&amp;id=97d3f6b0ec'

const archiveUrl =
  'https://us3.campaign-archive.com/home/?u=70b7070413b98c77c71e28694&id=97d3f6b0ec'

class JoinEmailList extends Component {
  state = {
    isOpen: false,
  }

  handleToggle = event => {
    event.preventDefault()
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    const { isOpen } = this.state

    return (
      <div>
        {isOpen ? (
          <div
            style={{
              border: `${borderSizes.medium}px solid ${
                uiGroups.userCurrentState
              }`,
              padding: spacing.large,
              borderRadius: borderRadii.medium,
            }}
          >
            <div>
              Submit your email if you&apos;d like to be emailed when I publish
              new courses, blog posts, and projects. No spam and your email will
              not be shared with anyone else.
            </div>

            <form
              action={submitUrl}
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              target="_blank"
            >
              <div
                style={{
                  marginTop: spacing.medium,
                }}
              >
                <input
                  type="email"
                  defaultValue=""
                  name="EMAIL"
                  id="mce-EMAIL"
                  placeholder="you@wherever.com"
                  required
                  style={{
                    ...inputResetStyles,
                    width: '100%',
                    maxWidth: 300,
                    padding: spacing.small,
                    background: uiGroups.gray2,
                    color: uiGroups.gray6,
                    borderRadius: borderRadii.medium,
                  }}
                />
              </div>

              <div
                style={{
                  marginTop: spacing.medium,
                }}
              >
                <input
                  type="submit"
                  defaultValue="Submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  style={{
                    ...inputResetStyles,
                    minWidth: 175,
                    cursor: 'pointer',
                    display: 'inline-block',
                    textAlign: 'center',
                    outline: 'none',
                    borderRadius: borderRadii.medium,
                    background: 'transparent',
                    fontSize: fontSizes.medium,
                    color: colorValues.colors.blue,
                    border: `${borderSizes.small}px solid ${
                      colorValues.colors.blue
                    }`,
                    padding: spacing.medium,
                  }}
                />
              </div>

              <div
                style={{
                  marginTop: spacing.large,
                }}
              >
                <Anchor href={archiveUrl}>View past emails</Anchor>
              </div>
            </form>
          </div>
        ) : (
          <div
            style={{
              textAlign: 'center',
            }}
          >
            <Button onClick={this.handleToggle}>Join my email list</Button>
          </div>
        )}
      </div>
    )
  }
}

export default JoinEmailList
