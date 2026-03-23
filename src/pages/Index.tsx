import { useState } from "react";
import Icon from "@/components/ui/icon";

const heroImage = "https://cdn.poehali.dev/projects/1056e247-8704-473b-8149-f365e8fb2c89/files/5c3626b6-045c-43ec-ae1a-e27bc7fdeb28.jpg";

const services = [
  {
    icon: "Wind",
    title: "Чистка вентиляционных каналов",
    desc: "Удаляем пыль, грязь и налёт из всех воздуховодов. Восстанавливаем нормальную циркуляцию воздуха.",
    price: "от 3 000 ₽",
  },
  {
    icon: "Droplets",
    title: "Дезинфекция и дезодорация",
    desc: "Уничтожаем бактерии, плесень и неприятные запахи. Безопасные средства — можно оставаться дома.",
    price: "от 2 500 ₽",
  },
  {
    icon: "Settings",
    title: "Обслуживание кондиционеров",
    desc: "Чистим фильтры, испаритель и конденсатор. Кондиционер работает эффективнее и потребляет меньше энергии.",
    price: "от 2 000 ₽",
  },
  {
    icon: "Home",
    title: "Вытяжки и зонты",
    desc: "Полная разборка и чистка кухонной вытяжки. Жировые отложения, накипь — убираем без следа.",
    price: "от 1 500 ₽",
  },
  {
    icon: "Building2",
    title: "Офисы и торговые центры",
    desc: "Комплексное обслуживание вентиляции для бизнеса. Работаем ночью — без остановки вашей работы.",
    price: "по договору",
  },
  {
    icon: "ShieldCheck",
    title: "Замена фильтров",
    desc: "Подбираем и устанавливаем подходящие фильтры для вашей системы. Гарантия чистого воздуха.",
    price: "от 800 ₽",
  },
];

const steps = [
  { num: "01", title: "Заявка", desc: "Оставляете заявку — мы перезвоним в течение 15 минут и уточним детали." },
  { num: "02", title: "Осмотр", desc: "Мастер приезжает, осматривает систему и составляет точную смету без скрытых платежей." },
  { num: "03", title: "Чистка", desc: "Профессиональное оборудование, аккуратная работа. Ваша мебель и полы под защитой." },
  { num: "04", title: "Результат", desc: "Показываем результат до и после. Даём гарантию на выполненные работы." },
];

const prices = [
  {
    name: "Базовый",
    subtitle: "Квартира до 50 м²",
    price: "4 900",
    features: ["Чистка воздуховодов", "Замена фильтров", "Фото до/после", "Гарантия 6 месяцев"],
    highlight: false,
  },
  {
    name: "Стандарт",
    subtitle: "Квартира до 100 м²",
    price: "8 900",
    features: ["Всё из «Базового»", "Дезинфекция системы", "Дезодорация", "Гарантия 12 месяцев", "Акт выполненных работ"],
    highlight: true,
  },
  {
    name: "Премиум",
    subtitle: "Дом / офис до 200 м²",
    price: "16 900",
    features: ["Всё из «Стандарта»", "Кондиционеры включены", "Видеоотчёт из воздуховодов", "Гарантия 18 месяцев", "Выезд в удобное время"],
    highlight: false,
  },
];

const faqs = [
  {
    q: "Как часто нужно чистить вентиляцию?",
    a: "В квартире — раз в 1–2 года. В офисах и кафе — каждые 6 месяцев. После ремонта или покупки жилья — обязательно сразу.",
  },
  {
    q: "Нужно ли уходить из квартиры во время чистки?",
    a: "Нет, оставаться дома можно. Мы используем безопасные средства дезинфекции. При работе с сильными реагентами предупреждаем заранее.",
  },
  {
    q: "Сколько времени занимает чистка?",
    a: "Стандартная квартира — 2–4 часа. Большие офисы и дома — по договорённости. Мастер назовёт точное время после осмотра.",
  },
  {
    q: "Вы работаете с управляющими компаниями?",
    a: "Да, сотрудничаем с УК, ЖСК и ТСЖ. Предоставляем все необходимые документы и акты для отчётности.",
  },
  {
    q: "Есть ли гарантия на работу?",
    a: "Да. В зависимости от пакета — от 6 до 18 месяцев. Если что-то пойдёт не так — приедем и исправим бесплатно.",
  },
];

