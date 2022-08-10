import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { selectAuth } from "./store/slices/authSlice";
import Layout from "./layout/Layout";
import Privatelayout from "./layout/Privatelayout";
import { publicRoutes, privateRoutes } from "./router";

function App() {
    const { isAuth } = useSelector(selectAuth);

    if (isAuth) {
        return (
            <Privatelayout>
                <Routes>
                    {privateRoutes.map((i) => (
                        <Route
                            path={i.path}
                            element={i.element}
                            key={i.element}
                        />
                    ))}
                </Routes>
            </Privatelayout>
        );
    }

    return (
        <Layout>
            <Routes>
                {publicRoutes.map((i) => (
                    <Route path={i.path} element={i.element} key={i.element} />
                ))}
            </Routes>
        </Layout>
    );
}

export default App;
