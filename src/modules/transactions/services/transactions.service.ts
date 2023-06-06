import { Injectable } from '@nestjs/common';
import { TransactionRepository } from 'src/repositories/transaction.repository';
import { CreateTransactionDto } from '../dtos/create-transaction.dto';

@Injectable()
export class TransactionService {
  constructor(private readonly transactionRepository: TransactionRepository) {}

  async getTransactions() {
    return await this.transactionRepository.findAll();
  }

  async getOneTransaction(id: number) {
    return await this.transactionRepository.findById(id);
  }

  async createNewTransaction(createTransactionObj: CreateTransactionDto) {
    return await this.transactionRepository.create(createTransactionObj);
  }
}
