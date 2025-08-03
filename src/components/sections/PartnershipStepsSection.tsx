import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Icon from '@/components/ui/icon'

const PartnershipStepsSection = () => {
  const steps = [
    {
      number: 1,
      title: "Определитесь с Объемом Инвестиций",
      description: "Выберите количество прокси-ферм, соответствующее вашим финансовым целям.",
      icon: "Calculator"
    },
    {
      number: 2,
      title: "Заключите Договор",
      description: "Мы работаем строго по официальному договору, гарантирующему ваши права и прибыль.",
      icon: "FileText"
    },
    {
      number: 3,
      title: "Оплатите Оборудование",
      description: "После оплаты мы приступаем к реализации проекта.",
      icon: "CreditCard"
    },
    {
      number: 4,
      title: "Установка и Запуск",
      description: "В течение 3 дней оборудование закупается и устанавливается в дата-центрах Китая.",
      icon: "Settings"
    },
    {
      number: 5,
      title: "Доступ к Личному Кабинету",
      description: "Получите полный контроль над своими финансами через удобный личный кабинет.",
      icon: "Monitor"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Как Стать Партнером: Простой Путь к Доходу
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Всего 5 простых шагов отделяют вас от стабильного пассивного дохода
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {steps.map((step, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="flex items-center gap-4 flex-shrink-0">
                      <Badge variant="default" className="h-12 w-12 rounded-full flex items-center justify-center text-lg font-bold">
                        {step.number}
                      </Badge>
                      <Icon name={step.icon as any} className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="mt-12 border-2 border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-center text-xl">
                <Icon name="Info" className="h-6 w-6 text-primary inline mr-2" />
                Важное замечание
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-muted-foreground leading-relaxed">
                Вы получаете доход дважды в месяц, без необходимости вникать в технические детали. 
                Все процессы автоматизированы, а поиск клиентов для аренды IP-адресов берет на себя наша компания.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default PartnershipStepsSection