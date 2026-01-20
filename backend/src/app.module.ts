import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { LabStaffModule } from './lab-staff/lab-staff.module';
import { LabSpecialtyModule } from './lab-specialty/lab-specialty.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // reads .env
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (cfg: ConfigService) => ({
        type: 'postgres',
        host: cfg.get<string>('DB_HOST'),
        port: parseInt(cfg.get<string>('DB_PORT') ?? '5432', 10),
        username: cfg.get<string>('DB_USER'),
        password: cfg.get<string>('DB_PASS'),
        database: cfg.get<string>('DB_NAME'),
        autoLoadEntities: true, // loads entities from imported modules
        synchronize: false, // IMPORTANT: do not auto-sync against existing schema
        logging: true,
      }),
    }),
    LabStaffModule,
    LabSpecialtyModule,
  ],
})
export class AppModule {}
