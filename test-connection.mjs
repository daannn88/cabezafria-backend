import mongoose from "mongoose";

const uri = process.env.DB_URI;


async function testConnection() {
    try {
        console.log("⏳ Intentando conectar a MongoDB Atlas...");
        await mongoose.connect(uri, {
            serverSelectionTimeoutMS: 500 // tiempo de espera opcional
        });
        console.log("✅ Conexión exitosa a MongoDB Atlas");
    } catch (err) {
        console.error("❌ Error al conectar:", err.message);
    } finally {
        await mongoose.disconnect();
        console.log("🔌 Desconectado");
    }
}

testConnection();
