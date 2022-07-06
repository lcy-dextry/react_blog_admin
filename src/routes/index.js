import { useRoutes,Navigate } from 'react-router-dom';

// 自定义
import Home from '@/pages/home';
import Note from '@/pages/notes';
import Draft from '@/pages/drafts';
import AddNote from '@/pages/add-note';
import AddDraft from '@/pages/add-draft';
import Picture from '@/pages/pic';
import AddGallery from '@/pages/add-gallery';
import Diary from '@/pages/diary';
import AddDiary from '@/pages/add-diary';
import About from '@/pages/about';


function RoutesMap() {
    const routes = useRoutes([
        {path: '', element: <Navigate to='/admin/home' />},
        {path: '/admin', element: <Navigate to='/admin/home' />},
        {path: '/admin/home', element: <Home />},
        {path: '/admin/note', element: <Note />},
        {path: '/admin/draft', element: <Draft />},
        {path: '/admin/addNote', element: <AddNote />},
        {path: '/admin/addNote:id', element: <AddNote />},
        {path: '/admin/addDraft', element: <AddDraft />},
        {path: '/admin/addDraft:id', element: <AddDraft />},
        {path: '/admin/pic', element: <Picture />},
        {path: '/admin/addGallery', element: <AddGallery />},
        {path: '/admin/addGallery:id', element: <AddGallery />},
        {path: '/admin/diary', element: <Diary />},
        {path: '/admin/addDiary', element: <AddDiary />},
        {path: '/admin/about', element: <About />}
    ])
    return routes;
}

export default RoutesMap;