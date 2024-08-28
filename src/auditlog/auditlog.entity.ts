import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class AuditLog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  action: string;

  @Column()
  entity: string;

  @Column()
  bookId: number;

  @CreateDateColumn()
  timestamp: Date;
}
