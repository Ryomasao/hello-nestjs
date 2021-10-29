import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  providers: [PowerService],
  // 他のmoduleでDIしたい場合
  exports: [PowerService],
})
export class PowerModule {}
