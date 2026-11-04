const { createClient } = require("redis");

const redis = createClient();

redis.on("error", (error) => {
    console.error("Error en Redis:", error);
});

async function ejecutar() {
    await redis.connect();

    const usuario = "123";
    const codigo = "583921";
    const clave = `codigo:${usuario}`;

    await redis.set(clave, codigo, {
        EX: 60
    });

    console.log("Código guardado:", codigo);

    const codigoGuardado = await redis.get(clave);

    console.log("Código consultado:", codigoGuardado);

    const tiempoRestante = await redis.ttl(clave);

    console.log("Tiempo restante:", tiempoRestante, "segundos");

    const codigoIngresado = "583921";

    if (codigoIngresado === codigoGuardado) {
        console.log("Código correcto");
        await redis.del(clave);
        console.log("Código eliminado");
    } else {
        console.log("Código incorrecto");
    }

    await redis.quit();
}

ejecutar();