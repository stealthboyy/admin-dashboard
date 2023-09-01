import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import {Routes, Route } from "react-router-dom";
import Topbar from "./Homepage/global/topbar";
import Sidebar from "./Homepage/global/sidebar";
import Dashboard from "./Homepage/dashboard";
import Team from "./Homepage/team"
import Contacts from "./Homepage/contacts"
import Invoice from "./Homepage/invoices";
import Form from "./Homepage/form";
// import Bar from "./Homepage/bar"
// import Pie from "./Homepage/pie"
import FAQ from "./Homepage/faq"
import Settings from "./Homepage/admin_settings";
import Calendar from "./Homepage/calendar"


function App() {
  const [theme, colorMode] = useMode();

  return ( 
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app">
          <Sidebar/>
          <main className="content">
          <Topbar/>
          <Routes>
            <Route path="/" element={<Dashboard/>}></Route>
            <Route path="/team" element= {<Team/>}></Route>
            <Route path="/contacts"  element= {<Contacts/>} ></Route>
            <Route path="/invoices" element= {<Invoice/>}></Route>
            <Route path="/form" element={<Form/>}></Route>

            {/* <Route path="/"><Bar/></Route> */}
            {/* <Route path="/"><Line/></Route> */}
            {/* <Route path="/"><Pie/></Route> */}
            <Route path="/faq" element={<FAQ/>} ></Route>
            <Route path="/admin_settings" element = {<Settings/>}></Route>
            <Route path="/calendar" element={<Calendar/>}></Route>
          </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
     )
}

export default App;
