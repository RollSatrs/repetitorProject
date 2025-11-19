/*
  Warnings:

  - You are about to drop the column `educationCourse` on the `student` table. All the data in the column will be lost.
  - Added the required column `course` to the `student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'SCHOOLSTUDENT';

-- AlterTable
ALTER TABLE "student" DROP COLUMN "educationCourse",
ADD COLUMN     "course" TEXT NOT NULL;
