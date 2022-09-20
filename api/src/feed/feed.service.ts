import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FeedPostEntity } from './feed.entity';
import { IFeedPost } from './ifeed';

@Injectable()
export class FeedService {

    constructor(
        @InjectRepository(FeedPostEntity)
        private readonly feedPostRepository: Repository<FeedPostEntity>) { }

    async createPost(feedPost: IFeedPost) {
        return await this.feedPostRepository.save(feedPost);
    }

    async findAllPosts() {
        return await this.feedPostRepository.find();
    }

    async updatePost(id: number, feedPost: IFeedPost) {
        return await this.feedPostRepository.update(id, feedPost);
    }

    async deletePost(id: number) {
        return await this.feedPostRepository.delete(id);
    }

}
