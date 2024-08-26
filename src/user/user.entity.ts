
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { BorrowRecord } from '../borrow/borrowrecord.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @OneToMany(() => BorrowRecord, (borrow) => borrow.user)
  borrows: BorrowRecord[];
}
