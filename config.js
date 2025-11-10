// js/config.js
// Конфигурация Supabase для UniBond

const SUPABASE_CONFIG = {
  // ⚠️ ЗАМЕНИТЕ НА ВАШИ РЕАЛЬНЫЕ ЗНАЧЕНИЯ!
  url: 'https://zexckggsjgdrnbwuvdin.supabase.co',
  key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpleGNrZ2dzamdkcm5id3V2ZGluIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI3OTQwMzEsImV4cCI6MjA3ODM3MDAzMX0.YbxbBPTupX47UP4HT4afCluD0v8PiuOvBJ8ibgUbTwk',
  
  // Настройки аутентификации
  auth: {
    autoRefreshToken: true,      // Автоматическое обновление токена
    persistSession: true,        // Сохранять сессию при перезагрузке
    detectSessionInUrl: true,    // Обнаруживать сессию в URL (для OAuth)
    flowType: 'pkce'            // Тип потока аутентификации (рекомендуется)
  },
  
  // Настройки реального времени
  realtime: {
    params: {
      eventsPerSecond: 10        // Лимит событий в секунду
    }
  },
  
  // Глобальные заголовки
  global: {
    headers: {
      'X-Client-Info': 'unibond-1.0.0'
    }
  }
};

// Функция проверки конфигурации
function checkSupabaseConfig() {
  const issues = [];
  
  // Проверка URL
  if (!SUPABASE_CONFIG.url || SUPABASE_CONFIG.url.includes('xzikvqesrwijqgqjplkz')) {
    issues.push('❌ SUPABASE_URL не настроен');
  }
  
  // Проверка ключа
  if (!SUPABASE_CONFIG.key || SUPABASE_CONFIG.key.includes('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9')) {
    issues.push('❌ SUPABASE_KEY не настроен');
  }
  
  // Проверка формата
  if (SUPABASE_CONFIG.url && !SUPABASE_CONFIG.url.startsWith('https://')) {
    issues.push('❌ SUPABASE_URL должен начинаться с https://');
  }
  
  // Проверка что это anon ключ (не service_role)
  if (SUPABASE_CONFIG.key && SUPABASE_CONFIG.key.includes('anon')) {
    console.log('✅ Используется anon ключ (правильно для фронтенда)');
  }
  
  if (issues.length > 0) {
    console.error('Проблемы с конфигурацией Supabase:');
    issues.forEach(issue => console.error(issue));
    return false;
  }
  
  console.log('✅ Конфигурация Supabase корректна!');
  console.log('📊 URL:', SUPABASE_CONFIG.url);
  console.log('🔑 Key:', SUPABASE_CONFIG.key.substring(0, 20) + '...');
  return true;
}

// Экспортируем конфигурацию
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SUPABASE_CONFIG, checkSupabaseConfig };
}
