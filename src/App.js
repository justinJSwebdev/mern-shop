import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { routes } from "./routes";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import MainLayout from "./layouts/MainLayout/MainLayout";
import { ConfigProvider } from 'antd';

function App() {
  return (

    <BrowserRouter>
      <Routes>

        {routes.map((route, index) => {
          const Page = route.page
          return (
            <Route key={index} path={route.path} element={
              <ConfigProvider theme={{
                token: {
                  fontFamily: 'Montserrat'
                }
              }}>
                <MainLayout>
                  <Page></Page>
                </MainLayout>
              </ConfigProvider>
            }></Route>
          )
        })}

        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
