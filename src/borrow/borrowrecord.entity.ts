import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Book } from '../book/book.entity';
import { User } from '../user/user.entity';

@Entity()
export class BorrowRecord {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.borrows)
  user: User;

  @ManyToOne(() => Book, (book) => book.borrows)
  book: Book;

  @Column()
  borrowDate: Date;

  @Column({ nullable: true })
  returnDate: Date;

  @Column({ default: false })
  isReturned: boolean;
}
