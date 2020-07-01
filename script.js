var textArray = ['phone','tablet','desktop'] 
const typedText = document.querySelector('.typer')


class TextTyper {
 constructor(el,data,period){
     // передаю сюда DOM элемент
     this.el = el;
     // Массив с текстом
     this.data = data;
     // задержка( для появления новой буквы удаления или задержки перед удалением)
     this.period = parseInt(period,10) || 2000;
     //базовый текст
     this.text = '';
     //стартовое значения переключателя( нужно для смены слов из массива)
     this.startCount = 0
     // функция ,которая отвечает за единичное напечатывание или удаление буквы
     this.tick()
     //флаг для отслеживания удалаяется или печатается буква
     this.isDeleting = false;
    }
     
    
    
    tick = function(){
    
    // переменная счетчик, содержит остаток от деления начального значения каунта на длинну массива печатаемых слов
    // нужно для переключения по словам через ++ и отслеживания окончания массива(остаток будет 0)
       let i = this.startCount % this.data.length;
    //помещяем слово из массива
       let textVal = this.data[i]
    // присваиваем слово из массива в переменную текст и будем забирать или удалять по 1 букве 
    // проверяем удаляется ли слово или печатается
    if(this.isDeleting){
        this.text = textVal.substring(0,this.text.length - 1)
    } else {
        this.text = textVal.substring(0,this.text.length + 1)
    }
    //помещаем в наш спан this.text
    this.el.innerHTML = `${this.text}`;
    var delta = 200
    console.log(this.el)
    if (this.isDeleting) {
      delta;
    }
    var that = this
    if (!this.isDeleting && this.text === textVal) {
        delta = 2000;
        this.isDeleting = true;
      } else if (this.isDeleting && this.text === '') {
        this.isDeleting = false;
        this.startCount++;
        delta ;
      }
    // заметка
    // как я понял скрипт работает по принципу одной буквы, вечно,
    /* 
        до этого момента, происходит вот какая штука. наш скрипт выполняется вечно , пока существует класс TextTyper
        он начинает с 0 и прибавляет/удаляет одну букву( нулевую букву слова), потом значение длины строки увеличивается на 1 и согласно формуле из substring
        он прибавдяет следующую букву (1ую букву слова потом 2ую и т д) так как значение строки увеличилось на 1 ед( уменьшилось при удалении) 
        а дальше делаются проверки на то написано или удалено слово , чтобы скрипт понимал когда печатать а когда удалять и когда переключиться на новое слово
    */
   setTimeout(function(){that.tick()},delta);
};


}  

if(textArray){
new TextTyper(typedText,textArray, 2000)}




VanillaTilt.init(document.querySelector(".about__img"), {
  max: 5,
      speed: 400,
      perspective:900
  });
  VanillaTilt.init(document.querySelector(".chat__img"), {
    max: 5,
        speed: 400,
        perspective:900
    });
