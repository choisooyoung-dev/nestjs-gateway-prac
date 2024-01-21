import { Injectable } from '@nestjs/common';
import { CreateStreamingDto } from './dto/create-streaming.dto';
import { UpdateStreamingDto } from './dto/update-streaming.dto';
import { join } from 'path';
import { spawn } from 'child_process';
import * as fs from 'fs';

@Injectable()
export class StreamingService {
  //private readonly streamFolderPath = join(__dirname, '..', '..', 'public');

  // startStreaming(streamKey: string): string {
  //   const streamPath = `${this.streamFolderPath}/${streamKey}`;
  //   console.log('streamPath: ', streamPath);
  //   const outputPath = `${streamPath}/stream.m3u8`;
  //   console.log('outputPath: ', outputPath);

  //   // Ensure the stream directory exists
  //   this.ensureDirectoryExistence(streamPath);

  //   const ffmpeg = spawn('ffmpeg', [
  //     '-i',
  //     `rtmp://localhost/live/${streamKey}`, // Input from OBS
  //     '-hls_time',
  //     '10', // Segment duration
  //     '-hls_list_size',
  //     '0', // Infinite list size
  //     '-f',
  //     'hls', // Format
  //     outputPath, // Output file
  //   ]);

  //   ffmpeg.stderr.on('data', (data) =>
  //     console.log(`FFmpeg: ${data.toString()}`),
  //   );
  //   ffmpeg.on('close', (code) =>
  //     console.log(`FFmpeg process exited with code ${code}`),
  //   );

  //   return outputPath;
  // }

  // private ensureDirectoryExistence(filePath: string) {
  //   if (!fs.existsSync(filePath)) {
  //     fs.mkdirSync(filePath, { recursive: true });
  //   }
  // }

  create(createStreamingDto: CreateStreamingDto) {
    return 'This action adds a new streaming';
  }

  findAll() {
    return `This action returns all streaming`;
  }

  findOne(id: number) {
    return `This action returns a #${id} streaming`;
  }

  update(id: number, updateStreamingDto: UpdateStreamingDto) {
    return `This action updates a #${id} streaming`;
  }

  remove(id: number) {
    return `This action removes a #${id} streaming`;
  }
}
