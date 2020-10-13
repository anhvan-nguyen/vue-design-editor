import { App } from 'vue';

import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';

export default {
  install: (app: App) => {
    //components
    app.use(Antd);
  }
}