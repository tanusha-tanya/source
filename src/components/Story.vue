<template>
  <div id="history" class="story">
     <main class="main">
      <div class="container">
        <div class="history">
          <header class="main-header">
            <h1>История Сергея Николаевича Селивановского</h1>
            <div class="header-description">
              <span class="header-description-item">личности</span>
              <span class="header-description-item">15 августа, 2019</span>            
            </div>
            <img class="history-image" src="assets/photo.jpg">
          </header>
          <div class="autor"> 
            <img class="autor-image" src="assets/pick.jpg" width="48" height="48">         
            <span class="autor-name">автор Сергей С.</span> 
          </div>
          <div class="autor-about" v-if="!udmDetected">
            <p>Я – Сергей Николаевич Селивановский – коренной житель Ижевска, прямой потомок оружейников. Доцент, много лет 
            преподавал в Ижевском государственном техническом университете им. М. Т. Калашникова на кафедре конструирования 
            радиоэлектронной аппаратуры. Написал учебник по английскому языку «Английский в шутках и анекдотах», который хранится 
            в библиотеке Конгресса США. До 80 лет трудился на заводе «Аксион». </p>
            <p>Любимое увлечение детства сделало меня историком и краеведом. Выпустил два сборника с ценными фотографиями. 
            Также веду свой блог, посвящённый истории Ижевска. Но обо всем по порядку. </p>
          </div>
          <div class="autor-about" v-else>
            <p>Мон – Сергей Николаевич Селивановский – Ижкарын вордски но улӥсько, пыӵал тӥрлык поттӥсьёслэн улӥзы. Доцент, трос аръёс ӵоже Ижысь М. Т. Калашников нимо техникая кун университетысь радиоэлектрон тӥрлыкез кылдтон кафедраын дышетӥ. Англи кылъя «Английский в шутках и анекдотах» учебник гожтӥ, со США-ысь конгресслэн лыдӟиськоннияз возиське. 80 аресозям «Аксион» заводын ужай. </p>
            <p>Пинал дырысь тунсыкъяськонэным валче мон историк но шаерчи луи. Дуно туспуктэмъёсын кык бичет поттӥ. Озьы ик Ижкарлы сӥзем блог нуисько. Но ваньмыз сярысь радызъя.  </p>
          </div>
          <div class="article" v-if="!udmDetected">
            <h2>Как трофейный фотоаппарат пробудил любовь к истории</h2>
            <p> Началось все с того, что в 1949 году папа подарил мне немецкий фотоаппарат «Ретина кодак». 
               Тогда мне было 12 лет. Первыми моделями стали брат и сестра, живность во дворе. Тогда наша семья жила 
               в деревянном доме, где сейчас располагается проходная мотозавода. Потом я немного осмелел и вышел снимать на улицу. </p>
            <p>Гулял по городу и фотографировал. Прятал фотоаппарат под пальто, выбирал объект и снимал. 
              Что такое фотография? Это застывший момент истории, неопровержимый факт. Там люди, здания, какое-то событие.</p>
            <p> Тогда за фотографии завода могли и наказать по всей строгости закона. По истечении времени все 
              снимки оказались исторически ценными. Так я начал коллекционировать старые фотографии Ижевска. </p>
            <p> Серьезно увлекся историей уже после 60 лет. Начал писать статьи на исторические темы. Хотя в школе 
              у меня было два предмета, которые я ненавидел. Это химия, которую не понимал, и история. Но все изменилось
               в один миг! Потом возникла идея написать книгу «Старый Ижевск: события и люди в объективе фотографов», 
               то есть за основу взять фотографии. </p>
            <p> В первую часть книги вошли 434 фотографии разных авторов, как профессионалов, так и любителей. 
              Также в ней можно найти информацию о 998 людях. Мне поступил такой вал фотографий, что в скором времени появилась
               и вторая часть книги.</p>
            <p> Процесс продолжается и сейчас. Я уже набрал материалы на третью книгу.</p>
            <p> Все свои книги я издаю на собственные деньги. Помогают мне в этом нелегком деле и родные, и знакомые. </p>
            <p> Примерно год коплю, откладываю от пенсии. До 80 лет работал. Уволился в прошлом году. В течение года 
              где-то накапливал 70 тысяч рублей. Потом родственники, знакомые помогали. Сейчас снова коплю.</p>
            <p>На сегодняшний день работаю над книгой об ижевских радиолюбителях. Огромный труд получается.
               Буквально вчера общался с известным радиолюбителем, он рассказал мне очень много интересных фактов, около 
               20 фотографий дал.</p>
            <p>Также готовлю большую статью о родословной своей семьи.  </p>
            <h2>Главный казначей Ижевска, налоговый инспектор, оружейник, священнослужители</h2>
            <p>Изучение родословной своей семьи – еще одно мое увлечение. Благодаря этому смог найти 
            родственников в Санкт-Петербурге. Точнее, троюродная племянница, кандидат химических наук Елена
             Борисовна Борова нашла меня сама. Неожиданное знакомство случилось лет 8-9 назад. </p>
            <p>Ее прабабушка была родной сестрой моего дедушки, который работал казначеем. Она нашла меня через 
            журнал «Иднакар», в котором была опубликована моя статья. Оказывается, она собрала материалы об истории 
            Селивановских со времен Петра I. В своей работе описала где-то 800 человек. Только не могла найти
             информацию дальше моего деда.</p>
            <p>Мы обменялись фотографиями и историческими документами. Сейчас совместными усилиями пишем статью, 
            в которой будет описано 10 поколений Селивановских.</p>
            <p>В основном, наши предки были священниками. Это более 100 человек в Кировской области  Вятской губернии. 
            2 июня этого года произошло значимое событие  в истории нашего рода. В селе Рождественское Кировской области 
            рядом с разрушенной церковью открыли памятник. Один из наших предков более 20 лет был священником в этой церкви.  
            Также его дети пошли по стопам отца.</p>
            <p>Еще мы с Еленой Борисовной планируем инициировать возрождение этой церкви. </p>
            <p>Многие мои родственники были выдающимися личностями и внесли свой вклад в развитие республики. </p>
            <p>Мой дед был мастером на ствольной мастерской оружейного завода. За улучшение технологий он получил семь медалей 
            до революции еще. Другой дед был казначеем. Родился в беднейшей семье, в которой воспитывались 14 детей. 
            За счет таланта, настойчивости поднялся, сделал карьеру известного экономиста Вятской губернии.  
            С 1909 до 1917 года возглавлял Ижевское казначейство. Потом до 1926-го был руководителем Управления 
            местных финансов, работал с Наговицыным, который в своих письмах писал, что мой дед сделал многое для 
            финансовой системы Вотской области.</p>
            <p>Я изучил работу ижевского казначейства того времени. Тогда все было настолько строго, 
            каждый работник имел револьвер, их охраняла конная полиция. Казначейство находилось по адресу Советская, 1 на первом этаже.</p>
            <p>Учет был строжайший. В возрасте 56 лет дед умер во время отчетного доклада. Он настолько добросовестно
            относился к своей работе. При советской  власти еще был кадровый голод, ему было не с кем работать. 
              Если человек умел немного писать, его брали на работу.</p>
            <p> А вот у моей бабушки Ольги Липхард были немецкие корни. Пока мне не удалось найти информацию 
            об этой фамилии. Известно, что отец Ольги Липхард был налоговым инспектором в Сарапуле и долгие 
            годы возглавлял эту службу. В царской России был очень хороший закон, направленный на сохранение 
            генетического фонда. Когда умирал госслужащий, его старшему сыну предоставляли право бесплатного 
            обучения в военном училище. Старшие дочери в семье также могли учиться в Институте благородных девиц.</p>
            <p> И вот когда умер отец Ольги, ее старшей сестре выпало такое счастье. Они поехали в Петербург. 
            Поскольку мать бабушки Крицкие жили здесь. Старшая сестра училась плохо и на собеседования вместо нее ходила младшая,
            то есть моя бабушка. Она успешно справилась со всеми испытаниями. Осенью на учебу пошла старшая и вот тогда разоблачили
              все это дело. В итоге на учебу приняли Ольгу.</p>
            <p> После окончания учебы они вернулись на Вятку. Там Ольга Липхард познакомилась с 
            Селивановским и вышла за него замуж. Потом его как финансового работника отправили в Глазов, 
            он также работал в Селтах и Малмыже. Отец Сергея Николаевича родился уже в Малмыже.  </p>
            <h2>Любовь к английскому языку или о дружбе с Лео</h2>
            <p>Во 2-м классе я увлекся немецким языком, как раз война закончилась. Я себе письма писал якобы из Германии 
            от отца-разведчика, друзья верили. К сожалению, бабушка Ольга меня не обучала. Хотя прекрасно знала французский,
             немецкий, так как окончила Институт благородных девиц в Петербурге, так называемый институт ордена Святой Екатерины. 
             Она скрывала это, была запугана после революции. Я сам варился в собственном соку.</p>
            <p>В 5-м классе начали изучать английский язык, он показался мне странным и не понятным. Думал, что за язык? Написано одно, произносится другое, то ли дело в немецком. Постепенно я разобрался, начал получать пятерки. В техникуме тоже был хороший преподаватель. Давала много технических текстов. Когда поступил в институт, начал все лекции писать на английском языке. Это такой авантюризм был, который на учебу повлиял. Я не мог разобрать, что написал, получал тройки. Это дало мне очень многое для навыков перевода с русского языка. 
            <p>В течение 25 лет преподавал технический английский ученикам № 25 школы Ижевска. Вроде звали на временную работу, 
            но получилось, что более 20 лет проработал. Чтобы заинтересовать учеников, я применял на своих 
            уроках английский юмор. В конце уроков раздавал карточки с анекдотами. Его надо было перевести, 
            оценить юмор и объяснить, в чем соль. Потому что он отличается от нашего. Там большинство анекдотов 
            основано на многозначности слов. У нас одно слово имеет 2-3 значения, а у них до 200.</p>
            <p>На моих уроках никогда не было проблем с дисциплиной и оценками. Мои ученики, которые уже сами стали
             пенсионерами, до сих пор помнят язык. Потом я написал книгу о методике применения юмора при изучении
              иностранных языков и назвал ее «Английский через юмор». </p>
            <p>Она мгновенно разошлась по учителям и преподавателям. Здесь 800 поговорок, анекдотов, загадок. Наконец,
            я обнаглел и послал эту книгу в Америку, Германию, Англию, Индию, Китай, Москву. Думал, большие гонорары хоть 
            раз заработаю. Из Америки пришел контракт. Из гонорара 5 долларов заплатили. В Москве издали ее 10 тыс. экземпляров. </p>
            <p>Кроме того, в изучении английского мне помог друг, музыкант Леопольд Панчак, который являлся носителем языка.  </p>
            <p>Наша дружба с Леопольдом Панчаком длилась более 20 лет. Он русский, родился в Шанхае. Потом вернулся
            на родину и не знал русского языка. В 1948 году его отправили в Арск (Татарстан). Там он познакомился с ижевскими 
            композиторами, которые пригласили его в Удмуртию. Мы могли с ним беседовать часами напролет.</p>
            <h2>Работа отвлекает от грустных мыслей</h2>
            <p>Если хочешь все успевать, надо рано вставать. Летом я уже в 4 часа бодрствую. Этот год принес большую утрату в мою жизнь, 29 июня умерла жена. Мы прожили вместе 57 лет. А знакомы были 67.
             Мы еще в техникуме познакомились. Работа отвлекает меня от грустных мыслей.</p>
            <blockquote> 
              <img src="assets/svg/quote.svg" class="quote-img" alt="Vue Logo"  width="32"> 
              <strong>Если хочешь все успевать, надо&nbsp;рано вставать</strong>
              <cite>Сергей С.</cite>
            </blockquote>
          </div>
          <div class="article" v-else>
            <h2>Кызьы трофейной фотоаппарат историез яратыны мылкыд сётӥз</h2>
            <p> Ваньмыз кутскиз 1949-тӥ арын атае «Ретина кодак» немец фотоаппарат кузьмам бордысь. Соку мыным 12 арес вал. Нырысетӥ модельёсы луизы сузэр-выны, азбарысь пудо-живот. Соку семьямы пу юртын улӥз, али отын мотозаводлэн пыронэз. Соберем он дӥсьтӥсьгес луи но урме туспуктыны потӥ.  </p>
            <p>Каретӥ поръясько но туспуктэмъёс лэсьтӥсько. Фотоаппаратме пальто улам ватылӥ, мае ке бырйисько но туспуктӥсько вал. Мар со туспуктэм? Со историлэн дугдэм вакытэз, оскымон учырез. Отын адямиос, юртъёс, кыӵе ке но ужрад. </p>
            <p> Соку заводэз туспуктэм понна катъя туж чурыт кылкутытыны но быгатӥзы. Дыр ортчемъя, ваньмыз снимокъёс история понна туж дуно луизы. Озьы мон Ижкарлэсь вашкала туспуктэмъёссэ люканы кутски. </p>
            <p> Историен рос-прос тунсыкъяськыны 60 аресме тырмытэм бере кутски ни. Историен герӟаськем кылбуръёс гожъяны кутски. Школаын кык яратонтэм тодметъёс вал – химия, кудзэ ӧй валалля, но история. Но одӥг вакытэ ваньмыз воштӥськиз! Берлогес «Старый Ижевск: события и люди в объективе фотографов» книга гожтыны, нош туспуктэмъёсты солы инъет карыны малпан кылдӥз.
                Книгалэн нырысетӥ люкетаз пӧртэм авторъёслэн 434 туспуктэмъёссы пыризы. Ӧнерчиослэн но, тунсыкъяськисьёслэн но. Озьы ик отысь 998 адямиос сярысь ивортодэт шедьтыны луэ. Ӝоген книгалэн кыкетӥ люкетэз но кылдӥз, сокем трос туспуктэмъёс мыным вуизы. 
                </p>
            <p> Ужанрад али но азьланьтӥське. Мон куинетӥ книгалы материалъёс люкай ни. </p>
            <p> Ваньзэ книгаосме аслам коньдонэным поттӥсько. Мыным ӵыжы-выжыосы, тодмоосы юртто. </p>
            <p> Ар пала люкасько, пенсиысьтым висъясько. 80 аресозям ужай. Кылем арын ужысьтым кошки. Ар ӵоже 70 сюрс манет котыр люкалляй. Собере ӵыжы-выжыосы, тодмоосы юрттылӥзы. Али нош ик люкасько.  </p>
            <p> Али Ижысь радиолюбительёс сярысь книга бордын ужасько. Бадӟым уж пӧрме. Тани толон гинэ тодмо радиолюбителен вераськи, со трос тунсыко учыръёс сярысь мыным вераз, 200 пала туспуктэмъёс сётӥз. </p>
            <p>Озьы ик аслам семьяелэн выжыез сярысь бадӟым статья дасясько. </p>            
            <h2>Ижкарысь валтӥсь казначей, выт бичась инспектор, пыӵал тӥрлык поттӥсь, вӧсьчиос</h2>
            <p>Семьяелэсь выжызэ эскерон – эшшо одӥгез тунсыкъяськонэ. Солы луыса ӵыжы-выжыосме Санкт-Петербургысь шедьтыны быгатӥ. Шонергес вераса, троюродной племяницае, хими тодосъя кандидат Елена Борисовна Борова монэ ачиз шедьтӥз. Возьмамтэ шорысь тодматскон 8-9 ар талэсь луиз.</p>
            <p>Солэн пересь песянаез казнечей луыса ужась песятаелэн сузэрез вал. Со монэ «Иднакар» журнал пыр шедьтӥз, отын мынам статьяе потӥз. Со Селеивановскийёслэн семьязылэсь Пётр Первый дырысен историзы сярысь материалъёс люка вылэм. Аслаз ужаз со 800 пала адями сярысь гожтӥз. Но песятаелэсь кыдёке ивор шедьтыны быгатымтэ.</p>
            <p>Ми туспуктэмъёсын но историысь ужкагазъёсын воштӥськимы. Али ӵошен статья гожтӥськомы, отын Селивановскийёлэн 10 поколениоссы сярысь гожтэмын луоз.</p>
            <p>Тросэз выжыосмы вӧсьчиос вал. Со Ватка губерниысь Киров улосвылын 100-лэсь трос адями. Туэ 2-тӥ инвожое выжымылэн историяз пусйымон ужрад вал. Киров улосвылысь Рождественкской черкогуртын куашкатэм черк вӧзын синпелет усьтӥзы. Одӥгез ӵыжы-выжымы та черкын 20 арлэсь кема вӧсьчи вал. Солэн сюресэтӥз нылпиосыз но мынӥзы.</p>
            <p>Эшшо ми Елена Борисовнаен ӵош та черкез улытыны кичӧлтон сётыны малпаськомы. </p>
            <p>Тросэз ӵыжы-выжыосы бадым адямиос вал но элькунэз азинтон понна трос лэсьтӥзы.</p>
            <p>Мынам песятае пыӵал тӥрлык поттон заводысь пыӵал гумы лэсьтон мастерскойын мастре вал. Технологиосты умоятон понна со революцилэсь азьвыл на сизьым медаль басьтӥз. Мукетыз песятае казначей вал. Вордскиз</p>
            <p>туж начар семьяын, кудаз 14 нылпиосты будэтӥзы. Талантэзлы, ялан ужамезлы луыса Вятка губерниын тодмо экономист луиз. 1909-тӥ арысен 1917-тӥ арозь Ижысь казначействоен кивалтӥз. Собере 1926-тӥ арозь коньдон ужпумъёсъя управленилэн кивалтӥсез вал, Наговицынэн ужаз, со аслаз гожтэтъёсаз мынам песятае Вотской областьысь коньдон сӧзнэт понна трос лэсьтӥз шуыса гожъяз.</p>
            <p>Мон со вакытысь казначействолэсь ужзэ эскери. Соку сокем чурыт куронъёс вал, котькуд ужасьлэсь револьверез вал, соосты вал вылын полиция возьмаз. Казначейство Советской урамысь 1 номеро юртлэн нырысетӥ этажаз интыяськиз.</p>
            <p> Учёт туж чурыт вал. Песятае йылпумъян доклад дыръя 56 аресаз кулӥз. Со сокем пыр-поч ужзэ лэсьтыны тыршиз. Совето вакытэ эшо ӧерчиос уг тырмо вал, солы нокинэн ужаны вал. Адями гожъяськыны кӧня ке быгатӥз ке, сое уже басьтылӥзы.</p>
            <p> Нош песянаелэн Ольга Липхардлэн немец выжыосыз вал. Со фамилия сярысь ивор шедьтыны ӧй на быгаты. Тодмо, Ольга Липхардлэн атаез Сарапулын выт бичась инспектор вал но трос аръёс ӵоже та ёзэсэн кивалтӥз шуыса. Эксей Россиын генетика фондэз утён пона туж умой кат вал. Кун служащий кулэм бере солэн бадымезлы пиезлы ожгар училищеын дунтэк дышетскыны эрикрад сётылӥзы. Семьяысь бадымъёсыз нылъёс озьы ик Санэт нылъёслэн институтазы дышетскыны быгатӥзы.</p>
            <p> Куке Ольгалэн атаез кулӥз, солэн апаезлы сыӵе шуд усиз. Соос Петербурге мынӥзы. Песянаелэн анаез Крицкийёс татын улӥзы. Апаез урод дышетскиз, соин ик кенешонъёсы со интые сузэрез, мынам песнае, ветлылӥз. Сӥзьыл дышетскыны бадымез мынӥз, соку ваньмыз шараяськиз. Дышетскыны Ольгаез кутӥзы. </p>
            <p> Дышетскон йылпумъяськем бер соос Ваткае берытскизы. Отын Ольга Липхард Селивановскиен тодматскиз но солы бызиз. Собере сое коньдон ужпумъёсъя ужасез сямен Глазкаре ыстӥзы, озьы ик Сьӧлтаын но Малмыжын ужаз. Сергей Николаевичлэн атаез Малмыжын вордскиз ни.  </p>
            <h2>Англи кылэз яратон яке Леоен эшъяськон сярысь</h2>
            <p>2-тӥ классын мон немец кылэн тунсыкъяськыны кутскиз, ӵапак ож быриз. Мон аслым будьто ке атаелэсь-разведчиклэсь Германиысь гожтэтъёс гожъяй, эшъёсы оскизы. Жаляса верано, Ольга песянае монэ ӧз дышеты. Ачиз француз, немец кылъёсты туж умой тодэ вал, угось Петербургысь Санэт нылъёслэсь институтсэс йылпумъяз, Дун-чылкыт Екатериналэз орденэзлэн институтэз эшшо шуо вал. Со ватылӥз сое, революци бере кышкамын вал. Мон ас поннам выри. </p>
            <p>5-тӥ классын англи кылэз дышетыны кутским, со мыным йӧспӧртэм но валантэм потӥз. Малпасько, мар кыл со? Гожтэмын одӥг, лыдӟиське мукет сямен, немец кылын умойгес. Пумен мон валай, витьёс басьяны кутски. Техникумын но умой дышетӥсь вал. Трос технической текстъёс сётылӥз. Куке мон институтэ пыри, вань лекциосты англи кылын гожъяны кутски. Со сыӵе аввантюра вал, кудӥз дышетскон вылын шӧдӥськиз. Мар гожъямме валатэк, куиньёс басьтылӥ. Со мыным ӟуч кылысь берыктонлы трос быгатонлыкъёс сётӥз. </p>
            <p>25 ар ӵоже Ижкарысь 25 номеро школаын технической англи кыллы дышетӥ. Огдырлы шуыса уже ӧтизы вал кадь, но 20 арлэсь кема ужай. Дышетскисьёслэсь тунсыкъяськонзэс ӝутон понна урокъёсын англи юморез кутылӥ. Урокъёс пумын анекдотъёсын карточкаос сётъяй. Мое берыктыны, юморез дунъяны но пуштроссэ валэкытыны кулэ вал. Малы ке шуоно со асьмелэнлэсь висъяське. Отын тросэз анекдотъёс кылъёслэн трос пӧртэм валатонэнызы герӟаськемын. Асьмелэн кыллэн 2-3 валатонэз, нош соослэн 200-озь. </p>
            <p>Мынам урокъёсам дисциплинаен но оценкаосын шугъяськонъёс ноку ӧй вал. Дышетскисьёсы, кудъёсыз асьэос но пенсионеръёс ни, али но кылэз тодо. Соберем он кунсьӧр кылъёсты дышетонын юморез кутон амалъя книга гожтӥ но сое «Английский через юмор» нимай. </p>
            <p>Со дышетӥсьёс пӧлын туж ӝог вӧлмиз. Татын 800 лэчыткылъёс, анекдотъёс, мадиськонъёс. Мон сэзь кариськи но книгаез Америкае, Германие, Англие, Индие, Китае, Москвае келяй. Малпай, бадӟым гонораръёс коть басьто. Америкаысь контракт вуиз. Гонорарысь 5 доллар тыризы. Москваын сое 10 сюрс экземплярен поттӥзы. </p>
            <p>Мо сяна, англи кылэз дышетонын эше, крезьгурась Леопольд Панчак юрттӥз, со англи кылэз нуллӥсь вал. </p>
            <p>Леопольд Панчакен эшъяськонмы 20 арлэсь кема кыстӥськиз. Со ӟуч, Шанхайын вордскиз. Собере вордскем  шаераз берытскиз но ӟуч кылэз уг тоды вал. 1948-тӥ арын сое Арске (Татарстан) келязы. Отын со Ижысь крезьгурасьёсын тодматскиз, соос сое Удмуртие ӧтизы. Ми соин часъёсын вераськыса пукылӥмы. </p>
            <p>Уж ӝож малпанъёсты палэнтэ</p>
            <p>Ваньзэ вуттэмед потэ ке, вазь султыны кулэ. Гужем мон 4 часын пыд вылам ни. </p>
            <p>Таиз ар мыным бадӟым ыштон вайиз. 29-тӥ инвожое кышное кулӥз. </p>
            <p>Ми соин 57 ар ӵош улӥмы. Нош тодмо вал 67. Ми техникумын ай тодматским. Уж ӝож малпанъёсты вунэтыны юрттэ. </p>
          </div>
        </div>
      </div>
    </main>
    <MyAside/>
  </div>
