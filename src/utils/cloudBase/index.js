// 腾讯云API
import { env } from './constant';
import cloudbase from '@cloudbase/js-sdk';

export const app = cloudbase.init({
  env: env,
});

export const db = app.database();
export const _ = db.command;