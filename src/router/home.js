/**
 *
 * @method componentPath 路由模块入口
 * @param  {string} name 要引入的文件地址
 * @return {Object}
 */

function componentPath(name) {
  return {
    component: () => import(`../views/${name}.vue`)
  };
}

export default [
  {
    path: "/",
    name: "vue",
    ...componentPath("vue")
  },
  {
    path: "vuex",
    name: "vuex",
    ...componentPath("vuex")
  },
  {
    path: "vueSSR",
    name: "vueSSR",
    ...componentPath("vueSSR")
  }
];
