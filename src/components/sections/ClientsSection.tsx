import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Icon from '@/components/ui/icon'

const ClientsSection = () => {
  const clients = [
    {
      title: "Менеджеры Маркетплейсов",
      description: "Для аналитики конкурентов и работы с несколькими аккаунтами.",
      icon: "ShoppingCart"
    },
    {
      title: "Банковский Сектор",
      description: "Для безопасных операций и мониторинга онлайн-активности.",
      icon: "Building"
    },
    {
      title: "Тестировщики и Разработчики",
      description: "Для проверки приложений и сайтов из разных геолокаций.",
      icon: "Code"
    },
    {
      title: "Агентства Недвижимости",
      description: "Для доступа к региональным базам данных и анализа рынка.",
      icon: "Home"
    },
    {
      title: "Менеджеры Трафика и SMM-Специалисты",
      description: "Для эффективного продвижения и управления рекламными кампаниями.",
      icon: "BarChart3"
    },
    {
      title: "IT-Специалисты",
      description: "Для различных задач, требующих анонимности и стабильного соединения.",
      icon: "Laptop"
    }
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Наши Клиенты: Кто Арендует IP-Адреса?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Широкий спектр профессионалов и компаний доверяет нашим решениям
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {clients.map((client, index) => (
            <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300 h-full">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 w-fit">
                  <Icon name={client.icon as any} className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">{client.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {client.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Card className="border-2 border-primary/20 bg-primary/5 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <Icon name="Users" className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Стабильно Высокий Спрос
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                На рынке существует постоянно растущий спрос на качественные мобильные IP-адреса. 
                Это обеспечивает стабильную загрузку наших прокси-ферм и гарантированный доход для партнеров.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default ClientsSection