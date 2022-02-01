import {ICalculationProvider} from "../../..domain/ports/ICalculationProvider";
import {CalculationDTO} from "../../..domain/DTO/CalculationDTO";
import {CalculationResponseDTO} from "../../..domain/DTO/CalculationResponseDTO";


export class CalculationUseCase extends BaseUseCase<CalculationDTO> {
  constructor(private calculationProvider: ICalculationProvider)
    super();
}
 
async perform(
  params: CalculationDTO
): Promise<CalculationResponseDTO> {
  const result = new CalculationResponseDTO;
  const response = await this.calculationProvider.calc(params);
  result.setData(response, this.applicationStatus.SUCESS);
}