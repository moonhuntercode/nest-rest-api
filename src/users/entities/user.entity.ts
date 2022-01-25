import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 100, nullable: true })
  name: string;
  @Column({ length: 100, nullable: true })
  lastname: string;
  @Column('int', { nullable: true })
  phone: number;
}
