import React from 'react'
import {
  spacing,
  fontSizes,
  borderRadii,
  borderSizes,
  syntaxGroups,
  uiGroups,
} from '../../../utils/theme'
import ScreenWithProject from '../../../components/ScreenWithProject'
import Icon from '../../../components/Icon'
import Anchor from '../../../components/Anchor'
import Heading from '../../../components/Heading'
import List from '../../../components/List'
import Image from '../../../components/Image'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

const colorMeanings = [
  [
    {
      value: syntaxGroups.constant,
      meaning: 'Constant',
    },
    {
      value: syntaxGroups.identifier,
      meaning: 'Identifier',
    },
    {
      value: syntaxGroups.global,
      meaning: 'Global',
    },
    {
      value: syntaxGroups.emphasis,
      meaning: 'Emphasis',
    },
    {
      value: syntaxGroups.special,
      meaning: 'Special',
    },
    {
      value: syntaxGroups.statement,
      meaning: 'Statement',
    },
    {
      value: syntaxGroups.type,
      meaning: 'Type',
    },
    {
      value: syntaxGroups.trivial,
      meaning: 'Trivial',
    },
  ],
]

const characteristics = [
  {
    title: 'Intentional',
    description: 'Each color has a purpose',
  },
  {
    title: 'Current',
    description:
      'First-class syntax highlighting for modern programming languages',
  },
  {
    title: 'Soft',
    description: 'Flat pastel colors that are easy on the eyes',
  },
  {
    title: 'Balanced',
    description: 'Designed with color theory',
  },
  {
    title: 'Maintainable',
    description:
      'Uses a single-source-of-truth for color values and documentation',
  },
  {
    title: 'Free',
    description: '100% open source',
  },
]

const officialPlugins = [
  {
    title: 'Vim',
    icon: 'vim',
    screenshot:
      'https://github.com/trevordmiller/nova-vim/blob/master/assets/screenshot.png?raw=true',
    steps: [
      'Install "sheerun/vim-polyglot" and "trevordmiller/nova-vim" to your Vim plugin manager',
      'Add "colorscheme nova" to your ".vimrc"',
      'Restart Vim',
    ],
    notes: [
      `You'll need True Color support (latest Vim, Neovim, or GUI Vim)`,
      'For terminal Vim use, your terminal will also need True Color support',
    ],
    links: [
      {
        title: 'Example ".vimrc"',
        url:
          'https://github.com/trevordmiller/nova-vim/blob/master/assets/.vimrc',
      },
      {
        title: 'Contributing instructions',
        url:
          'https://github.com/trevordmiller/nova-vim/blob/master/CONTRIBUTING.md',
      },
      {
        title: 'Source code',
        url: 'https://github.com/trevordmiller/nova-vim',
      },
    ],
  },

  {
    title: 'Git',
    icon: 'git',
    screenshot:
      'https://github.com/trevordmiller/nova-git/raw/master/assets/screenshot.png?raw=true',
    steps: [
      'Install a Nova plugin for your terminal',
      'Use ANSI color variables in your ".gitconfig"',
      'For Nova color meanings, see the example ".gitconfig"',
    ],
    notes: [
      "You'll need a version of Git that supports the latest color options (git 2.10)",
    ],
    links: [
      {
        title: 'Example ".gitconfig"',
        url:
          'https://github.com/trevordmiller/nova-git/blob/master/assets/.gitconfig',
      },
    ],
  },

  {
    title: 'tmux',
    icon: 'tmux',
    screenshot:
      'https://github.com/trevordmiller/nova-tmux/raw/master/assets/screenshot.png?raw=true',
    steps: [
      'Install a Nova plugin for your terminal',
      'Use ANSI color variables in your ".tmux.conf"',
      'For Nova color meanings, see the example ".tmux.conf"',
    ],
    notes: [
      "You'll need a version of tmux that supports True Color (tmux 2.2+)",
    ],
    links: [
      {
        title: 'Example ".tmux.conf"',
        url:
          'https://github.com/trevordmiller/nova-tmux/blob/master/assets/.tmux.conf',
      },
    ],
  },

  {
    title: 'iTerm2',
    icon: 'iterm2',
    screenshot:
      'https://github.com/trevordmiller/nova-iterm/raw/master/assets/screenshot.png?raw=true',
    steps: [
      'Download "nova.itermcolors"',
      'In iTerm, open your preferences',
      'Tap on "Profiles" > "Colors" > "Color Presets" > "Import"',
      'Select the "nova.itermcolors" you downloaded',
    ],
    links: [
      {
        title: 'nova.itermcolors',
        url:
          'https://raw.githubusercontent.com/trevordmiller/nova-iterm/master/build/nova.itermcolors',
      },
      {
        title: 'Contributing instructions',
        url:
          'https://github.com/trevordmiller/nova-iterm/blob/master/CONTRIBUTING.md',
      },
      {
        title: 'Source code',
        url: 'https://github.com/trevordmiller/nova-iterm',
      },
    ],
  },

  {
    title: 'npm',
    icon: 'npm',
    steps: ['npm install nova-colors', "import {group} from 'nova-colors'"],
    notes: [
      'The package provides the Nova color values mapped by group type (syntax, UI, version control etc.)',
    ],
    links: [
      {
        title: 'API',
        url:
          'https://github.com/trevordmiller/nova-colors/blob/master/src/index.js',
      },
      {
        title: 'Example plugin using nova-colors directly',
        url: 'https://github.com/trevordmiller/nova-hyperterm',
      },
      {
        title: 'Example plugin using nova-colors with a build step',
        url: 'https://github.com/trevordmiller/nova-vim',
      },
      {
        title: 'Contributing instructions',
        url:
          'https://github.com/trevordmiller/nova-colors/blob/master/CONTRIBUTING.md',
      },
      {
        title: 'Source code',
        url: 'https://github.com/trevordmiller/nova-colors',
      },
    ],
  },
]

const communityPlugins = [
  {
    title: 'VS Code',
    icon: 'vscode',
    screenshot:
      'https://github.com/rebornix/vscode-nova/raw/master/assets/screenshot.png?raw=true',
    links: [
      {
        title: 'Install from the VS Code marketplace',
        url:
          'https://marketplace.visualstudio.com/items?itemName=rebornix.nova',
      },
      {
        title: 'Source code',
        url: 'https://github.com/rebornix/vscode-nova',
      },
    ],
  },

  {
    title: 'Atom',
    icon: 'atom',
    screenshot:
      'https://github.com/trevordmiller/nova-atom-syntax/raw/master/assets/screenshot.png?raw=true',
    steps: [
      'In Atom, open your settings',
      'Tap on the "Install" pane',
      'Tap on "Themes"',
      'Search for "Nova"',
      'Tap the "Install" button for both "nova-atom-ui" and "nova-atom-syntax"',
      'Tap on the "Themes" pane',
      'Select "Nova Atom" for both the "UI Theme" and "Syntax Theme"',
    ],
    notes: [
      'Install "language-babel" for full JS colors',
      'Install "language-babel" for full JSX colors',
    ],
    links: [
      {
        title: 'Contributing instructions for the UI plugin',
        url:
          'https://github.com/trevordmiller/nova-atom-ui/blob/master/CONTRIBUTING.md',
      },
      {
        title: 'Contributing instructions for the syntax plugin',
        url:
          'https://github.com/trevordmiller/nova-atom-syntax/blob/master/CONTRIBUTING.md',
      },
      {
        title: 'Source code for the UI plugin',
        url: 'https://github.com/trevordmiller/nova-atom-ui',
      },
      {
        title: 'Source code for the syntax plugin',
        url: 'https://github.com/trevordmiller/nova-atom-syntax',
      },
    ],
  },

  {
    title: 'Hyper',
    icon: 'hyper',
    screenshot:
      'https://github.com/trevordmiller/nova-hyperterm/raw/master/assets/screenshot.png?raw=true',
    steps: [
      'Add "nova-hyperterm" to the "plugins" array in your "~/.hyper.js"',
      'Restart Hyper',
    ],
    links: [
      {
        title: 'Example ".hyper.js"',
        url:
          'https://github.com/trevordmiller/nova-hyperterm/blob/master/assets/.hyperterm.js',
      },
      {
        title: 'Contributing instructions',
        url:
          'https://github.com/trevordmiller/nova-hyperterm/blob/master/CONTRIBUTING.md',
      },
      {
        title: 'Source code',
        url: 'https://github.com/trevordmiller/nova-hyperterm',
      },
    ],
  },

  {
    title: 'Alacritty',
    icon: 'terminal',
    screenshot:
      'https://github.com/leonardt/nova-alacritty/raw/master/assets/screenshot.png?raw=true',
    steps: ['Copy the contents of "colors.yml" to your "alacritty.yml"'],
    links: [
      {
        title: 'colors.yml',
        url:
          'https://raw.githubusercontent.com/leonardt/nova-alacritty/master/colors.yml',
      },
      {
        title: 'Source code',
        url: 'https://github.com/leonardt/nova-alacritty',
      },
    ],
  },

  {
    title: 'GNOME Terminal',
    icon: 'gnomeTerminal',
    screenshot:
      'https://github.com/agarrharr/nova-gnome-terminal/blob/master/assets/screenshot.png?raw=true',
    steps: ['Download the install.sh file', 'Run "install.sh Default"'],
    links: [
      {
        title: 'install.sh',
        url:
          'https://github.com/agarrharr/nova-gnome-terminal/blob/master/build/install.sh',
      },
      {
        title: 'Contributing instructions',
        url:
          'https://github.com/agarrharr/nova-gnome-terminal/blob/master/CONTRIBUTING.md',
      },
      {
        title: 'Source code',
        url: 'https://github.com/agarrharr/nova-gnome-terminal',
      },
    ],
  },
]

