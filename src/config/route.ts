import Index from "../pages/Index.vue";
import TeamPage from "../pages/TeamPage.vue";
import SearchPage from "../pages/SearchPage.vue";
import UserPage from "../pages/UserPage.vue";
import EditUserPage from "../pages/UserEditPage.vue";
import SearchResultPage from "../pages/SearchResultPage.vue";
import UserLoginPage from "../pages/UserLoginPage.vue";
import TeamAddPage from "../pages/TeamAddPage.vue";


// 定义一些路由
const routes = [
    {path: '/', component: Index},
    {path: '/team', component: TeamPage},
    {path: '/user', component: UserPage},
    {path: '/search', component: SearchPage},
    {path: '/user/list', component: SearchResultPage},
    {path: '/user/edit', component: EditUserPage},
    {path: '/user/login', component: UserLoginPage},
    {path: '/team/add', component: TeamAddPage},


]

export default routes;