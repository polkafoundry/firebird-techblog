import type { NextPage } from "next"
import LandingLayout from "../components/Layouts/LandingLayout"
import LandingPage from "../components/Pages/LandingPage"
import styles from "../styles/Home.module.css"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <LandingLayout
        title="The Firebird Blog"
        description="Where you can discover Firebird-related news, including updates, research, analytics, events, partnerships, technological knowledge, etc."
      >
        <LandingPage />
      </LandingLayout>
    </div>
  )
}

export default Home