</template>

<script>
    import MyAside from './my-aside.vue'

export default {
  name: 'app',
  components: {   
    MyAside
  },
   computed:{
      udmDetected:function(){ 
      let path = this.$router.currentRoute.name;
      console.log(path)     
      if(path == "udm"){      
        return true
      }
      else{
         return false
      }   
    } 
  }
}
</script>

<style>
  @media(min-width: 1440px){
    .story{
      background: rgba(230,230,231,0.3)
    }
  }
  .main{
    margin: 40px auto;
  }
  @media(min-width: 768px){
    .main{
      margin: 66px auto;
    }
  }
   @media(min-width: 1440px){
    .main{
      background: #FFF; 
      width: 1300px;    
      margin: 0 auto;
      padding: 66px 0;
    }
 }
  @media(min-width: 1920px){
    .main{           
       width: 1740px;
       padding: 118px 0;     
    }
 }
  .main-header{
    max-width: 320px;   
     position: relative; 
     margin: 0 auto;
  }
  @media(min-width: 768px){
    .main-header{
     max-width: 768px;   
    }
  }
  @media(min-width: 1024px){
    .main-header{
      max-width: 100%;  
    }
  }
  @media(min-width: 1024px){
    .history{
      margin: 0 auto;
      width: 83%;
      position: relative;
    }
  }
  @media(min-width: 1920px){
    .history{
      margin: 0 auto;
      width: 66%;
      position: relative;
    }
  }
  h1{
    font-size: 32px;
    line-height: 32px;
    margin: 29px 0;
    font-family: 'TT_Firs_Bold', Arial, Helvetica, sans-serif;
    text-align: center;
  }
  @media(min-width: 768px){
    h1{
      font-size: 48px;
      line-height: 48px;
    }
  }
  @media(min-width: 1024px){
    h1{
      font-size: 64px;
      line-height: 64px;
    }
  }
  @media(min-width: 1920px){
    h1{
      font-size: 80px;
      line-height: 88px;
      letter-spacing: 0.01em;
    }
  }
  p{
    margin: 20px 0;
  }
   @media(min-width: 1440px){
     p{     
     font-size: 20px;
      line-height: 36px; 
    }
  } 
  h2{    
    font-family: 'TT_Firs_Bold', Arial, Helvetica, sans-serif;;
    font-size: 20px;
    line-height: 24px;
    margin-top: 26px;
    text-align: center;
  }
  @media(min-width: 768px){
    h2{    
      font-size: 24px;
      line-height: 32px;
      margin-top: 58px;
    }
  }
  @media(min-width: 1024px){
    h2{    
      font-size: 32px;
      line-height: 42px;
      margin-top: 67px;
    }
  }

  @media(min-width: 1440px){
     h2{
      font-size: 48px;
      line-height: 48px;
      margin-bottom: 35px;
    }
  }
  .header-description{
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }
  .header-description-item{
    margin: 0 8px;
    font-size: 12px;
    line-height: 14px; 
    letter-spacing: 0.1em;
    text-transform: uppercase;
    opacity: 0.6;
  }
  @media(min-width: 1024px){
    .header-description-item{    
      font-size: 14px;
      line-height: 14px;
    }
  }
  .history-image{
    width: 100%;
    max-width: 320px;
    position: relative;
    margin: 40px auto 20px auto;
    display: block;
  }
   @media(min-width: 768px){
    .history-image{
     max-width: 768px;   
    }
  }
   @media(min-width: 1440px){
    .history-image{    
      max-width: 100%;
    }
  }
  .autor{
    margin: 20px auto;
    display: flex;
    align-items: center;
    max-width: 320px;   
     position: relative; 
  }
  
  @media(min-width: 768px){
    .autor{
     max-width: 768px;   
    }
  }
   @media(min-width: 1440px){
    .autor{
     max-width: 100%;   
    }
  }  
  .autor-image{
    margin-right: 16px;
  }
  .autor-name{
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    opacity: 0.6;
  }
  .autor-about{
     opacity: 0.6;
  }
  @media(min-width: 1440px){
    .autor-about{
     opacity: 1; 
     font-size: 20px;
      line-height: 36px; 
      margin-top: 41px;
      margin-bottom: 61px;
    }
  }  
  @media(min-width: 1440px){
    .article{
      width: 75%;
      margin: 0 auto;
      position: relative;
    }
  }
  blockquote{
    margin: 40px 0;
    padding: 40px 0;
    border-top: 1px #E6E6E7 solid;
    border-bottom: 1px #E6E6E7 solid;
    text-align: center;
  }
  @media(min-width: 1440px){
    blockquote{
      margin: 0;
      margin-top: 57px;
      padding: 62px 100px;
    }
  }
  .quote-img{
    display: block;
    margin: 0 auto;
    position: relative;
  }
  @media(min-width: 1440px){
     .quote-img{
       width: 52px;
       height: 32px;
     }
  }
  blockquote strong{
    font-family: 'PT_Root_UI', Arial, Helvetica, sans-serif;
    font-size: 20px;
    line-height: 20px;
    display: block;
    margin-top: 35px;
    margin-bottom: 29px;
  }
  @media(min-width: 1440px){
    blockquote strong{
      font-size: 32px;
      line-height: 42px;
    }  
  }
  blockquote cite{
    opacity: 0.6;
    letter-spacing: 0.1em;
    text-transform: uppercase;    
    font-size: 12px;
    line-height: 14px;
    font-style: normal;
  }
  @media(min-width: 1440px){
    blockquote cite{
      font-size: 14px;
      line-height: 14px;
    }
  }
</style>