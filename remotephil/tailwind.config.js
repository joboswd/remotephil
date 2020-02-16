module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    colors: {
      inherit: 'inherit',
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      gray: '#e4e4e4',
      bggray: '#f3f3f4',
      darkgray: '#dcdcdc',
      lightgray: '#C9C9C9',
      lightteal: '#63CEE2',
      skyblue: '#f3fbfd',
      // Colours should be derived from primary, secondary, tertiary etc as defined in style guide. Multi-tenancy sites expect colours to be defined as primary, secondary, and light, dark etc.
      primary: {
        default: '#0b0f7b',
        light: '#F0904D',
        dark: '#333333',
        teal: '#2d7b8a',
        violet: '#69498F',
        gray: '#707070',
        red: '#FF0000',
        bluegray: '#3E4A55',
        green: '#1CAF38'
      },
      secondary: {
        default: '#ebebebe',
        light: '#fdfdfd',
        dark: '#0b0b0b',
        teal: '#3992A5',
        violet: '#A87BC9',
        gray: '#7D7D7D',
        bluegray: '#788C99',
        red: '#FF5C5C'
      },
      tertiary: {
        default: '#ff9999',
        light: '#f7f7f7',
        dark: '#dd5555',
        teal: '#EEF2F4',
        gray: '#E8E8E8'
      }
    },
    // Sizing Starts Here - Sizes are grouped by type. Default sizes are to be made in REMS.
    // Avoid adding pixel classes unless necessary. Only use when pixel accuracy is required for less than 10px.
    pixelSizes: {
      '1px': '1px',
      '2px': '2px',
      '3px': '3px',
      '5px': '5px',
      '8px': '8px',
      '10px': '10px',
      '12px': '12px',
      '14px': '14px',
      '1400px': '1400px',
      /* Custom */
      '0px': '0px'
    },
    // Default Spacing and Sizing. Must be multiple of 0.25rem - no exceptions.
    remSizes: {
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '7': '1.75rem',
      '8': '2rem',
      '9': '2.25rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '32': '8rem',
      '40': '10rem',
      '48': '12rem',
      '56': '14rem',
      '64': '16rem',
      '96': '24rem', // custom Product card max width
      '102': '31.25rem',
      // Custom
      '3.5': '0.875rem',
      '35': '8.75rem'
    },
    // Decimal percentages. Avoid adding classes that are similar to horizontal spacing
    percentageSizes: {
      '10%': '10%',
      '20%': '20%',
      '30%': '30%',
      '40%': '40%',
      '50%': '50%',
      '60%': '60%',
      '70%': '70%',
      '80%': '80%',
      '90%': '90%',
      '100%': '100%'
    },
    // Avoid using unless component depends on vertical screen size
    verticalSizes: {
      '10vh': '10vh',
      '20vh': '20vh',
      '30vh': '30vh',
      '40vh': '40vh',
      '50vh': '50vh',
      '60vh': '60vh',
      '70vh': '70vh',
      '80vh': '80vh',
      '90vh': '90vh',
      '100vh': '100vh'
    },
    // Do no edit or modify horizontal spacing
    horizontalSizes: {
      '1/2': '50%',
      '1/3': '33.33333%',
      '2/3': '66.66667%',
      '1/4': '25%',
      '2/4': '50%',
      '3/4': '75%',
      '1/5': '20%',
      '2/5': '40%',
      '3/5': '60%',
      '4/5': '80%',
      '1/6': '16.66667%',
      '2/6': '33.33333%',
      '3/6': '50%',
      '4/6': '66.66667%',
      '5/6': '83.33333%',
      '1/12': '8.33333%',
      '2/12': '16.66667%',
      '3/12': '25%',
      '4/12': '33.33333%',
      '5/12': '41.66667%',
      '6/12': '50%',
      '7/12': '58.33333%',
      '8/12': '66.66667%',
      '9/12': '75%',
      '10/12': '83.33333%',
      '11/12': '91.66667%'
    },

    // This calls the spacing classes above into a single variable
    sizing: theme => ({
      auto: 'auto',
      inherit: 'inherit',
      '0': '0px',
      ...theme('pixelSizes'),
      ...theme('remSizes'),
      ...theme('percentageSizes'),
      ...theme('verticalSizes'),
      ...theme('horizontalSizes')
    }),

    fontSize: theme => theme('sizing'),
    lineHeight: theme => theme('sizing'),
    borderRadius: theme => theme('sizing'),
    borderWidth: theme => theme('sizing'),
    height: theme => theme('sizing'),
    width: theme => theme('sizing'),
    minWidth: theme => theme('sizing'),
    maxWidth: theme => theme('sizing'),
    minHeight: theme => theme('sizing'),
    maxHeight: theme => theme('sizing'),
    padding: theme => theme('sizing'),
    margin: (theme, { negative }) => ({
      ...theme('sizing'),
      ...negative(theme('sizing'))
    }),

    // We should not modify letter spacing unless absolutely necessary. Standard web typography should not use custom letter Spacings.
    letterSpacing: (theme, { negative }) => ({
      ...theme('pixelSizes'),
      ...negative(theme('pixelSizes'))
    }),

    // For mobile, use no selector. For tablet use md:, for laptop use lg:, and for desktop use xl: If responsive columns for large screens are required, add xxl: 1600px
    screens: {
      md: '720px',
      lg: '992px',
      xl: '1200px',
      xxl: '1366px'
    },

    // For sitewide font, use @apply on Tailwind.css file
    fontFamily: {
      openSans: '"Open Sans"',
      roboto: '"Roboto"',
      inter: '"Inter", sans-serif'
    },

    // Instead of using normal, bold, etc, use the actual font-weight. Follow the style guide.
    fontWeight: {
      '100': '100',
      '200': '200',
      '300': '300',
      '400': '400',
      '500': '500',
      '600': '600',
      '700': '700',
      '800': '800',
      '900': '900'
    },

    borderColor: theme => theme('colors'),
    textColor: theme => theme('colors'),
    backgroundColor: theme => theme('colors'),

    positions: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top'
    },

    backgroundPosition: theme => theme('positions'),
    objectPosition: theme => theme('positions'),

    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain'
    },

    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      'not-allowed': 'not-allowed'
    },

    boxShadow: {
      default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      none: 'none',
      bottom: '0 0px 12px -2px  rgba(0, 0, 0, 0.25)',
      /* Custom */
      'box': '0 0 6px rgba(0, 0, 0, 0.16)'
    },
    zIndex: {
      auto: 'auto',
      '0': '0',
      '10': '10',
      '20': '20',
      '30': '30',
      '40': '40',
      '50': '50',
      '60': '60',
      '70': '70',
      '80': '80',
      '90': '90'
    },
    opacity: {
      '0': '0',
      '25': '0.25',
      '50': '0.5',
      '75': '0.75',
      '100': '1'
    },
    fill: {
      current: 'currentColor'
    },
    stroke: {
      current: 'currentColor'
    },
    flex: {
      '1': '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none'
    },
    flexGrow: {
      '0': '0',
      default: '1'
    },
    flexShrink: {
      '0': '0',
      default: '1'
    },
    order: {
      first: '-9999',
      last: '9999',
      none: '0',
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
      '8': '8',
      '9': '9',
      '10': '10'
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal'
    },
    inset: (theme) => ({
      ...theme('pixelSizes'),
      ...theme('remSizes')
    }),
    container: {}
  },
  variants: {
    appearance: ['responsive'],
    backgroundAttachment: ['responsive', 'hover', 'focus'],
    backgroundColor: ['responsive', 'hover', 'focus', 'important'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive', 'important'],
    borderCollapse: ['responsive'],
    borderColor: ['responsive', 'hover', 'focus', 'important'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidth: ['responsive', 'hover', 'focus', 'important'],
    cursor: ['responsive'],
    display: ['responsive', 'important'],
    flexDirection: ['responsive'],
    flexWrap: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    justifyContent: ['responsive', 'hover', 'focus', 'important'],
    alignContent: ['responsive', 'hover', 'focus'],
    flex: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    order: ['responsive'],
    float: ['responsive'],
    fontFamily: ['responsive'],
    fontWeight: ['responsive', 'hover', 'focus', 'important'],
    height: ['responsive', 'important'],
    lineHeight: ['responsive', 'important'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive', 'important'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive', 'important'],
    minWidth: ['responsive', 'important'],
    objectFit: ['responsive'],
    objectPosition: ['responsive'],
    opacity: ['responsive'],
    outline: ['responsive', 'focus'],
    overflow: ['responsive', 'important', 'hover'],
    padding: ['responsive', 'important'],
    pointerEvents: ['responsive'],
    position: ['responsive', 'important'],
    inset: ['responsive', 'important'],
    resize: ['responsive'],
    boxShadow: ['responsive', 'hover', 'focus', 'important'],
    fill: ['responsive'],
    stroke: ['responsive'],
    tableLayout: ['responsive'],
    textAlign: ['responsive', 'important'],
    textColor: ['responsive', 'hover', 'focus', 'active', 'important'],
    fontSize: ['responsive', 'hover', 'focus', 'active', 'important'],
    fontStyle: ['responsive', 'important'],
    textTransform: ['responsive', 'important'],
    textDecoration: ['responsive', 'hover', 'focus'],
    fontSmoothing: ['responsive'],
    letterSpacing: ['responsive'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive', 'important'],
    whitespace: ['responsive', 'hover'],
    wordBreak: ['responsive'],
    width: ['responsive', 'important'],
    zIndex: ['responsive', 'important']
  },
  corePlugins: {},
  plugins: [
    function ({ addVariant, e }) {
      addVariant('important', ({ container }) => {
        container.walkRules(rule => {
          rule.selector = `.\\!${rule.selector.slice(1)}`
          rule.walkDecls(decl => {
            decl.important = true
          })
        })
      })
      addVariant('placeholder', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`placeholder${separator}${className}`)}:placeholder`
        })
      })
    }
  ]
}
