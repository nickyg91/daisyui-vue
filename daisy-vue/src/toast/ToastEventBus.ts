import EventBus from '@/events/EventBus';

class ToastEventBus {
  private static instance: EventBus;

  private constructor() {}

  static getInstance(): EventBus {
    if (!ToastEventBus.instance) {
      ToastEventBus.instance = new EventBus();
    }
    return ToastEventBus.instance;
  }
}
export default ToastEventBus.getInstance();
