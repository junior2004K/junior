import { fakerEN_US as faker } from "@faker-js/faker";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SERVICE_ROLE_KEY
);

const seedComputadoras = async (num) => {
  const log = (tablaName, error) => {
    console.error(`Ha ocurrido un error en la tabla '${tablaName}' con código ${error}: ${error.message}`);
    process.exit(1);
  };

  const mensaje = (msg) => console.log(msg);

  const computadoras = [];

  for (let i = 0; i < num; i++) {
    computadoras.push({
      modelo: faker.commerce.productName(),
      marca: faker.helpers.arrayElement(['Dell', 'HP', 'Lenovo', 'Asus', 'Acer', 'Apple']),
      procesador: faker.helpers.arrayElement(['Intel Core i5', 'Intel Core i7', 'AMD Ryzen 5', 'AMD Ryzen 7']),
      ram: faker.helpers.arrayElement(['8GB', '16GB', '32GB']),
      almacenamiento: faker.helpers.arrayElement(['256GB SSD', '512GB SSD', '1TB HDD']),
      estado: faker.helpers.arrayElement(['operativo', 'en reparación', 'fuera de servicio']),
      anio_adquisicion: faker.date.past().getFullYear().toString(),
      responsable: faker.person.fullName(),
    });
  }

  const { data, error } = await supabase.from('computadora').insert(computadoras).select('id');
  if (error) return log('computadora', error);
  mensaje('✅ Datos de computadoras enviados correctamente');
  return data;
};

const num = 150;
seedComputadoras(num);
