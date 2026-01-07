import type { IToastNotification } from './IToastNotification';

export interface IToastService {
  add: (toast: IToastNotification) => string;
  remove: (id: string) => void;
}
