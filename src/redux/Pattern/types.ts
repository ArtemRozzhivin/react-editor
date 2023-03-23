export interface PatternSliceType {
  pattern: ItemType[];
}

export type ItemType = {
  id: number;
  type: string;
  info: string;
  image: string;
};

export type ToolbarType = {
  type: string;
  image: string;
};
