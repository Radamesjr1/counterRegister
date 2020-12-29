import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('register')
export default class Register {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    registerTimes: number;
}
