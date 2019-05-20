import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APIController } from './controllers/api.controller';

@Module({
  imports: [],
  controllers: [AppController, APIController],
  providers: [AppService],
})
export class AppModule {}
