import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('books')
export class Book {
  @PrimaryColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  isPublished: boolean;
}