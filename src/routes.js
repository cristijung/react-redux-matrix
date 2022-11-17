import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PaginaPadrao from 'comonents/PaginaPadrao';

export default function Router () {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PaginaPadrao/>} />
                <Route index element={<div style={{color:'#fff'}}>Home......</div>} />
            </Routes>
        </BrowserRouter>
    )
}