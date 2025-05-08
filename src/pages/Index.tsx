
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from '@/components/ui/icon';

const TikTokLanding = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="relative flex flex-col items-center justify-center py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-[#ee1d52] to-[#69c9d0] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            Как запустить рекламу в TikTok
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Научись создавать эффективные рекламные кампании в самой быстрорастущей социальной сети
          </p>
          <Button className="bg-white text-[#ee1d52] hover:bg-gray-100 font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 animate-pulse">
            Записаться на курс
          </Button>
        </div>
      </header>

      {/* О курсе */}
      <section id="about" className="py-16 px-4 md:px-8 lg:px-16 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">О курсе</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#69c9d0]">Чему вы научитесь:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-1 text-[#ee1d52]">
                    <Icon name="CheckCircle" size={20} />
                  </div>
                  <p>Создавать и настраивать рекламный кабинет в TikTok Ads Manager</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-1 text-[#ee1d52]">
                    <Icon name="CheckCircle" size={20} />
                  </div>
                  <p>Разрабатывать эффективные креативы, которые привлекают внимание</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-1 text-[#ee1d52]">
                    <Icon name="CheckCircle" size={20} />
                  </div>
                  <p>Настраивать таргетинг для достижения вашей целевой аудитории</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-1 text-[#ee1d52]">
                    <Icon name="CheckCircle" size={20} />
                  </div>
                  <p>Анализировать результаты и оптимизировать рекламные кампании</p>
                </li>
              </ul>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-xl border border-gray-800">
              <div className="grid grid-cols-2 divide-x divide-y divide-gray-800">
                <div className="flex flex-col items-center justify-center p-6 text-center bg-gray-800">
                  <h4 className="text-4xl font-bold text-[#ee1d52] mb-2">8</h4>
                  <p className="text-gray-300">Недель обучения</p>
                </div>
                <div className="flex flex-col items-center justify-center p-6 text-center bg-gray-800">
                  <h4 className="text-4xl font-bold text-[#ee1d52] mb-2">16</h4>
                  <p className="text-gray-300">Практических заданий</p>
                </div>
                <div className="flex flex-col items-center justify-center p-6 text-center bg-gray-800">
                  <h4 className="text-4xl font-bold text-[#69c9d0] mb-2">24/7</h4>
                  <p className="text-gray-300">Поддержка</p>
                </div>
                <div className="flex flex-col items-center justify-center p-6 text-center bg-gray-800">
                  <h4 className="text-4xl font-bold text-[#69c9d0] mb-2">100%</h4>
                  <p className="text-gray-300">Гарантия результата</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section id="testimonials" className="py-16 px-4 md:px-8 lg:px-16 bg-black">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Отзывы наших учеников</h2>
          
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex flex-col space-y-4">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#ee1d52] to-[#69c9d0] flex items-center justify-center text-white text-xl font-bold">
                            А
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-bold">Анна Смирнова</h4>
                          <p className="text-gray-400">Маркетолог, 28 лет</p>
                        </div>
                      </div>
                      <div className="flex text-[#ee1d52]">
                        <Icon name="Star" />
                        <Icon name="Star" />
                        <Icon name="Star" />
                        <Icon name="Star" />
                        <Icon name="Star" />
                      </div>
                      <p className="text-gray-300">
                        "Курс превзошел все мои ожидания! За 2 месяца я научилась создавать рекламные кампании, 
                        которые действительно приносят результаты. Благодаря полученным знаниям конверсия 
                        наших рекламных кампаний выросла на 40%."
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
              
              <CarouselItem>
                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex flex-col space-y-4">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#ee1d52] to-[#69c9d0] flex items-center justify-center text-white text-xl font-bold">
                            Д
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-bold">Дмитрий Козлов</h4>
                          <p className="text-gray-400">Предприниматель, 35 лет</p>
                        </div>
                      </div>
                      <div className="flex text-[#ee1d52]">
                        <Icon name="Star" />
                        <Icon name="Star" />
                        <Icon name="Star" />
                        <Icon name="Star" />
                        <Icon name="Star" />
                      </div>
                      <p className="text-gray-300">
                        "Я скептически относился к рекламе в TikTok, но после прохождения курса 
                        мое мнение изменилось. Преподаватели дают актуальную информацию и делятся 
                        реальными кейсами. Теперь TikTok — наш основной канал привлечения клиентов."
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
              
              <CarouselItem>
                <Card className="bg-gray-900 border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex flex-col space-y-4">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#ee1d52] to-[#69c9d0] flex items-center justify-center text-white text-xl font-bold">
                            М
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-bold">Мария Петрова</h4>
                          <p className="text-gray-400">SMM-специалист, 24 года</p>
                        </div>
                      </div>
                      <div className="flex text-[#ee1d52]">
                        <Icon name="Star" />
                        <Icon name="Star" />
                        <Icon name="Star" />
                        <Icon name="Star" />
                        <Icon name="Star" />
                      </div>
                      <p className="text-gray-300">
                        "Отличный курс! Структурированная информация, понятное объяснение сложных 
                        моментов и постоянная поддержка кураторов. После курса я сразу применила 
                        знания на практике и получила первые заказы на ведение рекламы в TikTok."
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-0 bg-[#ee1d52] text-white border-0 hover:bg-[#c41944]" />
            <CarouselNext className="right-0 bg-[#ee1d52] text-white border-0 hover:bg-[#c41944]" />
          </Carousel>
        </div>
      </section>

      {/* Форма записи */}
      <section id="signup" className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-[#ee1d52] to-[#69c9d0]">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-2xl p-8 text-black transform hover:scale-[1.01] transition-transform">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-[#ee1d52]">Записаться на курс</h2>
            <p className="text-gray-600 mb-8 text-center">
              Оставьте свои контактные данные, и мы свяжемся с вами в ближайшее время
            </p>
            
            <form className="space-y-6">
              <div>
                <Input 
                  type="text" 
                  placeholder="Ваше имя" 
                  className="border-gray-300 focus:border-[#ee1d52] focus:ring-[#ee1d52]"
                />
              </div>
              <div>
                <Input 
                  type="email" 
                  placeholder="Электронная почта" 
                  className="border-gray-300 focus:border-[#ee1d52] focus:ring-[#ee1d52]"
                />
              </div>
              <div>
                <Input 
                  type="tel" 
                  placeholder="Номер телефона" 
                  className="border-gray-300 focus:border-[#ee1d52] focus:ring-[#ee1d52]"
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Ваш опыт в маркетинге (если есть)" 
                  className="border-gray-300 focus:border-[#ee1d52] focus:ring-[#ee1d52]"
                />
              </div>
              <div>
                <Button 
                  className="w-full bg-gradient-to-r from-[#ee1d52] to-[#69c9d0] text-white font-bold text-lg py-6 rounded-lg hover:shadow-lg transition-shadow"
                >
                  Записаться сейчас
                </Button>
              </div>
              <p className="text-xs text-gray-500 text-center">
                Нажимая кнопку "Записаться сейчас", вы соглашаетесь с нашей политикой конфиденциальности
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 lg:px-16 bg-black text-gray-400 text-center">
        <div className="container mx-auto">
          <p>© 2025 Курс "Как запустить рекламу в TikTok". Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default TikTokLanding;
