import { Module } from '@nestjs/common';
import { BillingController } from './billing.controller';
import * as Joi from 'joi';
import { BillingService } from './billing.service';
import { RmqModule } from '@app/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    validationSchema: 
      Joi.object({
        RABBIT_MQ_URI: Joi.string().required(),
        RABBIT_MQ_BILLING_QUEUE: Joi.string()
      })
    
  }),RmqModule],
  controllers: [BillingController],
  providers: [BillingService],
})
export class BillingModule {}
