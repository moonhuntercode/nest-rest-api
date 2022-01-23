import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Persona {
  @PrimaryGeneratedColumn()
  @Column()
  Id: number;
  @Column()
  FirstName: string;
  @Column()
  LastName: string;
  @Column()
  Address: string;
  @Column()
  Phone: number;
}
