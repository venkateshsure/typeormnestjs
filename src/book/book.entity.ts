import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Author } from '../author/author.entity';
import { BorrowRecord } from '../borrow/borrowrecord.entity';

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToOne(() => Author, (author) => author.books)
  author: Author;

  @OneToMany(() => BorrowRecord, (borrow) => borrow.book)
  borrows: BorrowRecord[];
}
