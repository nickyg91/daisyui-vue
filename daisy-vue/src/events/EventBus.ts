export default class EventBus {
  private map: { [key: string]: Set<Function> } = {};

  on(event: string, callback: Function) {
    (this.map[event] ||= new Set()).add(callback);
    return () => this.off(event, callback);
  }

  off(event: string, callback: Function) {
    const set = this.map[event];
    if (!set) return;
    set.delete(callback);
    if (set.size === 0) delete this.map[event];
  }

  emit<T>(event: string, payload?: T) {
    const call = (set: Set<Function>) => set && set.forEach((fn) => fn(payload));
    if (this.map[event]) {
      call(this.map[event]);
    }
  }
}
