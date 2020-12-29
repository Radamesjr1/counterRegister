import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('register')
export default class Register {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    entityId: number;

    @Column({ default: 1 })
    registerTimes: number;
}
