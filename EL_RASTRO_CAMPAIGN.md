# 📰 ESTRATEGIA DE PUBLICIDAD Y AUTOMATIZACIÓN EN EL RASTRO (CHILE)
## Cliente: Pablo Pulido 3B
**Servicio**: Pulido y Vitrificado Profesional de Pisos (Parquet, Madera, Mármol, Granito, Hormigón)  
**Cobertura**: Santiago (RM) · Rancagua (VI Región) · V Región (Valparaíso, Viña del Mar, Concón)  
**Propuesta**: Sistema 99% Libre de Polvo · Productos de Alto Tráfico · Cotización Inmediata por WhatsApp

---

## 🎯 1. ESTRUCTURA DE AVISOS DE ALTO RENDIMIENTO

En El Rastro, los avisos con mayor tasa de clics y llamadas cumplen con tres condiciones:
1. **Título específico con beneficio tangible**: Mencionar el material y la ventaja principal (ej. "Sin Polvo", "Garantizado").
2. **Fotos reales de alto impacto**: La primera foto DEBE ser una comparación directa de "Antes vs. Después" con buena luz.
3. **Llamado a la acción claro**: Indicar precio referencial por m² o invitar a cotizar gratis por WhatsApp / Web.

---

### 📋 AVISO 1 (Principal): Parquet y Pisos de Madera

* **Título (Max 60 caracteres)**:  
  `Pulido y Vitrificado de Parquet y Maderas · 99% Sin Polvo`
* **Categoría**: Servicios > Construcción y Reparaciones / Servicios para el Hogar
* **Ubicación**: Santiago / Valparaíso / Rancagua (Publicar 1 aviso por región para máxima cobertura)
* **Precio de Referencia**: $12.000 / m² (o "A convenir según m²")

#### 📝 Texto del Aviso (Copiar y Pegar):
```text
¿TUS PISOS DE PARQUET O MADERA ESTÁN RAYADOS, OPACOS O DESGASTADOS?
En Pablo Pulido 3B los dejamos como nuevos, sin cambiar una sola tabla y con terminación profesional garantizada.

✅ TECNOLOGÍA 99% LIBRE DE POLVO: Trabajamos con maquinaria industrial de aspiración continua. Tu casa, muebles y paredes quedan limpios.
✅ MATERIALES DE ALTO TRÁFICO: Aplicamos vitrificados de poliuretano brillante o satinado y selladores ecológicos al agua sin olor tóxico.
✅ SERVICIO COMPLETO:
   • Desbaste profundo y eliminación de ceras y barnices viejos.
   • Reparación de tablas sueltas y retapado de juntas con masilla especial.
   • 3 manos de vitrificado de alta resistencia.
   • Entrega rápida y puntual.

📍 COBERTURA: Santiago (todas las comunas), Rancagua y V Región (Viña del Mar, Valparaíso, Concón, Quilpué).

📲 COTIZACIÓN INMEDIATA:
Escríbenos directamente a nuestro WhatsApp o visita nuestra web con cotizador automático:
WhatsApp: +56 9 [TU-NUMERO]
Sitio Web: [ENLACE-A-TU-WEB]

¡Presupuesto sin costo en el día! Maestros con más de 15 años de oficio.
```

---

### 📋 AVISO 2: Mármol, Granito y Baldosas

* **Título**:  
  `Pulido y Cristalizado de Mármol y Granito · Brillo Espejo`
* **Categoría**: Servicios > Mantención y Restauración
* **Ubicación**: Santiago / V Región

#### 📝 Texto del Aviso:
```text
RESTAURACIÓN Y CRISTALIZADO DE PISOS Y CUBIERTAS DE MÁRMOL Y GRANITO.
Recupera el brillo original y la elegancia de tus pisos de piedra natural.

💎 LO QUE HACEMOS:
• Eliminación de manchas de sarro, ácido, rayas y desgaste por tránsito.
• Pulido con diamantes industriales al agua (cero polvo).
• Cristalizado y sellado hidrófugo antimanchas.
• Ideal para halls de acceso en edificios, casas, oficinas y locales comerciales.

📍 Atendemos en Santiago, Rancagua y V Región.
📲 Cotiza por WhatsApp al +56 9 [TU-NUMERO] o en nuestra web [ENLACE-A-TU-WEB].
```

---

### 📋 AVISO 3: Hormigón Afinado y Radier

* **Título**:  
  `Desbaste y Pulido de Hormigón / Radier · Sellado Antipolvo`
* **Categoría**: Servicios > Obras y Construcción

#### 📝 Texto del Aviso:
```text
TRATAMIENTO Y PULIDO DE RADIERES Y HORMIGÓN AFINADO.
Terminaciones de alto estándar para bodegas, estacionamientos, locales y terrazas.

🔧 BENEFICIOS:
• Eliminación de irregularidades, lechadas y pintura desgastada.
• Sellado antipolvo de larga durabilidad.
• Acabado liso mate o semibrillo estilo industrial.

📍 Presupuestos en Santiago, Rancagua y V Región.
📲 Contacto rápido al WhatsApp: +56 9 [TU-NUMERO].
```

---

## 🚀 2. ESTRATEGIA DE PUBLICIDAD PAGADA EN EL RASTRO

Para maximizar el retorno de inversión en El Rastro:

1. **Destacado "Subir a Primera Posición" (Bumping)**:
   - En clasificados, el 70% de las consultas se van a los primeros 10 avisos del listado.
   - **Horarios clave para renovar/subir**:
     - **Lunes 08:30 AM**: Administradores de edificios y empresas buscan proveedores para la semana.
     - **Jueves y Viernes 17:00 - 20:00**: Familias y dueños de casa planifican remodelaciones de fin de semana.
2. **Aviso Destacado con Borde / Color**:
   - Hace resaltar el aviso frente a la competencia de maestros tradicionales que publican sin formato.
3. **Medición con Parámetros UTM**:
   - Enlace en el aviso hacia la web:
     `https://tu-dominio.cl/?utm_source=elrastro&utm_medium=clasificados&utm_campaign=pulido_parquet`
   - Esto te permitirá saber exactamente cuántos visitantes y cotizaciones llegaron gracias a El Rastro.

---

## 🤖 3. ARQUITECTURA DE AUTOMATIZACIÓN (SCRIPT / MCP)

Para publicar o renovar en El Rastro sin hacerlo manualmente:

1. **Script Node.js con Playwright (`scripts/rastro-publisher.js`)**:
   - Abre el navegador de forma autónoma.
   - Inicia sesión en `elrastro.cl` con tus credenciales.
   - Rellena título, descripción, región y sube las fotos de la carpeta `/public/fotos-rastro/`.
   - Puede ejecutarse con una tarea programada semanal en Windows (`Task Scheduler`) o mediante un comando:
     ```bash
     node scripts/rastro-publisher.js --region=santiago --aviso=parquet
     ```
2. **Servidor MCP Local (`mcp-el-rastro`)**:
   - Expone la herramienta para que puedas pedirme en este chat:
     *"Publica el aviso de Parquet en El Rastro para la V Región"*.
