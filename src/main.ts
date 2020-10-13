import antd from '@/plugins/antd';

import registerVueModule from '@/core';

import { DesignModule } from '@/modules/design'

// import '@/styles/main.scss';

registerVueModule({
  ...antd
}, [
  DesignModule
]);

