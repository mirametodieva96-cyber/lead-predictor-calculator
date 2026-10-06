// Селектиране на всички нужни HTML елементи
const totalRevenueInput = document.getElementById('totalRevenue');
const avgOrderValueInput = document.getElementById('avgOrderValue');
const leadResponseRateSlider = document.getElementById('leadResponseRate');
const prospectResponseRateSlider = document.getElementById('prospectResponseRate');

// Елементи за показване на текущите проценти над слайдерите
const leadRateValSpan = document.getElementById('leadRateVal');
const prospectRateValSpan = document.getElementById('prospectRateVal');

// Елементи за показване на крайните резултати в картите
const resCustomersCard = document.getElementById('resCustomers');
const resLeadsCard = document.getElementById('resLeads');
const resProspectsCard = document.getElementById('resProspects');

// Основна функция за изчисление на маркетинговите метрики
function calculateMetrics() {
    // 1. Взимане на текущите стойности от полетата
    const revenue = parseFloat(totalRevenueInput.value) || 0;
    const avgOrderValue = parseFloat(avgOrderValueInput.value) || 0;
    const leadRate = parseFloat(leadResponseRateSlider.value) || 1;
    const prospectRate = parseFloat(prospectResponseRateSlider.value) || 1;

    // Обновяване на текстовите етикети над слайдерите
    leadRateValSpan.textContent = leadRate.toFixed(2) + '%';
    prospectRateValSpan.textContent = prospectRate.toFixed(2) + '%';

    // 2. Логика на изчисленията по формулите от заданието:
    
    // Формула 01: Клиенти = Оборот / Средна стойност на поръчката
    let customers = 0;
    if (avgOrderValue > 0) {
        customers = revenue / avgOrderValue;
    }

    // Формула 02: Потенциални клиенти (Leads) = Клиенти * 100 / Процент на отговорите от потенциални клиенти
    let leads = (customers * 100) / leadRate;

    // Формула 03: Контакти (Prospects) = Потенциални клиенти * 100 / Процент на отговорите от контакти
    let prospects = (leads * 100) / prospectRate;

    // 3. Визуализиране на резултатите на екрана (закръглени до цяло число, тъй като става въпрос за хора)
    resCustomersCard.textContent = Math.round(customers);
    resLeadsCard.textContent = Math.round(leads);
    resProspectsCard.textContent = Math.round(prospects);
}

// 4. Закачане на Слушатели (Event Listeners) за промяна
// Използваме събитието 'input', за да хващаме промените в реално време, докато потребителят пише или влачи плъзгача
totalRevenueInput.addEventListener('input', calculateMetrics);
avgOrderValueInput.addEventListener('input', calculateMetrics);
leadResponseRateSlider.addEventListener('input', calculateMetrics);
prospectResponseRateSlider.addEventListener('input', calculateMetrics);

// Първоначално извикване на функцията, за да зареди калкулатора с базови стойности при стартиране
calculateMetrics();
