// @ts-ignore
import clipboardScript from "./scripts/clipboard.inline"
import clipboardStyle from "./styles/clipboard.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import particleScript from "./scripts/particle.inline"
const Body: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return (
    <div id="quartz-body">
      {/*<div class="scanlines"></div>
      <div class="c-grid"></div>
      <div class="particles" id="particles"></div>*/}
      <div className="scanlines" />

      {/* Lab Grid Background */}
      <div className="c-grid" />

      {/* Floating Particles */}

      <div class="particles" id="particles"></div>

      {children}
    </div>
  )
}
;((Body.afterDOMLoaded = particleScript), clipboardScript,)

Body.css = clipboardStyle

export default (() => Body) satisfies QuartzComponentConstructor
