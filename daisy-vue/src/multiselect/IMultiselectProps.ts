import type { ISelectListProps } from '@/select/ISelectListProps';

export interface IMultiselectProps<T> extends ISelectListProps<T> {
  showFilter?: boolean;
  filterKey?: string;
}
