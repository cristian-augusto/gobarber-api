import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateUserTokens1595643955160 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable({
      name: 'user_tokens',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()',
        },
      ],
      foreignKeys: [],
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