const navLinks = [
  { href: "#services", label: "Услуги" },
  { href: "#how", label: "Как работаем" },
  { href: "#prices", label: "Цены" },
  { href: "#faq", label: "Вопросы" },
  { href: "#contacts", label: "Контакты" },
];

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#f0f7ff] font-['Golos_Text',sans-serif]">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-blue-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-[#0e7cc4] flex items-center justify-center">
              <Icon name="Wind" size={18} className="text-white" />
            </div>
            <span className="font-bold text-[#0e7cc4] text-lg tracking-tight">Технологии Чистого Воздуха</span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-sm text-slate-600 hover:text-[#0e7cc4] transition-colors font-medium"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => scrollTo("#contacts")}
            className="hidden md:block bg-[#0e7cc4] text-white text-sm font-semibold px-5 py-2 rounded-xl hover:bg-[#0a68a8] transition-colors"
          >
            Заказать чистку
          </button>

          {/* Mobile burger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2">
            <Icon name={menuOpen ? "X" : "Menu"} size={22} className="text-slate-700" />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-blue-100 px-4 pb-4 flex flex-col gap-3 animate-fade-in">
            {navLinks.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className="text-left text-slate-700 py-2 text-base font-medium border-b border-blue-50"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contacts")}
              className="bg-[#0e7cc4] text-white font-semibold px-5 py-3 rounded-xl mt-2"
            >
              Заказать чистку
            </button>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a5a9c]/85 via-[#0e7cc4]/60 to-transparent" />

        {/* Decorative circles */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-40 w-48 h-48 bg-[#38bdf8]/10 rounded-full blur-2xl" />

        <div className="relative max-w-6xl mx-auto px-4 py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full mb-6 border border-white/20">
              <Icon name="CheckCircle" size={14} />
              Работаем по всему городу · Выезд за 2 часа
            </div>

            <h1 className="text-5xl md:text-6xl font-black text-white leading-[1.1] mb-6 animate-slide-up">
              Чистый воздух —<br />
              <span className="text-[#7dd3fc]">чистый дом</span>
            </h1>

            <p className="text-lg text-blue-100 mb-10 leading-relaxed max-w-lg">
              Профессиональная чистка и дезинфекция вентиляции. Убираем пыль, плесень и запахи. 
              Работаем аккуратно — без грязи и лишних хлопот для вас.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollTo("#contacts")}
                className="bg-white text-[#0e7cc4] font-bold px-8 py-4 rounded-2xl text-base hover:bg-blue-50 transition-all hover:scale-105 shadow-xl shadow-blue-900/20"
              >
                Заказать чистку
              </button>
              <button
                onClick={() => scrollTo("#prices")}
                className="border-2 border-white/50 text-white font-semibold px-8 py-4 rounded-2xl text-base hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Посмотреть цены
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-14">
              {[
                { val: "5 лет", label: "на рынке" },
                { val: "1 200+", label: "объектов очищено" },
                { val: "98%", label: "довольных клиентов" },
              ].map((s) => (
                <div key={s.val}>
                  <div className="text-3xl font-black text-white">{s.val}</div>
                  <div className="text-blue-200 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#0e7cc4] font-semibold text-sm uppercase tracking-widest">Что мы делаем</span>
            <h2 className="text-4xl font-black text-slate-800 mt-2">Наши услуги</h2>
            <p className="text-slate-500 mt-3 max-w-lg mx-auto">
              Полный спектр работ по чистке и обслуживанию вентиляционных систем
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 section-fade">
            {services.map((s) => (
              <div
                key={s.title}
                className="group bg-[#f0f7ff] rounded-2xl p-6 hover:bg-[#0e7cc4] transition-all duration-300 cursor-default border border-blue-100 hover:border-[#0e7cc4] hover:shadow-xl hover:shadow-blue-200/40"
              >
                <div className="w-12 h-12 bg-[#dbeafe] group-hover:bg-white/20 rounded-xl flex items-center justify-center mb-4 transition-colors">
                  <Icon name={s.icon} size={22} className="text-[#0e7cc4] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-slate-800 group-hover:text-white text-lg mb-2 transition-colors">{s.title}</h3>
                <p className="text-slate-500 group-hover:text-blue-100 text-sm leading-relaxed mb-4 transition-colors">{s.desc}</p>
                <div className="font-bold text-[#0e7cc4] group-hover:text-white text-sm transition-colors">{s.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section id="how" className="py-24 bg-[#f0f7ff]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#0e7cc4] font-semibold text-sm uppercase tracking-widest">Процесс</span>
            <h2 className="text-4xl font-black text-slate-800 mt-2">Как мы работаем</h2>
            <p className="text-slate-500 mt-3 max-w-lg mx-auto">
              Прозрачно и без сюрпризов — от звонка до результата
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 section-fade">
            {steps.map((step, i) => (
              <div key={step.num} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-blue-200 z-0" style={{ width: "calc(100% - 2rem)" }} />
                )}
                <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm relative z-10">
                  <div className="w-14 h-14 bg-[#0e7cc4] rounded-2xl flex items-center justify-center mb-4">
                    <span className="text-white font-black text-lg">{step.num}</span>
                  </div>
                  <h3 className="font-bold text-slate-800 text-lg mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Feature badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {["Профессиональное оборудование", "Сертифицированные специалисты", "Гарантия на все работы", "Без скрытых доплат"].map((badge) => (
              <div key={badge} className="flex items-center gap-2 bg-white border border-blue-100 rounded-full px-5 py-2.5 text-sm text-slate-700 shadow-sm">
                <Icon name="Check" size={14} className="text-[#0e7cc4]" />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICES */}
      <section id="prices" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#0e7cc4] font-semibold text-sm uppercase tracking-widest">Тарифы</span>
            <h2 className="text-4xl font-black text-slate-800 mt-2">Понятные цены</h2>
            <p className="text-slate-500 mt-3 max-w-lg mx-auto">
              Выберите подходящий пакет — цена фиксированная, без дополнительных платежей
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 section-fade">
            {prices.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 flex flex-col border transition-all ${
                  plan.highlight
                    ? "bg-[#0e7cc4] text-white border-[#0e7cc4] shadow-2xl shadow-blue-300/40 scale-105"
                    : "bg-[#f0f7ff] text-slate-800 border-blue-100"
                }`}
              >
                {plan.highlight && (
                  <div className="text-xs font-bold bg-white/20 text-white rounded-full px-3 py-1 self-start mb-3">
                    Популярный
                  </div>
                )}
                <div className={`text-sm font-medium mb-1 ${plan.highlight ? "text-blue-200" : "text-[#0e7cc4]"}`}>
                  {plan.name}
                </div>
                <div className={`text-sm mb-4 ${plan.highlight ? "text-blue-200" : "text-slate-500"}`}>
                  {plan.subtitle}
                </div>
                <div className="mb-6">
                  <span className={`text-4xl font-black ${plan.highlight ? "text-white" : "text-slate-800"}`}>
                    {plan.price} ₽
                  </span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.highlight ? "bg-white/20" : "bg-[#dbeafe]"}`}>
                        <Icon name="Check" size={11} className={plan.highlight ? "text-white" : "text-[#0e7cc4]"} />
                      </div>
                      <span className={plan.highlight ? "text-blue-50" : "text-slate-600"}>{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => scrollTo("#contacts")}
                  className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all hover:scale-105 ${
                    plan.highlight
                      ? "bg-white text-[#0e7cc4] hover:bg-blue-50"
                      : "bg-[#0e7cc4] text-white hover:bg-[#0a68a8]"
                  }`}
                >
                  Выбрать пакет
                </button>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-400 text-sm mt-8">
            Нестандартный объект? Напишите нам — рассчитаем индивидуально
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-[#f0f7ff]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#0e7cc4] font-semibold text-sm uppercase tracking-widest">FAQ</span>
            <h2 className="text-4xl font-black text-slate-800 mt-2">Частые вопросы</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-blue-100 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-semibold text-slate-800 text-base">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ml-4 transition-all ${openFaq === i ? "bg-[#0e7cc4] rotate-180" : "bg-blue-100"}`}>
                    <Icon name="ChevronDown" size={16} className={openFaq === i ? "text-white" : "text-[#0e7cc4]"} />
                  </div>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-blue-50 pt-4 animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-[#0e7cc4] font-semibold text-sm uppercase tracking-widest">Контакты</span>
              <h2 className="text-4xl font-black text-slate-800 mt-2 mb-6">Оставьте заявку</h2>
              <p className="text-slate-500 mb-8 leading-relaxed">
                Перезвоним в течение 15 минут, ответим на все вопросы и запишем удобное время для выезда мастера.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { icon: "Phone", label: "Телефон", val: "+7 (000) 000-00-00" },
                  { icon: "MessageCircle", label: "WhatsApp / Telegram", val: "+7 (000) 000-00-00" },
                  { icon: "Clock", label: "Режим работы", val: "Пн–Вс: 8:00 – 22:00" },
                  { icon: "MapPin", label: "Зона выезда", val: "Весь город и область" },
                ].map((c) => (
                  <div key={c.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#dbeafe] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name={c.icon} size={18} className="text-[#0e7cc4]" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">{c.label}</div>
                      <div className="text-slate-800 font-semibold">{c.val}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="bg-[#f0f7ff] rounded-3xl p-8 border border-blue-100">
              <h3 className="text-xl font-bold text-slate-800 mb-6">Быстрая заявка</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-slate-600 mb-1.5 block">Ваше имя</label>
                  <input
                    type="text"
                    placeholder="Иван Иванов"
                    className="w-full bg-white border border-blue-200 rounded-xl px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0e7cc4]/30 focus:border-[#0e7cc4] transition-all"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-600 mb-1.5 block">Телефон</label>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="w-full bg-white border border-blue-200 rounded-xl px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0e7cc4]/30 focus:border-[#0e7cc4] transition-all"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-600 mb-1.5 block">Тип объекта</label>
                  <select className="w-full bg-white border border-blue-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0e7cc4]/30 focus:border-[#0e7cc4] transition-all">
                    <option value="">Выберите тип</option>
                    <option>Квартира</option>
                    <option>Частный дом</option>
                    <option>Офис</option>
                    <option>Ресторан / кафе</option>
                    <option>Другое</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-600 mb-1.5 block">Комментарий</label>
                  <textarea
                    placeholder="Расскажите о вашей задаче..."
                    rows={3}
                    className="w-full bg-white border border-blue-200 rounded-xl px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0e7cc4]/30 focus:border-[#0e7cc4] transition-all resize-none"
                  />
                </div>
                <button className="w-full bg-[#0e7cc4] text-white font-bold py-4 rounded-xl hover:bg-[#0a68a8] transition-all hover:scale-[1.02] shadow-lg shadow-blue-200 text-base">
                  Отправить заявку
                </button>
                <p className="text-center text-xs text-slate-400">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0a3d6b] text-white py-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
              <Icon name="Wind" size={16} className="text-white" />
            </div>
            <span className="font-bold text-white">Технологии Чистого Воздуха</span>
          </div>
          <p className="text-blue-300 text-sm">Профессиональная чистка вентиляции</p>
          <p className="text-blue-400 text-sm">© 2024 Технологии Чистого Воздуха. Все права защищены</p>
        </div>
      </footer>
    </div>
  );
}