/*
Title: Admin Panel
Description : Admin Panel
Author: Habibur Rahman Sobuj
Date: 22/04/2022
*/

// import 
import { ThemeProvider } from 'next-themes';
import Router from "./route/Router";

// function define 
function App() {
  console.log(process.env.GENERATE_SOURCEMAP);
  return (
    <>
      <ThemeProvider attribute='class' enableSystem={false}>
        {/* router  */}
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
