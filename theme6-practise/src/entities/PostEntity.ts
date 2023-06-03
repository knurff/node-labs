import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from './UserEntity';
import {DateCreation, IPost, PostID, Title, Text, UserID} from '../domain/Post/Post.types';

@Entity()
export class PostEntity implements IPost {
    @PrimaryGeneratedColumn('uuid')
    id: PostID;

    @Column()
    dateCreation: DateCreation;

    @Column()
    text: Text;

    @Column()
    title: Title;

    @ManyToOne(() => UserEntity, user => user.posts)
    user: UserEntity;

    @Column({ nullable: true })
    userId: UserID;
}
