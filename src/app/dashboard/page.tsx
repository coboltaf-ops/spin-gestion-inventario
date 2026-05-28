'use client'

export default function DashboardPage() {
  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>📊 Dashboard - SPIN Gestión Inventario</h1>
      <p>Sistema de Gestión de Inventario ERP</p>
      <hr />
      <p>Módulos disponibles:</p>
      <ul style={{ textAlign: 'left', display: 'inline-block' }}>
        <li>Materia Prima</li>
        <li>Producto Terminado</li>
        <li>Materiales y Suministros</li>
        <li>Proveedores</li>
        <li>Productos</li>
        <li>Órdenes de Compra</li>
        <li>Y más...</li>
      </ul>
    </div>
  )
}
