import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class createRegiterTable1609260550710
    implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'register',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'entityId',
                        type: 'integer',
                    },
                    {
                        name: 'registerTimes',
                        type: 'integer',
                        default: 1,
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('register');
    }
}
