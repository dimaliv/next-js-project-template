const path = require('path')

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`

const buildStylelintCommand = (filenames) =>
  `stylelint --fix --allow-empty-input ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' && stylelint --fix --allow-empty-input ')}`

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
  '*.{scss}': [buildStylelintCommand],
}
