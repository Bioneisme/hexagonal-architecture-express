import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("User", {})
export class UserModels {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  password: string;

  @Column()
  name: string;
}
