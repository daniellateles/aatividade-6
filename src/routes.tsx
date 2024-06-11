import Home from './components/home/Home.tsx'
import Sobre from './components/about/About.tsx'
import { createBrowserRouter } from 'react-router-dom'
import Tarefas from './components/tasks/Tasks.tsx'
import NotFound from './components/not-found/index.tsx'

const router = createBrowserRouter([
    { path: '/', element: <Home />, errorElement: <NotFound />},
    { path: '/sobre', element: <Sobre />},
    { path: '/tarefas', element: <Tarefas />}
])

export default router