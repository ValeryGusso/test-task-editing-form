export interface Item {
  readonly name: string;
  value: string;
}

export interface DataState {
  items: Item[];
}

export const state: DataState = {
  items: (() => {
    const data: Item[] = [];

    for (let i = 0; i < 30; i++) {
      data.push({ name: `name_${i + 1}`, value: `value_${i + 1}` });
    }

    return data;
  })(),
};
