import React from "react"
import { Route } from "react-router-dom"
import { Header } from "./components/Header"
import { HomePage } from "./pages/HomePage"
import { Footer } from "./components/Footer"
import { About } from "./pages/About"
import { DesignerCollections } from "./pages/DesignerCollections"
import { GallerySeries } from "./pages/GallerySeries"
import { CustomInstallation } from "./pages/CustomInstallations"
import { Contact } from "./pages/Contact"
import { TradeSales } from "./pages/TradeSales"
import { Faq } from "./pages/Faq"

function App() {
  return (
    <>
      <Header />
      <div className="clearfix">
        <Route path="/" exact component={HomePage} />
        <Route path="/about/" exact component={About} />
        <Route path="/designer-collections/" component={DesignerCollections} />
        <Route path="/gallery-series/" component={GallerySeries} />
        <Route path="/custom-installations/" component={CustomInstallation} />
        <Route path="/contact/" component={Contact} />
        <Route path="/trade-sales/" component={TradeSales} />
        <Route path="/faq/" component={Faq} />
      </div>
      <Footer />
    </>
  );
}

export default App;