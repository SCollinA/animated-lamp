import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static/dist/serve-static.module';
import path from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '../../client', 'build'),
      serveRoot: '/',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
