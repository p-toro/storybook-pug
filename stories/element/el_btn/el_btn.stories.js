import { storiesOf } from '@storybook/html'
import copyCodeBlock from '@pickra/copy-code-block'
import './el_btn.scss'

import el_btn_normal from './el_btn_normal.pug'
// import el_btn_normal_pug from '!html-loader!./el_btn_normal.pug'
const el_btn_normal_pug =`
button.el_btn normal
button.el_btn.el_btn__sm normal
button.el_btn.el_btn__md normal
button.el_btn.el_btn__lg normal
`

import el_btn_primary from './el_btn_primary.pug'
// import el_btn_primary_pug from '!html-loader!./el_btn_primary.pug'
const el_btn_primary_pug =`
button.el_btn.el_btn__primary primary
button.el_btn.el_btn__primary.el_btn__sm primary
button.el_btn.el_btn__primary.el_btn__md primary
button.el_btn.el_btn__primary.el_btn__lg primary
`

import el_btn_secondary from './el_btn_secondary.pug'
// import el_btn_secondary_pug from '!html-loader!./el_btn_secondary.pug'
const el_btn_secondary_pug =`
button.el_btn.el_btn__secondary secondary
button.el_btn.el_btn__secondary.el_btn__sm secondary
button.el_btn.el_btn__secondary.el_btn__md secondary
button.el_btn.el_btn__secondary.el_btn__lg secondary
`

storiesOf('el_btn', module)
  .add('normal', () => el_btn_normal + copyCodeBlock(el_btn_normal_pug))
  .add('primary', () => el_btn_primary + copyCodeBlock(el_btn_primary_pug))
  .add('secondary', () => el_btn_secondary + copyCodeBlock(el_btn_secondary_pug))
