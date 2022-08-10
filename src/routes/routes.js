// layouts
import config from '~/config';
import { HeaderOnly } from '~/layouts';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';


// Chứa những routes không cần đăng nhập vẫn xem được
const publicRoutes = [
    { path: config.router.home, components: Home },
    { path: config.router.following, components: Following },
    { path: config.router.profile, components: Profile }, // Cái path nào có kí tự là /@.... sẽ lọt vào trang profile
    { path: config.router.upload, components: Upload, layout: HeaderOnly },
    { path: config.router.search, components: Search, layout: null },
    { path: config.router.live, components: Live },

];

// Chứa những routes cần đăng nhập
const privateRoutes = [];

export { privateRoutes, publicRoutes };
 