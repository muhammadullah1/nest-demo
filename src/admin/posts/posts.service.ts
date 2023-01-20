import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PostsService {
  public Posts : CreatePostDto[] = [];

  create(createPostDto: CreatePostDto) {
    createPostDto.id = uuidv4();
    this.Posts.push(createPostDto);
    return createPostDto;
  }

  findAll() {
    return this.Posts;
  }

  findOne(id: string) {
    return this.Posts.find(post => post.id === id);
  }

  update(id: string, updatePostDto: UpdatePostDto) {
    const index = this.Posts.findIndex(post => post.id === id);
    this.Posts[index] = updatePostDto;
    return updatePostDto;
  }

  remove(id: string) {
    const index = this.Posts.findIndex(post => post.id === id);
    this.Posts.splice(index, 1);
    return 'Post deleted successfully';
  }
}
