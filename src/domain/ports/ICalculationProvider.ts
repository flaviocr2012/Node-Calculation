import { CalculationDTO } from "../DTO/CalculationDTO";
import { CalculationResponseDTO } from "../DTO/CalculationResponseDTO";

export interface ICalculationProvider {
  calc(params: CalculationDTO): Promise<CalculationResponseDTO>; 
}