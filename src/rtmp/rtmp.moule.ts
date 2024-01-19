import { Module } from '@nestjs/common';
import { RtmpService } from './rtmp.service';

@Module({
  providers: [RtmpService],
  exports: [RtmpService],
})
export class RtmpModule {}
