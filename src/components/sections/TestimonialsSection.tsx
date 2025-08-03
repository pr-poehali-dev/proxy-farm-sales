import { Card, CardContent } from '@/components/ui/card'
import Icon from '@/components/ui/icon'

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Инвестировал в прокси-фермы полгода назад, и результат превзошел все ожидания! Доход стабильный, окупаемость быстрая. Очень доволен!",
      author: "Иван С.",
      location: "Москва"
    },
    {
      text: "Это идеальное решение для пассивного дохода. Никаких хлопот с настройкой или поиском клиентов. Всё работает как часы.",
      author: "Елена К.",
      location: "Санкт-Петербург"
    },
    {
      text: "Искал надежные инвестиции, и прокси-фермы оказались именно тем, что нужно. Прозрачность и поддержка на высшем уровне!",
      author: "Дмитрий В.",
      location: "Казань"
    },
    {
      text: "Благодаря прокси-фермам смог диверсифицировать свой портфель и получать значительный дополнительный доход. Рекомендую!",
      author: "Анна Л.",
      location: "Екатеринбург"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Более 1000 Благодарных Партнеров
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Наш успех подтвержден доверием сотен инвесторов. Прочитайте, что говорят наши партнеры о сотрудничестве с нами
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Icon name="Quote" className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-foreground mb-4 leading-relaxed">
                      {testimonial.text}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="User" className="h-4 w-4" />
                      <span className="font-semibold">{testimonial.author}</span>
                      <span>•</span>
                      <span>{testimonial.location}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection