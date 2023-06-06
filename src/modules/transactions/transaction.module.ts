import { Module } from '@nestjs/common';
import { TransactionService } from './services/transactions.service';

import { TransactionController } from './controllers/transactions.controller';

@Module({
  controllers: [TransactionController],
  providers: [TransactionService],
})
export class TransactionModule {}
