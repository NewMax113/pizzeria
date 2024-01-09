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
    name: string
  }

  export interface IRestApi {
    userId: number,
    id: number,
    title: string,
    completed: boolean
  }

  export interface IArr {
    name: string
    link?: string
    children?: IArr[]
  }