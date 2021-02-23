module.exports = {
  // 実際に使われているクラスだけビルド時CSSに含める設定。gatsby-plugin-purgecssで行うのfalse
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
