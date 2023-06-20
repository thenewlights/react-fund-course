import About from "../pages/About"
import Login from "../pages/Login"
import Posts from "../pages/Pages"
import PostIdPage from "../pages/PostIdPage"

export const privateRoutes = [
    { path: '/about', component: About },
    { path: '/posts', component: Posts },
    { path: '/posts/:id', component: PostIdPage },
]
export const publicRoutes = [
    { path: '/login', component: Login },
]
