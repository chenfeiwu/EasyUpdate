export default [
    {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
            {
                path: '/user',
                redirect: '/user/login'
            },
            {
                path: '/user/login',
                name: 'login',
                component: './User/Login'
            },
            {
                path: '/user/register',
                name: 'register',
                component: './User/Register'
            },
            {
                path: '/user/register-result',
                name: 'register.result',
                component: './User/RegisterResult'
            },
            {
                component: '404'
            }
        ]
    },
    {
        path: '/',
        component: '../layouts/BasicLayout',
        Routes: [
            'src/pages/Authorized'
        ],
        routes: [
			// dashboard
			{ path: '/', redirect: '/index', authority: ['admin', 'user'] },
			{ path: '/index', component: './Dev' },
			{
				name: 'server',
				icon: 'database',
				path: '/server',
				routes: [
					{
						path: '/server/list',
						name: 'list',
						component: './Dev',
					},
				],
			},
			{
				name: 'update',
				icon: 'sync',
				path: '/update',
				routes: [
					{
						path: '/update/list',
						name: 'list',
						component: './Dev',
					},
					{
						path: '/update/script',
						name: 'script',
						component: './Dev',
					}
				],
			},
			{
				name: 'log',
				icon: 'file-text',
				path: '/log',
				routes: [
					{
						path: '/log/updateLog',
						name: 'upddateLog',
						component: './Dev',
					}
				],
			},
			{
				name: 'monitor',
				icon: 'desktop',
				path: '/monitor',
				routes: [
					{
						path: '/monitor/list',
						name: 'list',
						component: './Dev',
					}
				],
			},
            {
                name: 'account',
                icon: 'user',
                path: '/account',
                routes: [
                    {
                        path: '/account/center',
                        name: 'center',
                        component: './Account/Center/Center',
                        routes: [
                            {
                                path: '/account/center',
                                redirect: '/account/center/articles'
                            },
                            {
                                path: '/account/center/articles',
                                component: './Account/Center/Articles'
                            },
                            {
                                path: '/account/center/applications',
                                component: './Account/Center/Applications'
                            },
                            {
                                path: '/account/center/projects',
                                component: './Account/Center/Projects'
                            }
                        ]
                    },
                    {
                        path: '/account/settings',
                        name: 'settings',
                        component: './Account/Settings/Info',
                        routes: [
                            {
                                path: '/account/settings',
                                redirect: '/account/settings/base'
                            },
                            {
                                path: '/account/settings/base',
                                component: './Account/Settings/BaseView'
                            },
                            {
                                path: '/account/settings/security',
                                component: './Account/Settings/SecurityView'
                            },
                            {
                                path: '/account/settings/binding',
                                component: './Account/Settings/BindingView'
                            },
                            {
                                path: '/account/settings/notification',
                                component: './Account/Settings/NotificationView'
                            }
                        ]
                    }
                ]
            },
            {
                component: '404'
            }
        ]
    }
];
