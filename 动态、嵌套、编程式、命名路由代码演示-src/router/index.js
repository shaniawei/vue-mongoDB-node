import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import luyou from '@/components/luyou'
import child from '@/components/child'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: home
                // components: {
                //     // 命名视图
                //     default: home,
                //     luyou: luyou,
                //     child: child
                // }
        },
        {
            path: '/luyounoparams',
            name: 'luyounoparams',
            component: luyou,
            children: [{ //嵌套路由
                path: 'child',
                name: 'child',
                component: child
            }]
        },
        {
            path: '/luyouhasparams/:id',
            name: 'luyouhasparams',
            component: luyou
        }
    ]
})