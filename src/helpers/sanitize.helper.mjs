export function sanitizeJSON(obj) {
  const replacer = (key, value) => {
    if (typeof value === "string") {
      // Intenta detectar si el valor es un JSON válido y parsearlo
      try {
        const parsed = JSON.parse(value);
        if (typeof parsed === "object") {
          return parsed; // Devuelve como objeto, no como string
        }
      } catch {
        // No es un JSON, lo limpiamos
        return value
          .replace(/[<>]/g, "") // Evita HTML injection
          .replace(/\s+/g, " ") // Espacios innecesarios
          .trim();
      }
    }
    return value;
  };

  return JSON.stringify(obj, replacer, 2);
}