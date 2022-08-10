import { Fragment } from 'react'; // Fragment không sinh ra element trong dom chỉ là thẻ chứa thôi
import { BrowserRouter as Roter, Routes, Route } from 'react-router-dom';
// Roter, Routes, Route = Routes,Route,link
import { publicRoutes } from '~/routes';
// Gọi ra publicRoutes, publicRoutes là 1 mảng lên ta sẽ lặp qua nó để lấy ra các routes ở dưới
import DefaultLayout from '~/layouts';

function App() {
    return (
        <Roter>
            <div className="App">
                <Routes>

                    {publicRoutes.map((route, index) => {
                        const Page = route.components; // để nhận được 1 component ta phải lm như này

                        let Layout = DefaultLayout; // Mặc định sẽ lấy thằng này làm layout mặc định
                        
                        if (route.layout) {
                            Layout = route.layout; // Nếu có layout thì sẽ lấy layout đó
                        } else if (route.layout === null) {
                            Layout = Fragment; // nếu layout là null thì sẽ lấy Fragment
                        }

                        //lặp qua publicRoutes Nếu route.layout === null thì 0 lấy DefaultLayout nữa không có thì sẽ lấy thằng DefaultLayout gán vào biến Layout
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        {' '}
                                        <Page />{' '}
                                    </Layout>
                                }
                            />
                        );
                        // Page trở thành chidren của Layout (Layout này chính là DefaultLayout ở folder Layout và nó nhận đc Page = children này)
                    })}
                </Routes>
            </div>
        </Roter>
    );
}

export default App;
