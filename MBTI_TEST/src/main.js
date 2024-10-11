import { createApp } from 'vue';
import App from './App.vue';
import './styles/global.scss';
import router from './router/index';
import 'element-plus/es/components/message/style/css';
import { ElMessage } from 'element-plus';
const app = createApp(App);
app.use(router);
app.mount('#app');
