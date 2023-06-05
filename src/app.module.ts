import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import * as path from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import dbConfigOptions from './configs/typeorm.config';

const devPath: string = path.join(__dirname, `../env/.env.development`);
const prodPath: string = path.join(__dirname, `../env/.env.production`);

// Select the env path based on the command used to start the application server.
const envPath: string =
  process.env.NODE_ENV === 'production' ? prodPath : devPath;

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: envPath,
      ignoreEnvFile: process.env.NODE_ENV === 'production',
    }),
    TypeOrmModule.forRootAsync(dbConfigOptions),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
