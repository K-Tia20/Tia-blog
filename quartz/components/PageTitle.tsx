import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import gearScrollScript from "./scripts/gear-scroll.inline"

interface PixelGearProps {
  size?: number
  color?: string
}
export function PixelGear({ color = "#6b7280" }: PixelGearProps) {
  return (
    <svg id="page-title-gear" viewBox="0 0 32 32" class="pixel-gear">
      <g fill={color}>
        <rect x="12" y="12" width="8" height="8" />
        <rect x="14" y="2" width="4" height="6" />
        <rect x="24" y="14" width="6" height="4" />
        <rect x="14" y="24" width="4" height="6" />
        <rect x="2" y="14" width="6" height="4" />
        <rect x="22" y="6" width="4" height="4" />
        <rect x="22" y="22" width="4" height="4" />
        <rect x="6" y="22" width="4" height="4" />
        <rect x="6" y="6" width="4" height="4" />
        <rect x="10" y="14" width="2" height="4" />
        <rect x="20" y="14" width="2" height="4" />
        <rect x="14" y="10" width="4" height="2" />
        <rect x="14" y="20" width="4" height="2" />
        <rect x="14" y="14" width="4" height="4" fill="none" />
      </g>
    </svg>
  )
}

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    // <h2 onClick={() => (location.href = baseDir)} class="page-title  glitch" data-text={title}>
    //   <a href={baseDir}>{title}</a>
    // </h2>
    <a href={baseDir} id="PageTitle">
      <PixelGear color="#3cd2a5" />
      <div>
        <h2 class="page-title glitch" data-text={title}>
          {title}
        </h2>
      </div>
    </a>
  )
}
PageTitle.afterDOMLoaded = gearScrollScript

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
  color:#3cd2a5
}
.pixel-gear {
  transform-origin: center;
  transition: transform 0.08s linear;
  flex-shrink: 0;
}
#PageTitle {
display:flex;
align-items: center;
gap:1rem;

}

#PageTitle  > *  {
height:3rem;
display: flex;
align-items: center;

}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
