/*
  Warnings:

  - You are about to drop the `usuario` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "usuario";

-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "nombre_usuario" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_nombre_usuario_key" ON "Usuario"("nombre_usuario");
