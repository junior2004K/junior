drop table if exists computadora cascade;
drop type if exists estados_computadora;

create type estados_computadora as enum ('operativo', 'en reparación', 'fuera de servicio');

create table computadora (
  id bigint primary key generated always as identity not null,
  created_at timestamp default now() not null,
  modelo text not null,
  marca text not null,
  procesador text not null,
  ram text not null,
  almacenamiento text not null,
  estado estados_computadora default 'operativo' not null,
  anio_adquisicion text not null,
  responsable text not null
);
