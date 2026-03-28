const features = [
  { icon: "🔒", title: "Сквозное шифрование", desc: "Каждое сообщение защищено — никто, кроме вас и собеседника, не имеет доступа" },
  { icon: "⚡", title: "Мгновенная доставка", desc: "Сообщения доходят за миллисекунды даже при слабом интернете" },
  { icon: "👥", title: "Групповые чаты", desc: "Создавай группы до 10 000 участников, каналы и сообщества" },
  { icon: "📎", title: "Медиа без ограничений", desc: "Отправляй файлы, фото, видео и голосовые сообщения в высоком качестве" },
];

export default function Featured() {
  return (
    <div id="features" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/6017d455-7feb-49ba-8522-defde2645f78/files/60c7615c-a152-47ed-a8fa-5e16978ff4f2.jpg"
          alt="Nexus messenger features"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Почему выбирают Nexus</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Всё, что нужно для общения — в одном приложении. Быстро, надёжно, красиво.
        </p>
        <div className="flex flex-col gap-5 mb-8">
          {features.map((f) => (
            <div key={f.title} className="flex items-start gap-4">
              <span className="text-2xl mt-0.5">{f.icon}</span>
              <div>
                <p className="font-semibold text-neutral-900 mb-1">{f.title}</p>
                <p className="text-sm text-neutral-500 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <button id="download" className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Скачать приложение
        </button>
      </div>
    </div>
  );
}