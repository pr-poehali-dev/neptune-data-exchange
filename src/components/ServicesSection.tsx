import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const services = [
  {
    icon: "Building2",
    title: "Строительство домов",
    description:
      "Полный цикл: от фундамента до отделки. Частные дома, коттеджи, таунхаусы. Находите проверенных застройщиков по фотографиям реальных объектов.",
  },
  {
    icon: "Paintbrush",
    title: "Дизайн интерьера",
    description:
      "Дизайнеры со всей страны публикуют свои лучшие проекты. Вдохновляйтесь, выбирайте стиль и связывайтесь с автором понравившегося интерьера.",
  },
  {
    icon: "Wrench",
    title: "Ремонт и отделка",
    description:
      "Мастера показывают свои работы: укладка плитки, покраска, гипсокартон, натяжные потолки. Смотрите результат до того, как нанять специалиста.",
  },
  {
    icon: "TreePine",
    title: "Ландшафтный дизайн",
    description:
      "Сады, террасы, беседки и дорожки. Ландшафтные дизайнеры демонстрируют реализованные проекты — от небольших двориков до масштабных территорий.",
  },
  {
    icon: "Layers",
    title: "Перепланировка",
    description:
      "До и после — специалисты по перепланировке показывают трансформацию пространств. Найдите профессионала, который создаст ваш идеальный план.",
  },
  {
    icon: "Hammer",
    title: "Кровля и фасады",
    description:
      "Кровельщики и фасадчики публикуют завершённые объекты с описанием материалов и технологий. Выбирайте по качеству реальных работ.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Категории
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Найдите специалиста <span className="text-primary">по направлению</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          Более 8 категорий строительных и отделочных работ. Каждый мастер подтверждает свой профессионализм реальными фото.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm cursor-pointer"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon name={service.icon} className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
