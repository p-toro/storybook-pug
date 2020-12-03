import { storiesOf } from '@storybook/html'
import copyCodeBlock from '@pickra/copy-code-block'
import './bl_header.scss'

import bl_header_normal from './bl_header_normal.pug'
// import bl_header_normal_pug from '!html-loader!./bl_header_normal.pug'

/*
TODO: テンプレートリテラルにしないと「yarn build-storybook」で<pre>内のコードのスペースや改行が削除されてしまう。
「yarn storybook」では問題なし。
解決法は見つかっていない。
*/

const bl_header_normal_pug  = `
header.bl_header
  .bl_header_box01
    h1.logo
      a(href="#") Logo
  .bl_header_box02
    button.el_btn.el_btn__normal Click
`

storiesOf('bl_header', module)
  .add('normal', () => bl_header_normal + copyCodeBlock(bl_header_normal_pug ))
