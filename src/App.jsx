import { useState } from 'react';
import {
  BatteryCharging,
  Cable,
  Car,
  CheckCircle2,
  Clock3,
  Gauge,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Wrench,
} from 'lucide-react';

const phone = '+7 (999) 123-45-67';
const phoneHref = 'tel:+79991234567';

const services = [
  {
    icon: Wrench,
    title: 'Ремонт ходовой',
    text: 'Подвеска, тормоза, рулевое управление, ступицы и амортизаторы.',
  },
  {
    icon: Gauge,
    title: 'Диагностика',
    text: 'Компьютерная проверка, поиск ошибок, оценка состояния перед ремонтом.',
  },
  {
    icon: Cable,
    title: 'ТО и расходники',
    text: 'Масла, фильтры, свечи, ремни, жидкости и плановое обслуживание.',
  },
  {
    icon: BatteryCharging,
    title: 'Электрика',
    text: 'Аккумулятор, генератор, стартер, свет, датчики и базовая проводка.',
  },
];

const steps = [
  'Позвоните или напишите удобное время',
  'Приезжайте на осмотр и диагностику',
  'Согласуем работы и стоимость до ремонта',
  'Вы забираете исправный автомобиль',
];

const facts = [
  { value: '30 мин', label: 'на первичный осмотр' },
  { value: '12 мес', label: 'гарантия на работы' },
  { value: '6 дней', label: 'работаем каждую неделю' },
];

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <main>
      <header className="topbar" aria-label="Основная навигация">
        <a className="brand" href="#top" aria-label="СТО Север">
          <Car size={24} aria-hidden="true" />
          <span>СТО Север</span>
        </a>
        <nav className="nav-links" aria-label="Разделы сайта">
          <a href="#services">Работы</a>
          <a href="#location">Адрес</a>
          <a href="#contacts">Контакты</a>
        </nav>
        <a className="top-phone" href={phoneHref}>
          <Phone size={18} aria-hidden="true" />
          <span>{phone}</span>
        </a>
      </header>

      <section className="hero" id="top">
        <img className="hero-image" src="/assets/sto-hero.png" alt="Автомобиль в чистой ремонтной зоне СТО" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Автосервис рядом с вами</p>
          <h1>СТО Север</h1>
          <p className="hero-lead">
            Диагностика, ремонт ходовой, техническое обслуживание и автоэлектрика.
            Без лишних обещаний: осмотрим, согласуем цену и сделаем работу в срок.
          </p>
          <div className="hero-actions" aria-label="Быстрые действия">
            <a className="button button-primary" href={phoneHref}>
              <Phone size={20} aria-hidden="true" />
              Позвонить
            </a>
            <a className="button button-secondary" href="#contacts">
              <MessageCircle size={20} aria-hidden="true" />
              Оставить заявку
            </a>
          </div>
          <div className="hero-meta" aria-label="Короткая информация">
            <span>
              <Clock3 size={17} aria-hidden="true" />
              Пн-Сб 9:00-20:00
            </span>
            <span>
              <MapPin size={17} aria-hidden="true" />
              ул. Примерная, 12
            </span>
          </div>
        </div>
      </section>

      <section className="facts" aria-label="Ключевые преимущества">
        {facts.map((fact) => (
          <div className="fact" key={fact.label}>
            <strong>{fact.value}</strong>
            <span>{fact.label}</span>
          </div>
        ))}
      </section>

      <section className="section services-section" id="services">
        <div className="section-heading">
          <p className="eyebrow">Что делаем</p>
          <h2>Основные работы</h2>
          <p>
            Список можно расширить под ваш автосервис: добавим кузовной ремонт,
            шиномонтаж, сход-развал или обслуживание конкретных марок.
          </p>
        </div>
        <div className="services-grid">
          {services.map(({ icon: Icon, title, text }) => (
            <article className="service-card" key={title}>
              <div className="service-icon">
                <Icon size={24} aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section process-section">
        <div className="section-heading compact">
          <p className="eyebrow">Как работаем</p>
          <h2>Понятный порядок без сюрпризов</h2>
        </div>
        <div className="steps">
          {steps.map((step, index) => (
            <div className="step" key={step}>
              <span>{index + 1}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section split-section" id="location">
        <div className="location-copy">
          <p className="eyebrow">Где находимся</p>
          <h2>Заезд с главной улицы, есть место для ожидания</h2>
          <p>
            Адрес, схему проезда и фото фасада заменим на фактические данные.
            Пока здесь стоит понятный блок, чтобы клиент сразу видел, куда ехать.
          </p>
          <ul className="check-list">
            <li>
              <CheckCircle2 size={20} aria-hidden="true" />
              ул. Примерная, 12, бокс 4
            </li>
            <li>
              <CheckCircle2 size={20} aria-hidden="true" />
              Работаем с легковыми авто и коммерческим транспортом
            </li>
            <li>
              <CheckCircle2 size={20} aria-hidden="true" />
              Можно оставить автомобиль на день
            </li>
          </ul>
        </div>
        <div className="map-panel" role="img" aria-label="Схема расположения СТО">
          <div className="map-road main-road" />
          <div className="map-road side-road" />
          <div className="map-pin">
            <MapPin size={28} aria-hidden="true" />
            <span>СТО</span>
          </div>
          <span className="map-label north">ул. Примерная</span>
          <span className="map-label south">Въезд</span>
        </div>
      </section>

      <section className="contact-band" id="contacts">
        <div>
          <p className="eyebrow">Запись на ремонт</p>
          <h2>Позвоните или оставьте заявку</h2>
          <p>
            Для точного расчета нужны марка, модель, год, описание проблемы и
            удобное время приезда.
          </p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Ваше имя
            <input type="text" name="name" placeholder="Иван" autoComplete="name" />
          </label>
          <label>
            Телефон
            <input type="tel" name="phone" placeholder="+7 999 123-45-67" autoComplete="tel" />
          </label>
          <label className="full">
            Что нужно сделать
            <textarea name="message" rows="4" placeholder="Например: заменить тормозные колодки" />
          </label>
          <button className="button button-primary full" type="submit">
            <ShieldCheck size={20} aria-hidden="true" />
            {isSubmitted ? 'Заявка отправлена' : 'Отправить заявку'}
          </button>
          {isSubmitted && (
            <p className="form-status full" role="status" aria-live="polite">
              Спасибо. Сейчас это демо-форма, подключим отправку в Telegram, WhatsApp
              или на почту после выбора канала.
            </p>
          )}
        </form>
      </section>

      <footer className="footer">
        <div>
          <strong>СТО Север</strong>
          <span>Диагностика, ремонт и обслуживание автомобилей</span>
        </div>
        <a href={phoneHref}>{phone}</a>
      </footer>
    </main>
  );
}

export default App;
