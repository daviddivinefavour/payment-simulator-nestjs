import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TransactionService } from '../services/transactions.service';
import { CreateTransactionDto } from '../dtos/create-transaction.dto';

@Controller()
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get('transactions')
  async getTransactions() {
    return await this.transactionService.getTransactions();
  }

  @Get('transactions/:id')
  async getOneTransaction(@Param('id') id: number) {
    return await this.transactionService.getOneTransaction(id);
  }

  @Post('transaction')
  async createNewTransaction(
    @Body() createTransactionObj: CreateTransactionDto,
  ) {
    return await this.transactionService.createNewTransaction(
      createTransactionObj,
    );
  }
}
