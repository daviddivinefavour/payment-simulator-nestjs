import { Module } from '@nestjs/common';
import { TransactionService } from './services/transactions.service';

import { TransactionController } from './controllers/transactions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionRepository } from 'src/repositories/transaction.repository';
import { Transaction } from 'src/entities/transaction.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Transaction])],
  exports: [TypeOrmModule],
  controllers: [TransactionController],
  providers: [TransactionService, TransactionRepository],
})
export class TransactionModule {}
