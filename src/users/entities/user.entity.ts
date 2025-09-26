import { Intervention } from 'src/interventions/entities/intervention.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @OneToOne(() => Intervention, (intervention) => intervention.user, {
    cascade: true,
    nullable: true,
  })
  @JoinColumn()
  intervention: Intervention | null;
}
