import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Icon from '@/components/ui/icon'

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Как Работает Прокси-Ферма?
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Прокси-ферма — это комплексное аппаратно-программное решение для сдачи в аренду мобильных IP-адресов. 
            Каждый мобильный оператор обладает уникальным диапазоном IP-адресов в каждом городе.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Card className="border-2 mb-8">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Стратегическое Размещение
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Для обеспечения максимальной эффективности и удовлетворения потребностей клиентов, 
                    наша сеть прокси-ферм стратегически распределена по всей территории Китая, 
                    обеспечивая широкий спектр уникальных IP-адресов.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Это гарантирует высокое качество и надежность предоставляемых услуг, 
                    делая наши прокси-фермы незаменимым инструментом для различных сфер бизнеса.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-lg p-8 text-center">
                  <Icon name="Globe" className="h-24 w-24 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    Глобальная Сеть
                  </h4>
                  <p className="text-muted-foreground">
                    Прокси-фермы размещены в дата-центрах по всему Китаю
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-2 hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <Icon name="Server" className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Надежное Оборудование</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Используем только качественное оборудование с гарантией 4 года
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <Icon name="Wifi" className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Стабильное Соединение</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Постоянное подключение к мобильным операторам обеспечивает стабильность
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center">
                <Icon name="Shield" className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Высокое Качество</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Уникальные IP-адреса высокого качества для любых бизнес-задач
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection