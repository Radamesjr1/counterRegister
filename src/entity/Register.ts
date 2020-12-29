import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('register')
export default class Register {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    entityId: number;

    @Column({ default: 1 })
    registerTimes: number;
}
