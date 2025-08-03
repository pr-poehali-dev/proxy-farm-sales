import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import Icon from '@/components/ui/icon'

const ContactSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Свяжитесь с Нами и Начните Зарабатывать!
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Оставьте заявку, и наш менеджер свяжется с вами, чтобы обсудить все детали и ответить на ваши вопросы
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Форма контактов */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  <Icon name="MessageSquare" className="h-6 w-6 text-primary inline mr-2" />
                  Оставьте Заявку
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input id="name" placeholder="Введите ваше имя" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" placeholder="+7 (XXX) XXX-XX-XX" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="investment">Интересующая сумма инвестиций</Label>
                  <Input id="investment" placeholder="Например: 10,000 USDT" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Ваше сообщение</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Расскажите о ваших целях и интересах..." 
                    rows={4}
                  />
                </div>
                
                <Button size="lg" className="w-full">
                  <Icon name="Send" className="mr-2 h-5 w-5" />
                  Отправить Заявку
                </Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </CardContent>
            </Card>
            
            {/* Контактная информация */}
            <div className="space-y-6">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-xl">
                    <Icon name="Mail" className="h-6 w-6 text-primary inline mr-2" />
                    Наши Контакты
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">info@proxyfarm.ru</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">+7 (XXX) XXX-XX-XX</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="MessageCircle" className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Telegram-канал</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <div className="text-center">
                    <Icon name="MessageCircle" className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      Следите за Новостями
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Подписывайтесь на наш Telegram-канал для получения актуальной информации 
                      о доходности, новых возможностях и ответов на вопросы
                    </p>
                    <Button size="lg" variant="outline" className="w-full">
                      <Icon name="ExternalLink" className="mr-2 h-5 w-5" />
                      Перейти в Telegram
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-2">
                <CardContent className="p-6">
                  <div className="text-center">
                    <Icon name="Clock" className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold text-foreground mb-2">Время Ответа</h4>
                    <p className="text-muted-foreground text-sm">
                      Мы отвечаем на заявки в течение 1 часа в рабочее время
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* CTA секция */}
          <div className="mt-16 text-center">
            <Card className="border-2 border-primary bg-gradient-to-r from-primary/10 to-blue-500/10 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <Icon name="Rocket" className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  Готовы Начать Путь к Финансовой Свободе?
                </h3>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Не упустите возможность создать стабильный источник пассивного дохода. 
                  Начните инвестировать в прокси-фермы уже сегодня!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="px-8">
                    <Icon name="TrendingUp" className="mr-2 h-5 w-5" />
                    Стать Партнером
                  </Button>
                  <Button variant="outline" size="lg" className="px-8">
                    <Icon name="Calculator" className="mr-2 h-5 w-5" />
                    Рассчитать Доход
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection