module.exports = {
  config: {
    updateChannel: 'stable',

    fontSize: 12,

    // font family (Fira Code needs to be installed)
    fontFamily: '"Fira Code", Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',

    // font weight for regular and bold chars: 'normal' or 'bold'
    fontWeight: 'normal', fontWeightBold: 'normal',

    // line height as a relative unit
    lineHeight: 1,

    // letter spacing as a relative unit
    letterSpacing: 0,

    // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
    cursorColor: '#d9d9d9',

    // terminal text color under BLOCK cursor
    cursorAccentColor: '#000',

    // `'BEAM'` for |, `'UNDERLINE'` for _, `'BLOCK'` for █
    cursorShape: 'BLOCK',

    // set to `true` (without backticks and without quotes) for blinking cursor
    cursorBlink: false,

    // color of the text
    foregroundColor: '#d9d9d9',

    // terminal background color, opacity is only supported on macOS
    backgroundColor: '#353a44',

    // terminal selection color
    selectionColor: 'rgba(106, 121, 133, 0.3)',

    // border color (window, tabs) <make same as background for inviz>
    borderColor: '#49515f',

    // custom CSS to embed in the main & terminal window
    css: '', termCSS: '',

    // if you're using a Linux setup which show native menus, set to false
    // default: `true` on Linux, `true` on Windows, ignored on macOS
    showHamburgerMenu: '',

    // set to `false` (without backticks and without quotes) if you want to hide the minimize, maximize and close buttons
    // additionally, set to `'left'` if you want them on the left, like in Ubuntu
    // default: `true` (without backticks and without quotes) on Windows and Linux, ignored on macOS
    showWindowControls: '',

    // custom padding (CSS format, i.e.: `top right bottom left`)
    padding: '12px 14px',

    // the full list. if you're going to provide the full color palette,
    // including the 6 x 6 color cubes and the grayscale map, just provide
    // an array here instead of a color map object
    colors: {
      black: '#151515',
      red: '#FFAEA5',
      green: '#BFFCC6',
      yellow: '#F6EAC2',
      blue: '#6EB5FF',
      magenta: '#F3B0C3',
      cyan: '#8FCACA',
      white: '#D9D9D9',
      lightBlack: '#636363',
      lightRed: '#FFC5BF',
      lightGreen: '#DBFFD6',
      lightYellow: '#FFFFB5',
      lightBlue: '#ABDEE6',
      lightMagenta: '#FFCCF9',
      lightCyan: '#D4F0F0',
      lightWhite: '#F7F7F7',
    },

    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    shell: '',

    // for setting shell arguments (i.e. for using interactive shellArgs: `['-i']`)
    // by default `['--login']` will be used
    shellArgs: ['--login'],

    // for environment variables
    env: {},

    // set to `false` for no bell
    bell: 'SOUND',

    // if `true` (without backticks and without quotes), selected text will automatically be copied to the clipboard
    copyOnSelect: false,

    // if `true` (without backticks and without quotes), hyper will be set as the default protocol client for SSH
    defaultSSHApp: true,

    // if `true` (without backticks and without quotes), on right click selected text will be copied or pasted if no
    // selection is present (`true` by default on Windows and disables the context menu feature)
    quickEdit: false,

    // choose either `'vertical'`, if you want the column mode when Option key is hold during selection (Default)
    // or `'force'`, if you want to force selection regardless of whether the terminal is in mouse events mode
    // (inside tmux or vim with mouse mode enabled for example).
    macOptionSelectionMode: 'vertical',

    // URL to custom bell
    // bellSoundURL: 'http://example.com/bell.mp3',

    // Whether to use the WebGL renderer. Set it to false to use canvas-based
    // rendering (slower, but supports transparent backgrounds)
    webGLRenderer: false,

    // for advanced config flags please refer to https://hyper.is/#cfg
  },

  // a list of plugins to fetch and install from npm
  plugins: ["hyper-font-ligatures", "hyper-search", "hypercwd", "hyper-pane"],

  // `~/.hyper_plugins/local/` plugins
  localPlugins: [],

  keymaps: {
    // Example: 'window:devtools': 'cmd+alt+o',
  },
};
