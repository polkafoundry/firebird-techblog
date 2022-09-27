import FooterDefaultLayout from "../Base/FooterDefaultLayout"
import HeaderLandingLayout from "../Base/HeaderLandingLayout"
import MainDefaultLayout from "../Base/MainDefaultLayout"

type LayoutProps = {
  children?: any
}
const LandingLayout = (props: LayoutProps) => {
  const { children } = props

  return (
    <>
      <HeaderLandingLayout />
      <MainDefaultLayout>{children}</MainDefaultLayout>
      <FooterDefaultLayout />
    </>
  )
}

export default LandingLayout
