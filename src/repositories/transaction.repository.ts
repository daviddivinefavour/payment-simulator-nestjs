import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from 'src/entities/transaction.entity';
import { CreateTransactionDto } from 'src/modules/transactions/dtos/create-transaction.dto';
import { Repository } from 'typeorm';

@Injectable()
export class TransactionRepository {
  constructor(
    @InjectRepository(Transaction)
    private transactionsRepository: Repository<Transaction>,
  ) {}

  async create(
    createTransactionObj: CreateTransactionDto,
  ): Promise<Transaction> {
    return await this.transactionsRepository.save(createTransactionObj);
  }

  findAll(): Promise<Transaction[]> {
    return this.transactionsRepository.find();
  }

  findById(id: number): Promise<Transaction | null> {
    return this.transactionsRepository.findOneBy({ id });
  }
}
