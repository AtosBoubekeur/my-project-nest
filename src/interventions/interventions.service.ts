import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInterventionDto } from './dto/create-intervention.dto';
import { UpdateInterventionDto } from './dto/update-intervention.dto';
import { Intervention } from './entities/intervention.entity';

@Injectable()
export class InterventionsService {
  constructor(
    @InjectRepository(Intervention)
    private interventionRepository: Repository<Intervention>,
  ) {}

  create(createInterventionDto: CreateInterventionDto) {
    const newIntervention = this.interventionRepository.create(
      createInterventionDto,
    );
    return this.interventionRepository.save(newIntervention);
  }

  findAll() {
    return this.interventionRepository.find();
  }

  async findOneById(id: number) {
    const intervention = await this.interventionRepository.findOneBy({ id });
    if (!intervention) {
      throw new NotFoundException(`Intervention with ID ${id} not found`);
    }
    return intervention;
  }

  async update(id: number, updateInterventionDto: UpdateInterventionDto) {
    const intervention = await this.findOneById(id);
    Object.assign(intervention, updateInterventionDto);
    return this.interventionRepository.save(intervention);
  }

  async remove(id: number) {
    const intervention = await this.findOneById(id);
    await this.interventionRepository.remove(intervention);
    return {
      message: `Intervention with ID ${id} has been removed`,
    };
  }
}
