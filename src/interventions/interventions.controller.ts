import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateInterventionDto } from './dto/create-intervention.dto';
import { UpdateInterventionDto } from './dto/update-intervention.dto';
import { InterventionsService } from './interventions.service';

@Controller('interventions')
export class InterventionsController {
  constructor(private readonly interventionsService: InterventionsService) {}

  @Post()
  create(@Body() createInterventionDto: CreateInterventionDto) {
    return this.interventionsService.create(createInterventionDto);
  }

  @Get()
  findAll() {
    return this.interventionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.interventionsService.findOneById(id);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateInterventionDto: UpdateInterventionDto,
  ) {
    return this.interventionsService.update(id, updateInterventionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.interventionsService.remove(id);
  }
}
