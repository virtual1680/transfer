/**
 *
 *mac
 *2020/9/4
 *495301515@qq.com
 */
import QTransfer from './highLevelTransfer.vue'

QTransfer.install = (app) => {
  console.log("00000=0=0=0=0=0");
  app.component(QTransfer.name, QTransfer);
};

export default QTransfer
