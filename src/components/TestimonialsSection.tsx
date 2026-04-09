import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Разместил фото своих объектов и уже через неделю получил первый звонок от заказчика. Теперь веду несколько клиентов, пришедших именно через СтройГалерею.",
    name: "Алексей Петров",
    role: "Строитель частных домов, Москва",
  },
  {
    quote:
      "Очень удобно — листаешь фотографии, видишь стиль мастера, смотришь описание и сразу пишешь. Нашла дизайнера для своей квартиры именно так. Результат превзошёл ожидания!",
    name: "Елена Смирнова",
    role: "Заказчик, Санкт-Петербург",
  },
  {
    quote:
      "Раньше клиенты находили меня только по сарафанному радио. Теперь портфолио работает само — люди видят фото, читают описание и уже приходят с конкретным запросом.",
    name: "Дмитрий Коваль",
    role: "Мастер отделочных работ, Краснодар",
  },
  {
    quote:
      "Искал ландшафтного дизайнера для загородного участка. Нашёл идеального специалиста по фото похожего проекта. Договорились быстро, работой очень доволен.",
    name: "Михаил Захаров",
    role: "Заказчик, Подмосковье",
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollPosition += scrollSpeed

      if (scrollContainer.scrollWidth && scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Что говорят мастера и заказчики
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
          Реальные истории людей, которые нашли друг друга через СтройГалерею.
        </p>

        <div className="relative">
          <div ref={scrollRef} className="flex gap-6 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
            {/* Duplicate testimonials for seamless loop */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index} className="flex-shrink-0 w-[90vw] sm:w-[450px] border-none shadow-lg">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-base sm:text-lg mb-6 leading-relaxed text-pretty min-h-[120px]">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}