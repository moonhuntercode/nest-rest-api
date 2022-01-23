import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  Id: number;
  @Column()
  LastName: string;
  @Column()
  FirstName: string;
  @Column()
  Address: string;
  @Column()
  Phone: number;
}
