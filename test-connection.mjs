import mongoose from "mongoose";

const uri = "mongodb+srv://cabezaFria:CF1234*++@cluster0.f6csmsh.mongodb.net/db-cabezafria";


async function testConnection() {
    try {
        console.log("⏳ Intentando conectar a MongoDB Atlas...");
        await mongoose.connect(uri, {
            serverSelectionTimeoutMS: 10000 // tiempo de espera opcional
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
