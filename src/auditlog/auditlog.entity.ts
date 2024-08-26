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
  entityId: number;

  @CreateDateColumn()
  timestamp: Date;
}
