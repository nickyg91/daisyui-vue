import { createApp } from 'vue';
import App from './App.vue';
import './styles.css';
import ToastService from './toast/plugins/ToastService';
import DynamicModalService from './modal/plugins/DynamicModalService';

const app = createApp(App);
app.use(ToastService);
app.use(DynamicModalService);
app.mount('#app');
