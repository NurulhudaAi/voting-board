// ===== ตั้งค่าการเชื่อมต่อ Supabase =====
// เอาค่าจาก Supabase → Project Settings → API (หรือปุ่ม "Connect")
window.APP_CONFIG = {
  supabaseUrl: 'https://YOUR_PROJECT.supabase.co',
  supabaseAnonKey: 'YOUR_ANON_KEY',          // anon / publishable key (เปิดเผยได้) — ห้ามใช้ service_role
  appName: 'Group Video Showcase'
};