const faq = [
  {
    question: `Where is editor/plugin {x}?`,
    answer: `If you don't see it here it doesn't exist (yet). I only maintain the official plugins listed here. But I welcome more community plugins if you'd like to build one. Use the official plugins' source code as a template and the "nova-colors" package for color values.`,
  },
  {
    question: `Can you change {x}?`,
    answer: `If it is a bug or syntax not following the Nova color meanings, yes! Please submit an issue on the related GitHub repo.`,
  },
  {
    question: `Can I contribute?`,
    answer: `Yes! I'd love to have your help. Follow the "CONTRIBUTING.md" in the related repo.`,
  },
]

const tabBorder = `${borderSizes.medium}px solid ${uiGroups.backgroundShade}`

class PluginsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeTab: 0,
    }
  }

  handleTabClick(clickedTabIndex) {
    this.setState({
      activeTab: clickedTabIndex,
    })
  }

  render() {
    const { plugins } = this.props

    return (
      <Tabs>
        <TabList
          style={{
            margin: 0,
            listStyle: 'none',
            padding: 0,
            display: 'flex',
            flexDirection: 'row',
            overflowX: 'auto',
            borderTop: tabBorder,
            borderRight: tabBorder,
            borderLeft: tabBorder,
            borderTopRightRadius: borderRadii.medium,
            borderTopLeftRadius: borderRadii.medium,
          }}
        >
          {plugins.map((plugin, index) => (
            <Tab
              key={index}
              onClick={this.handleTabClick.bind(this, index)}
              style={{
                flex: '1',
                background:
                  index === this.state.activeTab
                    ? uiGroups.background
                    : uiGroups.backgroundShade,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: spacing.small,
                lineHeight: 1,
                cursor: 'pointer',
              }}
            >
              <div>
                <Icon
                  type={plugin.icon}
                  size={fontSizes.xlarge}
                  fill={
                    index === this.state.activeTab
                      ? uiGroups.userCurrentState
                      : uiGroups.gray3
                  }
                />
              </div>

              <div
                style={{
                  fontSize: fontSizes.small,
                  marginTop: spacing.xxsmall,
                  textAlign: 'center',
                  color:
                    index === this.state.activeTab
                      ? uiGroups.userCurrentState
                      : uiGroups.gray3,
                }}
              >
                {plugin.title}
              </div>
            </Tab>
          ))}
        </TabList>
        {plugins.map((plugin, index) => (
          <TabPanel
            key={index}
            style={
              index === this.state.activeTab
                ? {
                    borderRight: tabBorder,
                    borderBottom: tabBorder,
                    borderLeft: tabBorder,
                    borderBottomRightRadius: borderRadii.medium,
                    borderBottomLeftRadius: borderRadii.medium,
                    paddingTop: spacing.large,
                    paddingBottom: spacing.large,
                    paddingRight: spacing.medium,
                    paddingLeft: spacing.medium,
                  }
                : {}
            }
          >
            <div>
              {plugin.screenshot ? (
                <div
                  style={{
                    marginBottom: spacing.medium,
                  }}
                >
                  <Image
                    src={plugin.screenshot}
                    description={`Screenshot of Nova plugin for ${
                      plugin.title
                    }`}
                    quiet={true}
                  />
                </div>
              ) : null}
              {plugin.steps ? (
                <div
                  style={{
                    marginBottom:
                      plugin.notes || plugin.links ? spacing.medium : 0,
                  }}
                >
                  <Heading level={4}>Instructions</Heading>
                  <div
                    style={{
                      paddingBottom: spacing.medium,
                    }}
                  >
                    <List items={plugin.steps} type="number" />
                  </div>
                </div>
              ) : null}
              {plugin.notes ? (
                <div
                  style={{
                    marginBottom: plugin.links ? spacing.medium : 0,
                  }}
                >
                  <Heading level={4}>Notes</Heading>
                  <div
                    style={{
                      paddingBottom: spacing.medium,
                    }}
                  >
                    <List items={plugin.notes} />
                  </div>
                </div>
              ) : null}
              {plugin.links ? (
                <div>
                  <Heading level={4}>Links</Heading>
                  <List
                    items={plugin.links.map(link => (
                      <Anchor href={link.url}>{link.title}</Anchor>
                    ))}
                    type="link"
                  />
                </div>
              ) : null}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    )
  }
}

export default () => (
  <ScreenWithProject
    id="nova"
    sections={[
      {
        component: (
          <div>
            {colorMeanings.map((group, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                }}
              >
                {group.map((color, index) => (
                  <div
                    key={index}
                    style={{
                      marginRight:
                        index + 1 < group.length ? spacing.medium : 0,
                      marginBottom:
                        index + 1 < group.length ? spacing.large : 0,
                      textAlign: 'center',
                      width: 72,
                    }}
                  >
                    <div
                      style={{
                        marginBottom: spacing.small,
                      }}
                    >
                      <div
                        style={{
                          background: color.value,
                          borderRadius: borderRadii.medium,
                          width: 72,
                          height: 72,
                        }}
                      />
                    </div>
                    <div
                      style={{
                        fontSize: fontSizes.small,
                      }}
                    >
                      {color.meaning}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ),
      },

      {
        component: (
          <Image
            src="/static/nova-example-code-screenshot.png"
            description={`Nova example code screenshot`}
            quiet
          />
        ),
      },

      {
        title: 'Characteristics',
        component: (
          <div>
            {characteristics.map((characteristic, index) => (
              <div
                key={index}
                style={{
                  marginBottom:
                    index + 1 < characteristics.length ? spacing.large : 0,
                }}
              >
                <Heading level={4}>{characteristic.title}</Heading>
                <div>{characteristic.description}</div>
              </div>
            ))}
          </div>
        ),
      },

      {
        title: 'Official plugins',
        component: <PluginsList plugins={officialPlugins} />,
      },

      {
        title: 'Community plugins',
        component: <PluginsList plugins={communityPlugins} />,
      },

      {
        title: 'Frequently Asked Questions',
        component: (
          <div>
            {faq.map((item, index) => (
              <div
                key={index}
                style={{
                  marginBottom: index + 1 < faq.length ? spacing.large : 0,
                }}
              >
                <Heading level={4}>{item.question}</Heading>
                <div>{item.answer}</div>
              </div>
            ))}
          </div>
        ),
      },
    ]}
  />
)
