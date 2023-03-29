export interface PatternSliceType {
  pattern: ItemType[];
  isActiveItem: string;
}

export type ItemType = {
  id: string;
  type: string;
  info: string;
  image: string;
};

export type ToolbarType = {
  type: string;
  image: string;
};
