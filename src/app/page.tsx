export default function Page() {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial', textAlign: 'center', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1>📊 SPIN - Gestión Inventario</h1>
      <p style={{ fontSize: '18px', color: '#666' }}>Sistema de Gestión de Inventario ERP</p>
      <hr style={{ margin: '20px 0', width: '100px' }} />
      <p style={{ fontSize: '14px', color: '#999' }}>Acceso a Dashboard: <a href="/dashboard" style={{ color: '#0066cc', textDecoration: 'none' }}>→ Ir al Dashboard</a></p>
    </div>
  )
}
