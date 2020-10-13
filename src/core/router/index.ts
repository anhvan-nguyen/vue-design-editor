import { createRouter, createWebHistory, RouteLocationNormalized } from "vue-router"
import routes from './routes.yaml';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: Function) => {
  if (to.matched.length < 1) {
    if (to.fullPath !== '/') {
      // return 404
    } else {
      return next({
        name: 'design',
      });
    }
  }
  return next();
});

export default router