import { Fee } from "./Fee";
import { Pmt } from "./Pmt";
import { Tax } from "./Tax";

export class CalculationResponseDTO {

  tax: Tax;

  fee: Fee;

  pmt: Pmt;


}