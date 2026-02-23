import { defineComponent, h, ref, Teleport, type Component, markRaw, readonly } from 'vue';
import ModalComponent from './ModalComponent.vue';
import { v4 as uuidv4 } from 'uuid';

type EventEmitterType = { [key in string]: Function };
export const DYNAMIC_MODAL_INJECTION_KEY = Symbol('DYNAMIC_MODAL_INJECTION_KEY');
export interface IDynamicModalOptions {
  title?: string;
  //description?: string | Component | null | undefined;
  footer?: Component | null | undefined;
  props?: object | null | undefined;
  emits?: EventEmitterType;
}

export const useDynamicModalService = () => {
  const openDialogs = ref<Map<string, Component>>(new Map());

  const showDialog = <T extends Component>(component: T, options: IDynamicModalOptions): string => {
    const id = uuidv4();
    if (openDialogs.value.has(id)) {
      return id;
    }

    const emitters = Object.keys(options.emits ?? {}).reduce(
      (prev: Record<string, (...args: any[]) => void | Promise<void>>, curr) => {
        if (!curr.startsWith('on')) {
          const funcName = curr[0]?.toUpperCase() + curr.slice(1);
          prev[`on${funcName}`] = options.emits![curr] as (...args: any[]) => void | Promise<void>;
        } else {
          prev[curr] = options.emits![curr] as (...args: any[]) => void | Promise<void>;
        }
        return prev;
      },
      {},
    );

    const view = h(component, {
      ...options.props,
      ...emitters,
    });

    // if (typeof options.title === 'string') {
    //   options.title = h('div', options.title);
    // } else if (options.title === null || options.title === undefined) {
    //   options.title = h('div', '');
    // }

    const dialog = defineComponent({
      setup() {
        return () =>
          h(Teleport, { to: 'body' }, [
            h(
              ModalComponent,
              {
                title: options.title ?? '',
                modal: true,
                'onUpdate:visible': (value: boolean | undefined) => {
                  if (!value) {
                    closeDialog(id);
                  }
                },
                visible: openDialogs.value.has(id),
              },
              {
                body: () => h('div', view),
                footer: () => renderSlot(options.footer),
              },
            ),
          ]);
      },
    });
    openDialogs.value.set(id, markRaw(dialog));
    return id;
  };

  const closeDialog = (id: string) => {
    if (openDialogs.value.has(id)) {
      openDialogs.value.delete(id);
    }
  };

  const renderSlot = (slot: string | Component | null | undefined) => {
    if (typeof slot === 'string') {
      return h('div', slot);
    } else if (!slot) {
      return h('div', '');
    }
    return h(slot);
  };

  return {
    showDialog,
    closeDialog,
    openDialogs: readonly(openDialogs),
  };
};
