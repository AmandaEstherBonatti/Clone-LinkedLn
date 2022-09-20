import { Module } from '@nestjs/common';
import { FeedService } from './feed.service';
import { FeedController } from './feed.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedPostEntity } from './feed.entity';

@Module({
    imports: [TypeOrmModule.forFeature([FeedPostEntity])],
    providers: [FeedService],
    controllers: [FeedController]
})
export class FeedModule { }
