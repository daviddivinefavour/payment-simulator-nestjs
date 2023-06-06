import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller()
export class TransactionController {
  @Get('transactions')
  getTransactions() {
    return 'Returns a list of transactions';
  }

  @Post('transaction')
  createNewTransaction(@Body() createTransactionObj) {
    return createTransactionObj;
  }
}
