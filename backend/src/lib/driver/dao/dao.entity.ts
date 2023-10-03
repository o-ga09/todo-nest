import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  readonly id?: number;

  @Column()
  readonly name: string;

  @Column()
  readonly description: string;

  @Column()
  readonly status: number;

  @Column()
  readonly created_at: string;

  @Column()
  readonly updated_at: string;
}
