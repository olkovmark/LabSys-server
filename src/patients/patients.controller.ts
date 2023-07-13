import { Controller, Get, Req, Headers } from '@nestjs/common';

@Controller('patients')
export class PatientsController {
  @Get()
  findAll(@Req() req: Request, @Headers() head: Headers): Object {
    const { firstname, lastname }: any = { ...head };
    const patient = { firstname: firstname, lastname: lastname };
    return patient;
  }
}
