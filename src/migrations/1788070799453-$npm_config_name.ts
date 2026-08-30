import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1788070799453 implements MigrationInterface {
    name = ' $npmConfigName1788070799453'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" ADD "created_at" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "created_at"`);
    }

}
