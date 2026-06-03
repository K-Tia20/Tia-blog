import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import Graph from "./Graph"
// @ts-ignore
import script from "./scripts/graph.inline"
import style from "./styles/graph.scss"

const GraphComponent = Graph({
  localGraph: {
    drag: true,
    zoom: true,
    depth: -1,
    scale: 1,
    repelForce: 0.5,
    centerForce: 0.3,
    linkDistance: 30,
    fontSize: 0.6,
    opacityScale: 1,
    removeTags: [],
    showTags: true,
    enableRadial: true,
  },
})

const GraphForIndex: QuartzComponent = (props: QuartzComponentProps) => {
  const slug = props.fileData.slug ?? ""
  if (slug !== "index") return null

  return <GraphComponent {...props} />
}

GraphForIndex.css = style
GraphForIndex.afterDOMLoaded = script

export default (() => GraphForIndex) satisfies QuartzComponentConstructor
