export default {
    routes: [{
        path: '/',
        component: '../layout',
        routes: [
            {
                path: 'hello',
                component: './Hello'
            }
        ]
    }],

    plugins: [
        ['umi-plugin-react', {
            antd: true
        }],
    ],

};