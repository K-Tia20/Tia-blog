import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import Graph from "./Graph"
// @ts-ignore
import script from "./scripts/graph.inline"
import style from "./styles/graph.scss"

const GraphComponent = Graph()

const GraphForNormal: QuartzComponent = (props: QuartzComponentProps) => {
  const slug = props.fileData.slug ?? ""
  if (slug === "index") return null

  return <GraphComponent {...props} />
}

GraphForNormal.css = style
GraphForNormal.afterDOMLoaded = script

export default (() => GraphForNormal) satisfies QuartzComponentConstructor
