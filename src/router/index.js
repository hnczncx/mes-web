import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [{
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },



 
  // 综合看板
  {
    path: '/show',
    meta: {
      title: '综合看板',
      icon: 'form'
    },
    component: () => import('@/views/show/index')
  },
  // 综合看板

  {
    path: '/show/ceshi',
    meta: {
      title: '看板测试',
      icon: 'form'
    },
    component: () => import('@/views/show/ceshi')
  },
  // 看板跳转测试-自适应测试
  {
    path: '/show/zsyceshi',
    component: () => import('@/views/show/zsyceshi'),
  },
  {
    path: '/show/index',
    component: () => import('@/views/show/index'),
  },
  {
    path: '/show/CAD',
    component: () => import('@/views/show/CAD'),
  },
  {
    path: '/show/MES',
    component: () => import('@/views/show/MES'),
  },
  {
    path: '/show/PLM',
    component: () => import('@/views/show/PLM'),
  },
  {
    path: '/show/BIM',
    component: () => import('@/views/show/BIM'),
  },
  // 测试



  {
    path: '/task',
    component: Layout,
    children: [{
      path: 'index',
      name: 'task',
      component: () => import('@/views/task/index'),
      meta: {
        title: '任务管理',
        icon: 'form'
      }
    }]
  },
  {
    path: '/equipment',
    component: Layout,
    children: [{
      path: '/equipment/index',
      name: 'Form',
      component: () => import('@/views/equipment/index'),
      meta: {
        title: '设备监控',
        icon: 'form'
      }
    }]
  },

  {
    path: '/Process',
    component: Layout,
    redirect: '/Process/BOM',
    name: 'Example',
    meta: {
      title: '工艺清单',
      icon: 'el-icon-s-help'
    },
    children: [

      {
        path: '/Process/BOM',
        name: 'Tree',
        component: () => import('@/views/Process/BOM'),
        meta: {
          title: 'BOM管理',
          icon: 'tree'
        }
      },
      {
        path: '/Process/CAPP',
        name: 'Table',
        component: () => import('@/views/Process/CAPP'),
        meta: {
          title: 'CAPP管理',
          icon: 'table'
        }
      },
      {
        path: '/Process/drawing',
        name: 'Table',
        component: () => import('@/views/Process/drawing'),
        meta: {
          title: '图纸信息',
          icon: 'table'
        }
      }
    ]
  },
  {
    path: '/machining',
    component: Layout,
    redirect: '/machining/gygl',
    name: 'Example',
    meta: {
      title: '加工管理',
      icon: 'el-icon-s-help'
    },
    children: [

      {
        path: '/machining/gygl',
        name: 'Tree',
        component: () => import('@/views/machining/gygl'),
        meta: {
          title: '工艺管理',
          icon: 'tree'
        }
      },
      {
        path: '/machining/ddgl',
        name: 'Table',
        component: () => import('@/views/machining/ddgl'),
        meta: {
          title: '订单管理',
          icon: 'table'
        }
      },
      {
        path: '/machining/cxgl',
        name: 'Table',
        component: () => import('@/views/machining/cxgl'),
        meta: {
          title: '程序管理',
          icon: 'table'
        }
      }

    ]
  },

  {
    path: '/measure',
    component: Layout,
    redirect: '/measure/clxx',
    name: 'Nested',
    meta: {
      title: '测量和刀具',
      icon: 'nested'
    },
    children: [{
        path: '/measure/clxx',
        component: () => import('@/views/measure/clxx'), // Parent router-view
        name: 'Menu1',
        meta: {
          title: '测量信息',
          icon: 'table'
        },

      },
      {
        path: '/measure/djxx',
        component: () => import('@/views/measure/djxx'),
        name: 'Menu2',
        meta: {
          title: '刀具信息',
          icon: 'table'
        }
      }
    ]
  },
  {
    path: '/Probe',
    component: Layout,
    redirect: '/Probe/jccs',
    name: 'Probe',
    meta: {
      title: '测试界面',
      icon: 'nested'
    },
    children: [{
        path: '/Probe/jccs',
        component: () => import('@/views/Probe/jccs'), // Parent router-view
        name: 'Jccs',
        meta: {
          title: '机床测试',
          icon: 'table'
        },

      },
      {
        path: '/Probe/zxjc',
        component: () => import('@/views/Probe/zxjc'),
        name: 'Zxjc',
        meta: {
          title: '在线检测',
          icon: 'table'
        }
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    children: [{
      path: '/log',
      name: 'Form',
      component: () => import('@/views/log'),
      meta: {
        title: '日志信息',
        icon: 'form'
      }
    }]
  },
  {
    path: '/',
    component: Layout,
    children: [{
      path: '/treeTabceshi',
      name: 'Form',
      component: () => import('@/views/treeTabceshi'),
      meta: {
        title: '树形表格测试',
        icon: 'form'
      }
    }]
  },
 
  {
    path: '/',
    component: Layout,
    children: [{
      path: '/frombf',
      name: 'Form',
      component: () => import('@/views/frombf'),
      meta: {
        title: '表单备份',
        icon: 'form'
      }
    }]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: {
        title: '首页',
        icon: 'dashboard'
      }
    }]
  },

  // 404 page must be placed at the end !!!
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
