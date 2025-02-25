export enum IType{
      DATA
}
export interface IMenu{
      name:string
      url?:string
      children?:IMenu[]
      type?: IType
      isTop?:boolean 
}
export type IMenuList = IMenu[]