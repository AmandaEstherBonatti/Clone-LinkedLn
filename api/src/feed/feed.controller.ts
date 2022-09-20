import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { FeedService } from './feed.service';
import { IFeedPost } from './ifeed';

@Controller('feed')
export class FeedController {

    constructor(private feedService: FeedService) { }

    @Post()
    async create(@Body() post: IFeedPost) {
        return await this.feedService.createPost(post);
    }

    @Get()
    async findAll() {
        return await this.feedService.findAllPosts();
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() feedPost: IFeedPost) {
        return await this.feedService.updatePost(id, feedPost);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        return await this.feedService.deletePost(id);
    }
}
