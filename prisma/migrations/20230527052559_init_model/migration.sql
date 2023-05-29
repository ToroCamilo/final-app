-- CreateTable
CREATE TABLE "usuario" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "nombre_usuario" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_nombre_usuario_key" ON "usuario"("nombre_usuario");
