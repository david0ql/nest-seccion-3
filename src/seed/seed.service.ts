import { Injectable } from '@nestjs/common';
import { CarsService } from 'src/cars/cars.service';


@Injectable()
export class SeedService {

  constructor(
    private readonly carsService: CarsService
  ) {}

  populateDB(){
    return 'Seed executed';
  }
  
}
