import { User } from 'src/users/entities/user.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Intervention {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  job: string;

  @Column()
  location: string;

  @Column()
  daysNumber: number;

  @Column({ type: 'date' })
  dateStart: Date;

  @Column({ type: 'date' })
  dateEnd: Date;

  @OneToOne(() => User, (user) => user.intervention)
  user: User;
}
