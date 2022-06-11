import { useRoutes,Navigate } from 'react-router-dom';

// 自定义
import Home from '@/pages/home';
import Note from '@/pages/notes';
import AddNote from '@/pages/add-note';
import Picture from '@/pages/pic';
import AddGallery from '@/pages/add-gallery';
import Message from '@/pages/message';
import AddMessage from '@/pages/add-message';
import About from '@/pages/about';


function RoutesMap() {
    const routes = useRoutes([
        {path: '/admin', element: <Navigate to='/admin/home' />},
        {path: '/admin/home', element: <Home />},
        {path: '/admin/note', element: <Note />},
        {path: '/admin/addNote', element: <AddNote />},
        {path: '/admin/pic', element: <Picture />},
        {path: '/admin/addGallery', element: <AddGallery />},
        {path: '/admin/msg', element: <Message />},
        {path: '/admin/addMsg', element: <AddMessage />},
        {path: '/admin/about', element: <About />}
    ])
    return routes;
}

export default RoutesMap;