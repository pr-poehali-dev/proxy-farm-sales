import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'

const PricingSection = () => {
  const basePlan = {
    farms: 1,
    cost: 1000,
    income: 125,
    payback: 8
  }

  const plans = [
    {
      farms: 10,
      cost: 10000,
      income: 1250,
      payback: 8,
      popular: false
    },
    {
      farms: 100,
      cost: 100000,
      income: 12500,
      payback: 8,
      popular: true
    },
    {
      farms: 240,
      cost: 200000,
      income: 30000,
      payback: 7,
      popular: false,
      special: true,
      discount: "с учетом скидки"
    },
    {
      farms: 500,
      cost: 500000,
      income: 83333,
      payback: 6,
      popular: false,
      special: true,
      discount: "с учетом скидки"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Стоимость и Доходность Прокси-Ферм
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Выберите инвестиционный пакет, который подходит именно вам
          </p>
        </div>
        
        {/* Базовый тариф */}
        <div className="max-w-2xl mx-auto mb-16">
          <Card className="border-2 border-primary bg-primary/5">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl mb-4">
                Стартовый Пакет
              </CardTitle>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  {basePlan.cost.toLocaleString()} USDT
                </div>
                <div className="text-muted-foreground">
                  {basePlan.farms} прокси-ферма
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-center">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-2xl font-bold text-foreground">
                    ${basePlan.income}
                  </div>
                  <div className="text-sm text-muted-foreground">в месяц</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">
                    {basePlan.payback} мес
                  </div>
                  <div className="text-sm text-muted-foreground">окупаемость</div>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Инвестируйте в одну прокси-ферму и начните получать стабильный пассивный доход, 
                который окупится менее чем за год!
              </p>
              <Button size="lg" className="w-full">
                <Icon name="Rocket" className="mr-2 h-5 w-5" />
                Начать Инвестировать
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Основные тарифы */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Ваши Возможности Заработка Неограничены!
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <Card key={index} className={`border-2 transition-all duration-300 hover:shadow-lg ${
                plan.popular ? 'border-primary shadow-lg scale-105' : 'border-gray-200'
              }`}>
                <CardHeader className="text-center relative">
                  {plan.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                      Популярный
                    </Badge>
                  )}
                  {plan.special && (
                    <Badge variant="outline" className="absolute -top-3 left-1/2 transform -translate-x-1/2 border-orange-500 text-orange-500">
                      Спецпредложение
                    </Badge>
                  )}
                  <CardTitle className="text-xl mb-4">
                    {plan.farms} Прокси-Ферм
                  </CardTitle>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {plan.cost.toLocaleString()} USDT
                  </div>
                  {plan.discount && (
                    <div className="text-sm text-orange-600 font-medium">
                      {plan.discount}
                    </div>
                  )}
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-3 mb-6">
                    <div>
                      <div className="text-xl font-bold text-foreground">
                        ${plan.income.toLocaleString()}/мес
                      </div>
                      <div className="text-sm text-muted-foreground">доход</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-green-600">
                        {plan.payback} месяцев
                      </div>
                      <div className="text-sm text-muted-foreground">окупаемость</div>
                    </div>
                  </div>
                  <Button 
                    variant={plan.popular ? "default" : "outline"} 
                    className="w-full"
                  >
                    Выбрать План
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA секция */}
        <div className="text-center">
          <Card className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-blue-500/5 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <Icon name="TrendingUp" className="h-16 w-16 text-primary mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Готовы Начать Зарабатывать?
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Выберите подходящий вам инвестиционный пакет и начните получать пассивный доход уже через несколько дней
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="px-8">
                  <Icon name="Calculator" className="mr-2 h-5 w-5" />
                  Рассчитать Доходность
                </Button>
                <Button variant="outline" size="lg" className="px-8">
                  <Icon name="MessageCircle" className="mr-2 h-5 w-5" />
                  Консультация
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default PricingSection