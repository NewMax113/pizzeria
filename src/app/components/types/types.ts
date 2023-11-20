export interface IPizza {
    id: number;
    name: string;
    img: any;
    prise: {one: number, two: number, three: number};
    category: string[]
  }

  export type TFilter = string[]

  export interface ISizePizza {
    crust: string,
    id: IPizza['id'],
    prise: number | string
  }