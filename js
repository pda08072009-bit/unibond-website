// js/config.js
// Конфигурация Supabase для UniBond

const SUPABASE_CONFIG = {
  // ⚠️ ЗАМЕНИТЕ ЭТИ ЗНАЧЕНИЯ НА ВАШИ РЕАЛЬНЫЕ!
  url: 'https://abc123def456.supabase.co',
  key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
  
  // Настройки аутентификации
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    flowType: 'pkce' // Рекомендуется для безопасности
  },
  
  // Настройки реального времени
  realtime: {
    params: {
      eventsPerSecond: 10
    }
  }
};

// Функция проверки конфигурации
function checkSupabaseConfig() {
  const issues = [];
  
  // Проверка URL
  if (!SUPABASE_CONFIG.url || SUPABASE_CONFIG.url.includes('abc123def456')) {
    issues.push('❌ SUPABASE_URL не настроен (замените на ваш Project URL)');
  }
  
  // Проверка ключа
  if (!SUPABASE_CONFIG.key || SUPABASE_CONFIG.key.includes('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...')) {
    issues.push('❌ SUPABASE_KEY не настроен (замените на ваш anon public key)');
  }
  
  // Проверка формата URL
  if (SUPABASE_CONFIG.url && !SUPABASE_CONFIG.url.startsWith('https://')) {
    issues.push('❌ SUPABASE_URL должен начинаться с https://');
  }
  
  if (issues.length > 0) {
    console.error('Проблемы с конфигурацией Supabase:');
    issues.forEach(issue => console.error(issue));
    
    // Показываем alert в браузере
    if (typeof window !== 'undefined') {
      alert('❌ Ошибка конфигурации Supabase!\n\n' + issues.join('\n') + 
            '\n\nПожалуйста, обновите файл js/config.js с вашими реальными ключами из Supabase.');
    }
    
    return false;
  }
  
  console.log('✅ Конфигурация Supabase корректна!');
  return true;
}

// Экспортируем конфигурацию
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SUPABASE_CONFIG, checkSupabaseConfig };
}
