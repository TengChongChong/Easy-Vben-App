import type { App } from 'vue';

import { Button, Form, Field, CellGroup } from 'vant';

export function registerGlobComp(app: App) {
  app.use(Button).use(Form).use(Field).use(CellGroup);
}
