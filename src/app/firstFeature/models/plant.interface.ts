import { PlantAction } from './plant-action.interface';

export interface Plant {
    id:number
    name:string
    planted: boolean
    plantedDate?: number
    action:string
  }