const mueblesOficina = [

    { id: 1, nombre: "Mesa de Reunión Rectangular", categoria: "mesas", material: "madera", precio: 4500, foto: "https://example.com/images/mesa_reunion_rectangular.jpg" },

    { id: 2, nombre: "Escritorio Ejecutivo", categoria: "escritorios", material: "madera", precio: 7500, foto: "https://example.com/images/escritorio_ejecutivo.jpg" },

    { id: 3, nombre: "Silla Ergonómica de Oficina", categoria: "sillas", material: "tela y metal", precio: 3200, foto: "https://example.com/images/silla_ergonomica.jpg" },

    { id: 4, nombre: "Estantería Modular", categoria: "estanterías", material: "metal", precio: 2800, foto: "https://example.com/images/estanteria_modular.jpg" },

    { id: 5, nombre: "Mesa Redonda para Conferencias", categoria: "mesas", material: "madera y metal", precio: 5000, foto: "https://example.com/images/mesa_redonda_conferencias.jpg" },

    { id: 6, nombre: "Escritorio en L", categoria: "escritorios", material: "madera y vidrio", precio: 8500, foto: "https://example.com/images/escritorio_en_L.jpg" },

    { id: 7, nombre: "Silla Ejecutiva con Reposabrazos", categoria: "sillas", material: "cuero y metal", precio: 4000, foto: "https://example.com/images/silla_ejecutiva.jpg" },

    { id: 8, nombre: "Estantería de Pared", categoria: "estanterías", material: "madera", precio: 2200, foto: "https://example.com/images/estanteria_pared.jpg" },

    { id: 9, nombre: "Mesa de Oficina Minimalista", categoria: "mesas", material: "madera y acero", precio: 4200, foto: "https://example.com/images/mesa_minimalista.jpg" },

    { id: 10, nombre: "Escritorio Ajustable", categoria: "escritorios", material: "madera y metal", precio: 6700, foto: "https://example.com/images/escritorio_ajustable.jpg" },

    { id: 11, nombre: "Silla Giratoria Clásica", categoria: "sillas", material: "tela y plástico", precio: 2800, foto: "https://example.com/images/silla_giratoria.jpg" },

    { id: 12, nombre: "Estantería para Archivos", categoria: "estanterías", material: "metal", precio: 3500, foto: "https://example.com/images/estanteria_archivos.jpg" },

    { id: 13, nombre: "Mesa Auxiliar de Oficina", categoria: "mesas", material: "madera", precio: 1800, foto: "https://example.com/images/mesa_auxiliar.jpg" },

    { id: 14, nombre: "Escritorio de Pie", categoria: "escritorios", material: "madera y aluminio", precio: 9200, foto: "https://example.com/images/escritorio_de_pie.jpg" },

    { id: 15, nombre: "Silla de Visita", categoria: "sillas", material: "cuero y metal", precio: 2500, foto: "https://example.com/images/silla_visita.jpg" },

    { id: 16, nombre: "Estantería Esquinera", categoria: "estanterías", material: "madera", precio: 2400, foto: "https://example.com/images/estanteria_esquinera.jpg" },

    { id: 17, nombre: "Mesa de Trabajo Industrial", categoria: "mesas", material: "metal y madera", precio: 5900, foto: "https://example.com/images/mesa_trabajo_industrial.jpg" },

    { id: 18, nombre: "Escritorio Compacto", categoria: "escritorios", material: "madera", precio: 5500, foto: "https://example.com/images/escritorio_compacto.jpg" },

    { id: 19, nombre: "Silla Plegable", categoria: "sillas", material: "plástico y metal", precio: 1300, foto: "https://example.com/images/silla_plegable.jpg" },

    { id: 20, nombre: "Estantería Alta", categoria: "estanterías", material: "metal", precio: 3000, foto: "https://example.com/images/estanteria_alta.jpg" },

    { id: 21, nombre: "Mesa con Cajones", categoria: "mesas", material: "madera", precio: 3900, foto: "https://example.com/images/mesa_con_cajones.jpg" },

    { id: 22, nombre: "Escritorio Moderno", categoria: "escritorios", material: "madera y metal", precio: 7200, foto: "https://example.com/images/escritorio_moderno.jpg" },

    { id: 23, nombre: "Silla de Recepción", categoria: "sillas", material: "tela y plástico", precio: 2700, foto: "https://example.com/images/silla_recepcion.jpg" },

    { id: 24, nombre: "Estantería de Almacenamiento", categoria: "estanterías", material: "metal", precio: 3200, foto: "https://example.com/images/estanteria_almacenamiento.jpg" },

    { id: 25, nombre: "Mesa de Trabajo con Ruedas", categoria: "mesas", material: "madera y acero", precio: 5100, foto: "https://example.com/images/mesa_con_ruedas.jpg" },

    { id: 26, nombre: "Escritorio Minimalista", categoria: "escritorios", material: "madera", precio: 6200, foto: "https://example.com/images/escritorio_minimalista.jpg" },

    { id: 27, nombre: "Silla Acolchonada", categoria: "sillas", material: "tela y madera", precio: 3800, foto: "https://example.com/images/silla_acolchonada.jpg" },

    { id: 28, nombre: "Estantería Abierta", categoria: "estanterías", material: "madera", precio: 2600, foto: "https://example.com/images/estanteria_abierta.jpg" },

    { id: 29, nombre: "Mesa de Conferencias Grande", categoria: "mesas", material: "madera", precio: 8000, foto: "https://example.com/images/mesa_grande_conferencia.jpg" },

    { id: 30, nombre: "Escritorio de Esquina", categoria: "escritorios", material: "madera y metal", precio: 8700, foto: "https://example.com/images/escritorio_esquina.jpg" },

    { id: 31, nombre: "Silla Alta para Barra", categoria: "sillas", material: "madera y metal", precio: 2400, foto: "https://example.com/images/silla_alta_barra.jpg" },

    { id: 32, nombre: "Estantería con Puertas", categoria: "estanterías", material: "madera", precio: 4000, foto: "https://example.com/images/estanteria_con_puertas.jpg" },

    { id: 33, nombre: "Mesa Plegable", categoria: "mesas", material: "plástico y metal", precio: 2200, foto: "https://example.com/images/mesa_plegable.jpg" },

    { id: 34, nombre: "Escritorio con Cajones", categoria: "escritorios", material: "madera", precio: 7200, foto: "https://example.com/images/escritorio_con_cajones.jpg" },

    { id: 35, nombre: "Silla Baja para Escritorio", categoria: "sillas", material: "plástico y metal", precio: 1800, foto: "https://example.com/images/silla_baja.jpg" },

    { id: 36, nombre: "Estantería de Oficina Clásica", categoria: "estanterías", material: "madera", precio: 3100, foto: "https://example.com/images/estanteria_clasica.jpg" },

    { id: 37, nombre: "Mesa de Reunión Ovalada", categoria: "mesas", material: "madera", precio: 6900, foto: "https://example.com/images/mesa_ovalada.jpg" },

    { id: 38, nombre: "Escritorio Industrial", categoria: "escritorios", material: "madera y metal", precio: 9400, foto: "https://example.com/images/escritorio_industrial.jpg" },

    { id: 39, nombre: "Silla Ejecutiva Premium", categoria: "sillas", material: "cuero y metal", precio: 5200, foto: "https://example.com/images/silla_ejecutiva_premium.jpg" },

    { id: 40, nombre: "Estantería de Piso", categoria: "estanterías", material: "madera y metal", precio: 2700, foto: "https://example.com/images/estanteria_de_piso.jpg" }

];

 