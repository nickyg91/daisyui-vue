import { createApp } from 'vue';
import App from './App.vue';
import './styles.css';
import ToastService from './toast/plugins/ToastService';

const app = createApp(App);
app.use(ToastService);
app.mount('#app');
