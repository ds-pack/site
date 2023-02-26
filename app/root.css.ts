import { vars } from '@ds-pack/components'
import { globalStyle, style } from '@vanilla-extract/css'

export let well = style({
  width: '35ch',
  margin: '0 auto',
})

export let callout = style({
  border: 'solid 2px',
  borderColor: vars.colors.green800,
  backgroundColor: vars.colors.green300,
  color: vars.colors.black,
  padding: vars.space[4],
  borderRadius: vars.radii.small,
})

globalStyle(':target', {
  boxShadow: `-4px 0 0 ${vars.colors.green400}`,
})
