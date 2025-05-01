import React from "react"
import Layout from "../Layout"
import HeroText from "../HeroText"
import "./HomePage.css"

function HomePage() {
  return (
    <Layout>
      <div className="home-page">
        <HeroText />
      </div>
    </Layout>
  )
}

export default HomePage
