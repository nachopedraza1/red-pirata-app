import "./App.scss"
import { Navbar } from "./Main/Components/Navbar"
import { DataProvider } from "./Main/Context/DataProvider"
import { RoutesApp } from "./Main/Routes/RoutesApp"


export const App = () => {
  return (
    <>
      <DataProvider>
        <RoutesApp />
      </DataProvider>
    </>
  )
}

