import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InterventionsModule } from './interventions/interventions.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'nestuser',
      password: 'root',
      database: 'my_nest_db',
      autoLoadEntities: true,
      synchronize: true,
      dropSchema: true,
    }),
    UsersModule,
    InterventionsModule,
  ],
})
export class AppModule {}
