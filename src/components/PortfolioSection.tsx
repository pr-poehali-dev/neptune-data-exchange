import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const projects = [
  {
    title: "Загородный дом в скандинавском стиле",
    category: "Строительство домов",
    image: "/placeholder.jpg",
    author: "СтройМастер Иванов",
    location: "Московская область",
    tags: ["Дерево", "Скандинавский стиль", "220 м²"],
  },
  {
    title: "Минималистичный интерьер кухни",
    category: "Дизайн интерьера",
    image: "/placeholder.jpg",
    author: "Студия Forma",
    location: "Санкт-Петербург",
    tags: ["Минимализм", "Кухня", "Белый"],
  },
  {
    title: "Террасса с зоной барбекю",
    category: "Ландшафтный дизайн",
    image: "/placeholder.jpg",
    author: "ГринСтрой",
    location: "Краснодар",
    tags: ["Терраса", "Барбекю", "Дерево"],
  },
  {
    title: "Капитальный ремонт 3-комнатной квартиры",
    category: "Ремонт и отделка",
    image: "/placeholder.jpg",
    author: "Ремонт Эксперт",
    location: "Екатеринбург",
    tags: ["Под ключ", "75 м²", "Современный"],
  },
  {
    title: "Фасад с утеплением под камень",
    category: "Кровля и фасады",
    image: "/placeholder.jpg",
    author: "ФасадПро",
    location: "Новосибирск",
    tags: ["Утепление", "Декоративный камень"],
  },
  {
    title: "Перепланировка и объединение комнат",
    category: "Перепланировка",
    image: "/placeholder.jpg",
    author: "АрхиПлан",
    location: "Казань",
    tags: ["До/После", "Студия", "48 м²"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Работы мастеров</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Реальные проекты от проверенных специалистов. Нажмите на любую работу, чтобы узнать больше об исполнителе и связаться с ним.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="break-inside-avoid group relative overflow-hidden rounded-xl cursor-pointer bg-muted hover:shadow-2xl transition-all duration-300"
            >
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: index % 3 === 0 ? "4/5" : index % 3 === 1 ? "1/1" : "4/3" }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <Badge className="mb-2 text-xs bg-primary/80 text-primary-foreground border-none">
                    {project.category}
                  </Badge>
                  <h3 className="text-white font-bold text-sm mb-1">{project.title}</h3>
                  <div className="flex items-center gap-1 text-white/70 text-xs mb-2">
                    <Icon name="MapPin" size={10} />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-full bg-primary/50 flex items-center justify-center">
                      <Icon name="User" size={12} className="text-white" />
                    </div>
                    <span className="text-white/90 text-xs font-medium">{project.author}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs px-2 py-0.5 rounded-full bg-white/20 text-white/90">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-2 border-primary/20 hover:border-primary gap-2">
            <Icon name="Grid3x3" size={18} />
            Смотреть все работы
          </Button>
        </div>
      </div>
    </section>
  )
}
