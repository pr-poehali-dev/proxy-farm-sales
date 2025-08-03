import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icon'

const HeroSection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Приобретайте Прокси-Фермы: Ваш Путь к Пассивному Доходу от 
            <span className="text-primary"> $125 до $80 000</span> в Месяц
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Откройте для себя возможность стабильного заработка с окупаемостью от 6-8 месяцев и доходностью 150-200% годовых. Начните инвестировать в будущее уже сегодня!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="px-8 py-4 text-lg">
              <Icon name="TrendingUp" className="mr-2 h-5 w-5" />
              Стать Партнером
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
              <Icon name="Calculator" className="mr-2 h-5 w-5" />
              Рассчитать Доход
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">6-8</div>
              <div className="text-sm text-muted-foreground">месяцев окупаемость</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">150-200%</div>
              <div className="text-sm text-muted-foreground">доходность в год</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <div className="text-sm text-muted-foreground">довольных партнеров</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
    </section>
  )
}

export default HeroSection