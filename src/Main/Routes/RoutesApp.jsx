import { Routes, Route } from 'react-router-dom';
import { Navbar } from '../Components';
import { Home } from '../Pages';

export const RoutesApp = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='home' element={<Home />} />
            </Routes>
        </>
    )
}
