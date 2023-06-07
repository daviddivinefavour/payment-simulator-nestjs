import { Inject, Injectable } from '@nestjs/common';
import { TransactionRepository } from 'src/repositories/transaction.repository';
import { CreateTransactionDto } from '../dtos/create-transaction.dto';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { Transaction } from 'src/entities/transaction.entity';

@Injectable()
export class TransactionService {
  constructor(
    private readonly transactionRepository: TransactionRepository,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
  ) {}

  async getTransactions() {
    return await this.transactionRepository.findAll();
  }

  async getOneTransaction(id: number) {
    return await this.transactionRepository.findById(id);
  }

  async createNewTransaction(createTransactionObj: CreateTransactionDto) {
    const transaction: Transaction = await this.transactionRepository.create(
      createTransactionObj,
    );

    return transaction;
  }
}
