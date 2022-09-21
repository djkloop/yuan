import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    './src/index'
  ],
  rollup: {
    emitCJS: true,
  },
  name: 'types',
  // stub: true,
  declaration: true
})
