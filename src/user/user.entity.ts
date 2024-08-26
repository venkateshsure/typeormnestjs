// import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// @Entity()
// export class User {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   username: string;

//   @Column()
//   email: string;

//   @Column({ default: true })
//   isActive: boolean;
// }

/////////////////
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
