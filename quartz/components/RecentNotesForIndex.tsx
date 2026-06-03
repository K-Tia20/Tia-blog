import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { PageList, byDateAndAlphabetical } from "./PageList"

const PageListForIndex: QuartzComponent = (props: QuartzComponentProps) => {
  const slug = props.fileData.slug ?? ""
  const isHome = slug === "index"

  if (!isHome) return null

  return (
    <div class="recent-notes">
      <PageList {...props} limit={20} sort={byDateAndAlphabetical(props.cfg)} />
    </div>
  )
}

export default (() => PageListForIndex) satisfies QuartzComponentConstructor
