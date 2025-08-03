import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Icon from '@/components/ui/icon'

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Гарантии по Договору",
      description: "Мы работаем строго в рамках договора, где прописаны все гарантии получения вашей прибыли.",
      icon: "FileCheck"
    },
    {
      title: "Быстрая Окупаемость",
      description: "Ваши инвестиции окупятся в рекордные сроки — от 6 до 8 месяцев.",
      icon: "Clock"
    },
    {
      title: "Надежное Оборудование",
      description: "Предоставляем 4-летнюю гарантию на оборудование, закрепленную в договоре.",
      icon: "Shield"
    },
    {
      title: "Официальная Регистрация",
      description: "Наша компания официально зарегистрирована в РФ и Китае, что гарантирует легальность и надежность.",
      icon: "Building"
    },
    {
      title: "Высокий Спрос",
      description: "На рынке существует стабильно высокий спрос на аренду IP-адресов.",
      icon: "TrendingUp"
    },
    {
      title: "Долгосрочная Перспектива",
      description: "Бизнес по аренде IP-адресов актуален до тех пор, пока существует интернет.",
      icon: "Globe"
    },
    {
      title: "Стабильность Ликвидности",
      description: "Оборудование не теряет своей ликвидности со временем.",
      icon: "DollarSign"
    }
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            7 Причин Выбрать Нас
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Почему более 1000 инвесторов доверяют нашим прокси-фермам
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300 h-full">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 rounded-full bg-primary/10 w-fit">
                  <Icon name={benefit.icon as any} className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Дополнительная секция с занятостью */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary/20 bg-primary/5">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl mb-4">
                <Icon name="Activity" className="h-8 w-8 text-primary inline mr-3" />
                Занятость Пула IP-Адресов
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-4xl font-bold text-green-600 mb-2">92%</div>
                  <div className="text-muted-foreground">Средняя загрузка</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-muted-foreground">Работа без перерывов</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-orange-600 mb-2">98%</div>
                  <div className="text-muted-foreground">Аптайм сервисов</div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Высокий процент занятости наших IP-адресов обеспечивает стабильный доход. 
                Постоянный мониторинг и техническая поддержка гарантируют максимальную эффективность работы.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection