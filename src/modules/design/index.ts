import { VueModule } from 'vue-modules'
import { Router } from 'vue-router'
import routes from './router'
import { App } from 'vue';

export class DesignModule implements VueModule {
  readonly name = 'design'
  constructor(private router: Router) {}

  install(app: App) {
    this.router.addRoute('app', routes[0]);
  }
}