import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

  async getHello() {
    this.cacheManager.set('first', 'Some string', 6000);
    const cachedData = await this.cacheManager.get('first');
    console.log(cachedData);

    return 'Hello World!';
  }
}
