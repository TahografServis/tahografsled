(function () {

var module = {
    exports: null
};

// The en-US hyphenation patterns are retrieved from 
// http://tug_org/svn/texhyphen/trunk/collaboration/repository/hyphenator/
module.exports = {
	id: ['ru-ru', 'ru'],
	leftmin : 2,
	rightmin : 2,
	shortestPattern : 1,
	longestPattern : 7,
	specialChars : '-абвгдежзийклмнопрстуфхцчшщъыьэюяё',
	patterns : {
		2 : '1м1ю1эь1ы1ъ11щ1ш1г1ц1ф1п1ж',
		3 : 'ь2я2ипк2у2кф2кц2кш1кьк2ю2лб1лии1л2лм1ло2лпи1ки1ил1т2лцл1чи1ел2ю1ля--82мжи1а1зя2мм8-71зы2зшз1ч2зц2мп2мф1зу2зт2мц2мщ2мэм2ю1на2нг1не1нин1л1ноз1нз1л1нун1х2нцю1ё1зиь2ё2нш1зе2нщ1ны1чё2згн2э1няо1вог2о1еу1ёо3и2жъ2жц2жф2ойж2мо1кжг2и1ре1яеэ2о1т2оюо1я2кппё1пе1пх22пц2пш2пщ2рг2рз2рма1б2рп2еоо1ё2рф2рх2рц2рш1нё2рщ2ръе1ир2ю1сасг2е1ес1зс2мс1н1сосп21кё1ср1суи1ё2ебсч21зёе1а1дяа1дсш21ды2дъ2дщ1сыд1х2дф1ду1ся2тг2тжа1етм22тф4тц2дп2тщ2тъ2ть2тэт2юу1ау1е1доу1ид1лу1о1ди1деу1удв2а1и1да2гф2уэа1ку1як2о2фгф4и2фм2гп2фф1ха2хг1хе1хи1хохп22хш2кмца12цгг2ици12ггг2а1ке1вя2цм1вывъ22вщ2вш2вцвф23цу2цц2ёб3цыцю11чач1в1чеч2же1ё1чи1чм3чо1чуч2х2кгш2в2шм2шф1дёш1х2шц2вм2шьв1ли1т2щмйя1ъю21бёъя2йд2ые2а1ёв1дыи21ва1бя1бь1бы2бщ2бш2бц2бфб1тыу22й1ьб2ь2еь2оь2юя1у2кси1чэ1в2эгэ2мэ2нэ2пэс11боэ2фэх2э2цэя2и1яю1аю1бю1вю1еб1лю1ию1к2бж2юм1бебг2б1ва1ую1хю1чя1лю1яя1к1баа1яя1иа1чя1е',
		4 : '1зьия1зоах3сауэ12ачаа2члач1та2шляд1ра2эряд1вау2чая2бая2вая2зау2хя2гня1вуя1воба1зя2бряк1сба2ою2щьау2да2уб2б1ба1тябвы2а1тю2б1дя2ль3бевю1тыю1тую1то3беею1тию1рыю1рую1рою1рию1рею1раю1о1ю2нью2мчя2мью1лю3бец2бещя3наб1з21б2и3биаби2б2биж3бикю2ли3биою1лею1лаа1тыат2хю1зоби1х2б3ка1туюз2гянс2ю1дья1раю2блю2бвя1рия1роя1рьа1то2блыа1тиэхо3яс1кяс1лэ2теэ2со2бля2б3няс2тэс3мэск2я1таэ1рыэ1руэ1риэ1реят3вэо2зэ3ньа1таэ3мая3тиэкс1эк1лэд1р3ботя1тоэв1ря1ту2бр.я1тыья1вя1тяях1ль2щуь2щеь2щаьхо2ь2тмь2сньс2кя1хуьмо1ь2кль2и1ь2знье1кяце1ь2дць2вяя2шл2яю.ы3шь2я1я2брсб1руыт2р2брьы2сшыс2чб1ряы2схб3скбс4л6зь.1б2уыс2пы3собу1сй2кь2б1ха1ря2б1ча1рюа1рыар1хы2снбы2сы3сеы3саа1ру2бь.2бьс2бьтбэ1р3б2юыр2в6тр.а1вёы3по3вагы2мчы2льык1сва1зык2лыиг1а1роы2знвах13вац3вая2в1бв1вив1вр2вг2а1риы2зл1вев3вегыз2да1лё1вее1везы2длы2гныг2лы3гиы3гаы2бл1веса1рёъя3на1ре1вец1вею1вея1веёвзг2взд2ъе2свзъ2ъе2лъе2дъе2г1вёз2щь.2щ1р2щ1н1вёсщеш21визще1хще1сви1ощеи2виу3ви2ф2в1квк2ла1ра1вмёв2лаш2ю13шья3шью3шьи3шье2вли4шь.2влю1вьё2вляг1лё1вме2в1н2ш1чд1вёвно12апод1рё2штсв3ныш1ти2ш1свов22ш1р1водш3прш2п24шни2ш1н1дьё1вокш2лювоп2ш1лыше1као2с2ш1бао2р1чья1чью2чьт2чьс1вох1чьи1чье1вою2вп22вр.2чь.2ч1чао2к3чукао2д2чтмч2те2ч1с2а1о2ч1нч2мо2чме2чмаа1нь2члич2ле2ч1к3чиц1врюв1ря3чике1вёчжо22ежёче1ое3зё2ч1дв1т2ан1р2ч1б1вуаву3ге1лё2вуи2епёву3пцы2пе1рёё1веё1воа2мч1вхоё1ву2в1ч2ёже2ц1т2амоё3зеё1ка2ц1с2ц1рвып22цп2вых22ц1н2вь.1вьеё1ки2вьс2вьт1вью1вья2ц1л1в2юамб42амаа1люга1зциу3га2у2г3бгба2г1виё1куцип2а1лы3ге.2ц1зце1тце1кце1з2ц1д2г3ж2г1зё1лаё1ле2цвыц2ве2ц1б3цах2г1к3цам3ца.а1луё1лухью1а3лиг1лех1х22хую1хуш1хус1хун2хуй2хуе1ху.2х1тх1рях1рыё1лыхоя2хоф2хоп22г3ма1ле2х1нх1лух1к2хие2ё2мчх1з2хео3а1лах3д2ак1сх3выг3ня1х2в2х1бхао3го1зха2дё3наф2ю13гойг2ол2фь.2фш22ф1чёнс22фуфф2тм2ф1т2ф3сф1ру3гою2ёпе2гр.ф1роф1ри3фот3фон2ф1нё2плф2лоф2лиф2ла2ф1к3фитфи1офи2жё4пн2ф1дак2л2ф1в2ф1бфаэ13фашфа2х2грю1аккуя2зак1ва2ихг4саг4сб2г3тгу1вгу1су2шп2ёпо2г1ч2г3ш2г3эё4пту2шлу3шиу3шеда1зда2оу1чь1учр2д1баз1рд1ве1двиух1рух1лу2хву2фруф1лу3фид3вкд1влуу2сууг2ё1ра2двя2дг2у1тяё1ре1утюу1тыу1ту3дезу1тоу1тиу1тау2сьу2сч2усцу1сфус3сус2пу2сну1смус2лу1сгу1ряу1рю2дж.у1рыу3ру2джсу1роё1риу1риу1реу1рау2плуо2фуо2суо2пуо2куо2вуо2бё1родип2у1ньу3нау2мчдиу3у1люу1луди1х2д1кё1руу1леу1ла2д1нд3нау1коу1киук1ву1каё1рыу1зоу2жжё1скуе2хуе1суе2луе2дазг2у3дууд2ву2гну2глдо1зу2гву1вуу1воув2лу1видоп2уб1ру2ас2ёсл1тяпдо1с1тяж1тягтю1тё3соазв2тью14тьтть2м3тьи3тье4ть.ё1стае2сё1та2тш2а2еп2др.2т1чае2л2т1хё1ти1тущт2тм2т1тт2сбт1ры2тръд1ре2трщ2трф2трр2трп2трн2трм2трд2трг2трв2трб2тп21тощд1рито1д2т1нт3мщё1тот2ль2т1л3ткнтик2тии22т1зёт1рте1д1т2е2т1дад2ц2твя2твы2тву2тви2тв.д1ры1тащ1тасд1рят2ан1таг2сязё1тудск2сю1с2д1тё1ты1с2юду3гс2эссэ1рду2о1сья1сью2сьт2ськ1сье2сь.ду1хсы2ссы2зё1тюё1тяа2дл2дцу2дцы2д1ч1съ23жёвж2жёс3шнз1вё2дыг2адв2дыд2счос1чл2дыт2дыщ2дь.1дье2дьк2дьт1дью1дья1сча1д2юа3гу2агоеа2д2знё2сцоеа2з2сцас1х23зуёсу1хсу2зсу1всу2б1каёс4ть1сты2стце1ве2стфе1ви2стс2стп2стне1во2стм2стк1стис2те2стб2ст.сс2че2вте1вуе1вхсст2е1вьсс2пег2дс2снсс2лс2сб2с1с2ср.а2гд2спьс3пнед2ж2агасо1дс2ов3куё2сноа2вха1ву2сльск1сск2р2скнск2л4ск.си1х3сиз1с2иа2вт1лён1с2ж1с2ес2дос3дис2дес2даее2хе2жг1сд2с2го2ежес2гнс2ги1лёх1с2в2сбюе3зес2бы1сб21луё1ряю1рюс1рю.3льёрэ1л1рья1рью2рьт2рьс2рьк1рьи1рье2рь.1рым2рызе3зяа1во1рыбеи2деи2меи2о1ры.не3ёе1каа1виек2зе1кирш2та1вер2чмр2чл2р1че1куе1лае1лер2цвав1ве1луе1лые1люе3лярх1ррх1лр2хва3буе2мчрф2ле3на1ньё1руленс21ру.е1нэо1лёр2тм2р1трс2пр2сне1одрс2к4р1с2р1р2омё1роуе2ои1ро.2р1нр2мчаа2цр3лярлю1р2лье2омрк1ср2кв2р1к1риш1рицеоп21риур2инриб2ри3аеос2р1зоаа2р1ре.р2дцр2длрд2ж2р1дрг2рр2гнр2гваа2пр1вь2епер1вое2плр1ви2р1б1рая1раюраа21ра.е4пн2епоп2ю1е4пте1ра2пьте2рв2пь.е1ре4а3а.юс14п3чо1рёо3фё2пф23пубе1рип3туе1ро2п1тп3соп2ру2прспри12пр.2пп2е1ру3пойе1рые1рюе1ряп3нып3нае1сге1ск2п1н2пл.4п3кпе2з.ую22есл2п1дпа3ф.ус2оя2зоя2доя2в1рьёе3со2есп.уп2ош2то1чте1сточ2ло2цоо1хуо1хре1та2охио3феоуп2о1у2е1тие1то1отхет1ро2тме1туе1тыо3ти1отд1отге1тюе1тяе1у22еуботв2еуз2.уо32осхеф2ло1стос2бо1ряо1рюо1ры2орцо1роо1рио1рео1ра2ецве1чле2шлс2дёею2г.ук2ея2з1с2ёо2офо2олжа1зо1о2онс22ж1в.уе22жгаж2гио1нрж2гу2ж1донд2о3нао2мьом2ч2омеж2дио3маждо3жду14ждьо3ля3жево1люо1лыо1луо3лоо1лео3ла1окт2жжаж2жеок2в.уд2жи1оойс22ж1к2ж1л.уб2ж3мас2тё2ж1нжно1ои2оои2мжоу3ои2з2жп2жпо1ж2ру2ж1с1сьё1т2ё2ж1ч3тьё2жь.2жьс2жьт1за1заа2заб2оие3.уё2о1зозаг4ое2цое1оое2дое1б.ст2о1дь.ск2о2вхов2ту1лёзап22обь1объоб1рзас21обмзат22обазау2зах2оап1о3авзая2з1б2у1рё1н2юу3шё1нья1ньюз1ве2ньчз1ви2ньт2ньсз1во1ньо2нькз1вр1зву1ньиз1вьц2вёз3га1нье2нь.3ны.ч2тё1чьёнш2т3шьёы3сён2чл2н1ч2зж2з3з2ь2щё3зи..не8нхо18не.2нф23ную3зисну1х8бъ.3зич2з1кзко1н2тм8въ.2н1тн2снн2слн2сг2н1с2зм2з3мн8гъ.н1рон3п2ноэ2ноб28дъ.2н1н8жъ.нк1снк2л2зненк2в2зно2зну2н1к3нищ3ниц1зовни1хниу33ний1зое8зъ.1зоинея23неунеи2не3е3неднег2.оз4н2дцн2дл1зоннд2ж1зоо2н1днг2рнг4л8къ.2н1в3ная2нащзос22нач8лъ.мя1р8мъ.мэ1р8нъ.мью12мьс1зохзош22мь.1зоэ1зоюз1рамы2смым18пъ.2мш28ръ.2м1хз1ромфи3з1руз2рюз1ря2з1с8съ.з1ти8тъ.3зу.8фъ.2м1тзу1вмс2нмс2к3зуе2м1см1ры2мримп2л2зуп8хъ.3моф3моп3мон8цъ.8чъ.8шъ.3мод8щъ.2м1нзы2з.аи22м1л3мкн2зыщ1зьеах2а1зью3зья1з2ю.а-8.б-8и2аби2авиаг2.в-82м1д2мг2мб2лм3би4м1б3мачмаф2иао2и2апма2у3маг.ль23лях3лями2аф2ляд3ля.2и1б.г-81люж1лю..д-8и1ви3лья3лью2льчи1ву2льц2ивыиг2ди3ге2игл2льт3льои2гн2льн2льм2льк3льи3лье2льди1дв4ль.1лым1лый1лыжид1ри1дь.е-81лыеие2гие2д1лы..ис3.ё-81луюлу1сие2р1лун1луелу3глу1в1лу.и1зо.ио2из1р.ж-8ийс2.ии2лс3б.з-8.и-82л1н.й-8и3коллю1л2ль2л1ли3ку.к-8лк2в2л1килп2.л-8и2льл1зо2има1лех1лен1ле.и3милго1л2глл1вуи2мчл1воинд21инжл1вил1вел1бринс2.м-81лаялау11инф1инъи1обл2ак1лаеи2оги1од1ла.и1оз.н-8.о-8.п-8и1он2к1ч.р-8и1ор.с-81кут1кур3кум1куй3куе.т-8кт2р2к1тк3сук3сои1ош.у-8кс3мкс3г.ф-8ип3н2кр..х-8.ц-81коши2рви2рж1кос1коз1код1ирр1кови2сби2сдис1к.ч-82к1н.ау21клю2кльк3лыкк3с1китки1о1кив2к1з2кеа.ш-8кда2и4сси1ст2к1д.щ-8к1вук1ви.ъ-82к1б1каю1ках1кат1кани2тм1кам1кай1каек2ад1кав.ы-8и1у2иу3пиф1лй2хми2фрй2тмй2сшй2снй2сбйп2лйно1.ь-8.э-8и1ху.ю-8ия2д.я-8и2штию4лию2нию2т',
		5 : '-г8ю8и2шлыиш2лиих1риих1рей2д3вихо3кй2о1сйо2три3х2о8щ8у-й3скайс2кейс4мо-щ8у8-щ8ф8й2с3ф8щ8ф-иха3диф2люйх2с3и3тьяка2бл8щ8т-и3тью-щ8х8-щ8т88щ8с-8щ8х-каз3нка1зо-щ8ц81кал.1кало1калси2т1рит1ву-щ8с88щ8р--щ8р83к2аска1стит1ви8щ8п-8щ8ц--щ8п8ит3ваита2вк2вакк2васк2ваши1сьик2воз-щ8ч8и2стл8щ8ч--щ8ш88щ8ш-ис3ноке2глкед1р8щ8о--щ8о8ис3муис3меис1лыкиос1ки2пл8щ8н--щ8щ82к1к28щ8щ--щ8н88щ8м--щ8м82клем8щ8л-к3ленк1лео-щ8л88щ8к-к2ликк2лин-щ8к8к3лия8щ8й-к2лозк3лом-щ8й8кло3т1клук-щ8ъ8ис3киис3ке8щ8и-2кля.2клям2клях8щ8ъ--щ8ы8-щ8и8к2ноп8щ8з-8щ8ы--щ8з8-щ8ь83кова8щ8ь-ко1дририу38щ8ж--щ8ж83конскоп2р8щ8ё-ко1ру-щ8э8ко1сккос3мко1сп1котнко2фр-щ8ё88щ8э--щ8ю88щ8ю-к1релкре1о8щ8е-к1реч1крибк1ридк2риз-щ8е8к2ритк1рихк1роак1робк2роек1рокк1роок1рорк1роск1рофк1рохк1роэкру1ск1рядип2ля8щ8д-к2с3в-щ8я8к2с3дк2сибк1скикс1клк1скоипат2ио2хо-щ8д88щ8г-кс3тек1стокс1трк1стуиоуг2и1отскта2к-щ8г8кто1си1отк8щ8я-ку1веи1ота-ъ8а81куля8ъ8а-куп1л8щ8в-ио2саку3рокус1кку1стио1руку3ть1куче1куют3кующи3ора2к1х2и1опт-ъ8б8и1олеи1оксио3зоио2де2лабела2бл2лагола2гр-щ8в8ио2вр8щ8б-ла1зоио2болак2р1лам.-щ8б88щ8а--щ8а88ш8я--ш8я88ш8ю--ш8ю88ш8э--ш8э88ш8ь-1инсула2усла2фр1ла1х8ъ8б-1инспино1с-ъ8в88ъ8в-им2чаи2м1р-ш8ь8им3плимои22л3д2-ъ8г8ле1вл8ш8ы--ш8ы8ле1джле3до8ш8ъ-ле1зрлек1л2лемн8ъ8г--ш8ъ88ш8щ-ле2сбле2ск-ш8щ88ш8ш--ш8ш8ле1тв8ш8ч--ъ8д8ле1хрильт28ъ8д-лиа2м3ливо3ливылиг2л-ш8ч8лие3рли2кв2лимплио1сли2пллис3м8ш8ц-ли2твлиу3м-ш8ц8ли1хлли1хр-ъ8е88ъ8е-л2к1л-ъ8ё8ик1скик1рои2кляи2квилни2еик2вало2бл8ш8х--ш8х8ло2вл8ш8ф--ш8ф88ш8у-ло1др2лоенло1зв-ш8у8ло2кл8ш8т--ш8т8ло2рв8ш8с-ло1рулос1к-ш8с82лотдлот2рло2шл8ъ8ё-2л1с2и3к2аизо2о-ъ8ж8лу1бр1из1д8ъ8ж-8ш8р-из1в2лу1знлу1кри3ж2длуо2д-ш8р8иепи1лу3тьие1о22л3ф22л1х2л2х3ви3ениие2зуие3де-ъ8з88ъ8з--ъ8и8и1д2ж1лых.и2дей8ъ8и-иг1рыиг1руиг1ро-ъ8й8игни3и2гли2льск8ш8п--ш8п8и2глеив2хои3в2с1льща1льще1льщуи1в2р2и1вои2в3з2и1ве2иваж1люсьлю1таи2б1риа2целя1ви3ляво3лявыи2а1хи3атуля1реля1ру8ъ8й--ъ8к8ма2вз8ъ8к-ма2гнма2дрма2дьма1зо8ш8о--ш8о88ш8н-мас3л-ш8н88ш8м--ш8м8-ъ8л8ианд28ъ8л-ма2чти3анаиа2му-ъ8м8м3бля2м3в2и2ади3м2гли2адемеан2ме2егме2ел8ш8л-ме1зо-ш8л88ш8к-меч1ти2агр2м1з2-ш8к8ми1зв2миздми1знми2кр8ш8й-ми2оз-ш8й8ми2ор8ш8и-2м1к28ъ8м-2зымчм2леем2лел2зыме-ъ8н84м3намне1д-ш8и84мноем2нож4мной4мномм2нор4мноюм2нут4м3нымо1б2мо3влзъе2ммо1дрмо2жжмо1звмо1зр8ш8з--ш8з8мо3м28ъ8н--ъ8о8мо1ру8ш8ж-мо1сммо1сн-ш8ж83моти8ш8ё-з1урбзу2пр8ъ8о-м1раб3зуме2м1ро2зу1к-ъ8п82зу2г2зуве-ш8ё88ш8е-8ъ8п--ш8е88ш8д-му1стмут1рму3ть-ъ8р88ъ8р-з2ришз1ресм2чавм2чалм2читм2чишз2ренз2рач3м2щезра2смы2мрз2ракзо2ши-ъ8с88ъ8с-з2отоз1откз2отезо2твмя1стзо1сп-ш8д8наб2р8ш8г-наг2нна3ждна1з2на2илна2ин-ш8г84накк8ш8в-нап2л-ш8в88ш8б-на1с2на1тв-ш8б88ш8а-на1х2з1осн-ш8а8-ъ8т8наэ1рз1орг2н1б2з2опрз2оплн2г1внги2озо2панго1сзо2ос8ъ8т-н2дакн2д1внде3знде2с2зонрн3д2з2зомн8ч8я--ч8я8нд2ре8ч8ю-н2дрянд2сп1зом.зо3м2не1б2-ч8ю82невн8ч8э-зо1лжзо1лг-ч8э8нед2о8ч8ь--ч8ь8не3ду1зол2нее2д8ч8ы-не1зв-ч8ы8не1знне1зоне1зрз1окс8ч8ъ-не1кл-ч8ъ88ч8щ--ч8щ8не2олне3п28ч8ш--ч8ш8нес2к8ч8ч--ч8ч8нест28ч8ц--ч8ц88ч8х--ч8х88ч8ф-1зок.не2фрне1хрне3шк1зой.2н1з2нзо1сзо1з2ни3б2ни2ензо1дрни2клнила2-ч8ф88ч8у--ч8у88ч8т-ни1слнис3п-ч8т8зо2гл-ъ8у8зо2биз2обе2з3ны2з3ни2знаянкоб28ч8с--ч8с8з2наюз2натз2нан8ч8р-з2накз2найно1брно2влно1двно1дрно2ерно1звно2зд-ч8р8но1зрно3кн3номеном3шно2рвно1ру8ч8п--ч8п88ч8о-но2сч2нотдно3ф2з2наез2нав2н1ре2н1ри2зна.з2лющн2с3вз2лорнс2ке-ч8о8з2лопн3слан2с3мз2лоб8ч8н--ч8н8нст2рнсу2рн2с3фн2съ3з2лащн2т1в8ч8м-8ъ8у-нт2ра-ч8м88ч8л--ч8л88ч8к-нт2ре-ч8к88ч8й-нт2ру-ч8й8нт2ры8ч8и-зиу3мнут1р-ъ8ф8зи1оп8ъ8ф-зи2озз1инт3зий.зе2одзе2евзе2б1здож3з2дешз1д2вз2гнузг2наз2гли-ъ8х88ъ8х-2зволз1влаз3в2кз2вез2зваяз2ван-ъ8ц8з2вав-ч8и88ъ8ц-ня1ви2о1а2за3ш2зач2тза3тк2обио8ч8з--ч8з8о1блюзаст28ч8ж--ч8ж8обо2с2оботзар2ж8ч8ё--ч8ё88ч8е--ъ8ч8зар2взанс2о3вла-ч8е8ов3но8ч8д--ч8д8ов2се8ч8г-за3на3з2ан8ъ8ч-2о3ге-ч8г88ч8в--ч8в8о3гря2одан8ч8б-о3де.-ч8б88ч8а--ч8а88ц8я--ц8я88ц8ю--ц8ю88ц8э--ц8э88ц8ь--ц8ь88ц8ы--ц8ы88ц8ъ--ц8ъ88ц8щ--ц8щ88ц8ш--ц8ш88ц8ч-о2дынз1акто2дьбза3з2-ъ8ш8-ц8ч8зае2х8ц8ц-ое2жизае2дое1с2ое2сто2етоз1адро3жди-ц8ц88ц8х-2озав-ц8х88ц8ф-оз2ви-ц8ф88ц8у--ц8у8о1здрозе1ооз3ноз1аву8ц8т-2озоно2зоп-ц8т8оз1уго2зымо3зыс8ъ8ш-ои2г1оиг2н-ъ8щ8жоу1с8ъ8щ-ои3мо2ж1об2ж3мо2жирр2ж1з28ц8с-2жжев2ок2ло3клюоко1б-ц8с88ц8р-ок1скже3ск2окти2окумже1с2-ц8р8же3п28ц8п-же1о2же1кл-ц8п8-ъ8ъ8же3д23ж2дя4ж2длом2блж2деп8ц8о--ц8о88ц8н-ом1ри8ъ8ъ-ом2ше-ъ8ы8о3мьяж2дачж2дак-ц8н8оно1б3ж2гл2ж1б28ц8м-жат1вжа2броо3псоос3м-ц8м8о2отижа2бло3пако3пар8ц8л--ц8л8о2пли8ц8к-оп2ло-ц8к8о2пля8ц8й--ц8й88ц8и--ц8и8оп2ри8ц8з-оп2то8ъ8ы--ц8з88ц8ж-о1р2вех1ру-ц8ж88ц8ё-ех1ре-ц8ё8-ъ8ь88ц8е-ор2тро1руео1рук-ц8е8о1русех1об8ъ8ь--ъ8э88ъ8э-о3сад8ц8д-еха2т-ц8д88ц8г--ц8г88ц8в-о2скеос1ки-ц8в88ц8б--ц8б88ц8а--ц8а88х8я--х8я88х8ю-о1с2л-х8ю88х8э--х8э8ос3ми8х8ь--х8ь88х8ы--х8ы88х8ъ-ос2пяос2св-х8ъ8еф1реос2та8х8щ-о2суч-ъ8ю8-х8щ8о1с2ч8х8ш-8ъ8ю-еуб3рот3ваот1веот1виот1вле3тьяе3тью-х8ш8о3тер8х8ч-е1тье-х8ч8ет2ря8х8ц--х8ц88х8х--х8х88х8ф--х8ф88х8у--х8у8от1ри8х8т--х8т88х8с--х8с88х8р--х8р8от3смоту2а8х8п-ето1со3тьюо3тья2етече1твооус2коу3таоу3то2офашет1ви2офит2офон-х8п82офото2фриет1веох1лыо2хляох2ме2охор-ъ8я8е3стуе2стлоча1с8ъ8я-оч1лео3члие2спу8х8о-ош3ваош2ла-х8о8-ы8а8оэ1ти8ы8а-е1с4ме1слые1слу-ы8б8оя2ри8ы8б-пави3пав3лпа2вьпа2дрпа2енпа1зопас1л8х8н--х8н88х8м--х8м88х8л--х8л8па2ун-ы8в8па1хупа2шт2п1в28ы8в--ы8г8пе2дв8х8к-8ы8г-пе3запе3зо-х8к8пе2льпе4пл8х8й--х8й8пе2сн8х8и-пе2сцпе2счпе2трпе2шт-х8и88х8з--х8з83пинк3писяе2ске-ы8д84пла.пла1с8х8ж--х8ж82плен8х8ё--х8ё88х8е-п1лею2плив-х8е82пло.2плов2плог2плый2плымп1лынп1лых2плю.п1лютп2лясп2ляш8ы8д-ес2бап3но1е3с2апо1б2по3вл8х8д--х8д88х8г--х8г8пое2лпое2х8х8в--х8в88х8б-по1знпои2щ-ы8е83полк-х8б88х8а--х8а8п1оргпор2жпо1рупо1с43послпо3сспот2впот2рпо1х28ф8я--ф8я88ф8ю-поэ3мер3скппо1д8ы8е-3превпре1зпрей2пре1л-ф8ю83прет2еролпри3вприг28ф8э-при3кпри3л-ф8э8прип2п2риц8ф8ь--ф8ь88ф8ы--ф8ы88ф8ъ-3проипро3п-ф8ъ8-ы8ё88ы8ё-2п1с28ф8щ-п3син-ф8щ8-ы8ж8еро2бп2т3в8ф8ш-8ы8ж--ы8з8пуг3н-ф8ш8пу1стпу3тьере3п8ы8з--ы8и88ы8и--ы8й8е3ре.ер1ве8ы8й-пэ1рае4п3с-ы8к8е3плыра2бл1рабо8ф8ч--ф8ч8ра2гвра2глрад2ж8ф8ц-ра2дц-ф8ц88ф8х--ф8х8рак2в8ф8ф--ф8ф81ралг1рамк1рамн8ф8у--ф8у88ф8т--ф8т81раслрас3прас1т8ф8с--ф8с88ф8р-рат1в-ф8р82рахи1ращиеп1лу8ы8к-2раят-ы8л8рб2лар2блерб2лорб2люрбо3с8ф8п-р3вакр3вар-ф8п8р3вежр2вео1рвете3плар3винр2вит8ы8л-8ф8о--ы8м8епат2е1о2щр2г1ле1о2ч8ы8м-е1отлрда1ср2д1вео3схрди2а-ы8н8рдос2е1осне1осмре1вр-ф8о8рег2н8ф8н--ф8н8рее2врее2дрее2л8ф8м-1резк-ф8м88ф8л--ф8л8ре1зррез2у1рейш8ф8к-1рекш-ф8к83ремо8ф8й-1ренк1реньре1онре1оп-ф8й88ф8и-ре1ох-ф8и81репьре3р28ф8з-ре1сл-ф8з88ф8ж--ф8ж88ф8ё-ре1счре1тв-ф8ё88ф8е-ре1чтре3шлр3жа.р3жамр3жанр3ж2део1скр1з2в8ы8н--ы8о8ео4пури3бр-ф8е82риги8ф8д--ф8д82ридж8ф8г-рие2лрие3рриз2врик2р-ф8г88ф8в-ео2пр1ринсрио2зрио2сри1отри3р2ри1с2ри3сб2рисп-ф8в88ф8б-е1опери2флри3фрри1хле1онсео3но-ф8б8е2оние2онар2к1ле1он.2р1л2е1олье1олые1олкео3лие1олае1ол.рнас4рне3о8ф8а--ф8а8ео3кл8у8я--у8я8ро2вл8у8ю--у8ю8ро1дв8у8э-ро1дл-у8э88у8ь-ро1др1родьрое2лрое2мрое2х-у8ь88у8ы-ро1зр-у8ы88у8ъ--у8ъ81рокр8у8щ--у8щ88у8ш--у8ш88у8ч--у8ч88у8ц--у8ц8ро3пс8у8х--у8х8ро1руро1ск8у8ф--у8ф81рослро1см8у8у-рос2ф1росш1росю-у8у81ротк8у8т-е1о2жроуг2-у8т8ро2фрро1хлрош2лро3шн1роязео2дорп2лор2плю8ы8о-ео2деео3да-ы8п88ы8п-рств28у8с--ы8р8-у8с88у8р-р2т1врт3варт2вле1о2б-у8р88у8п-рт1ра-у8п8рт1рерт1риртус18у8о-р3тьюрт1ячен3ш21рубаруг3н-у8о88у8н-2рукс2е1нррус1крус3л-у8н88у8м-ру3ть1руха1рухо1ручн8ы8р-2емыс2емужемо1с-у8м8еми3к8у8л--у8л8-ы8с88ы8с--ы8т88ы8т-ек1скек2ро2е1крр3ш2м2е1коека2б-ы8у8еис1леи2г1ры2дв8ы8у-ры2кл-ы8ф88у8к-ры2х18ы8ф--ы8х8ез1усез1уп8ы8х--ы8ц8ез2ряез1ошез1от8ы8ц-ез1опе1зомря1ви-ы8ч8ез1обса2блса2дьса2квса2кл-у8к8с1апп8у8й--у8й8са1трса2ун8у8и-са1х2е3зит-у8и88у8з--у8з82с3буеззу3езд1р8ы8ч-8у8ж-езау3-ы8ш8е2ж1реж3ди8ы8ш--ы8щ8ее2стее1с2ее2ги8ы8щ-сег2нсе1з2се1квсек1л-у8ж8секс4семи18у8ё-се2сксе2ст-у8ё88у8е--у8е8-ы8ъ8е2дын8ы8ъ--ы8ы8си1омси1опси2пле2дусе2дуг2скам8у8д--у8д82скахск2вас2кви8у8г-8ы8ы-с2кля-у8г8-ы8ь8с1кон8у8в--у8в82скош8ы8ь-с1кра8у8б--ы8э82скуе-у8б81слав1сладс1лам8у8а-с3левс3леес1лейслео2с1летс3лею-у8а82слиц8т8я-с2лож-т8я88т8ю--т8ю88т8э--т8э88т8ь-е1друс1люс2с3ля8ы8э-1смесс4меяс3муре2дох-т8ь8с2нас2сная8т8ы--т8ы8-ы8ю88т8ъ-2сную2с3ны8ы8ю--т8ъ8-ы8я8сов2р8ы8я-со1з28т8щ-со3м2-т8щ8со1русо1ск8т8ш-со2сьсот2рсо1члсош2ле1джес2павс2пеес2пелс2пенс2пех-т8ш8с2пешс2пеюс2пим8т8ч-ед1во-т8ч82сполс2пос2ег2рег2ноег2нас2рабсра2сс1рат8т8ц--т8ц8е2гло8т8х-е2глисс3во4с5сис3с2ке2гле-ь8а8-о8а88т8ф-8ь8а-ев2хоев1ри-ь8б81ста.8ь8б-4ств.-т8ф82ствл8т8у-ст2вя-ь8в8-т8у81стей1стел8т8т--т8т88т8с-сте3хс3теш8ь8в-с2тиес2тии-т8с88т8р--т8р88т8п-с2тич-т8п8с2тию-ь8г8ст2ла8т8о-2стли-т8о88т8н-2стля2евол8ь8г-1сто.-т8н81стов1стог8т8м-1стод1стое-т8м81сток1стом1стон8т8л--т8л88т8к-1стос1стотс2тоц1стою-ь8д82стр.-т8к88т8й--т8й88т8и--т8и88т8з--т8з88т8ж--т8ж88т8ё--т8ё88т8е--т8е88т8д-8ь8д-с1тут1стую2евер-ь8е8еб1рыс2тыв8ь8е-2сть.2стьс3стью1стья1стям1стяхе1броеб1ри-т8д8суб1о-ь8ё8су3глсу2еве1брасу1крсума1супе2сус3лсус3псу1стсут1рсу2ф3еба2с1с2фееат1р1с2хе8ь8ё-8т8г-2с3циеа3доеади3дь3ярс2час-т8г8с3чив2счикс2чит-ь8ж82дыме8ь8ж-дъе2м2д3ш2съе3дсъе3л2д3цесы2г1дуэ1т8т8в-ду2чи-т8в8-ь8з88ь8з-ду1стд1услдус1кдуп1лду2да2д1уддуб3рдс3кн2д1с2д2ряхся3тьта2блтаб2р8т8б--ь8и8та2гнта1з2-т8б8д2рябта2пл8ь8и-та1стта1тр2дрыв2т1б2д1рую2т2ват1вейт1велт1ветд1румт1вое8т8а--т8а8т1вос2твою2т1вр1друж1другд1рубд1роюд1ротд1росте2гнд1ронте1зо3текатек1л3текш8с8я--с8я88с8ю-те1ох-с8ю88с8э--с8э83терзтер3к3теря8с8ь--с8ь88с8ы--с8ы8тест2те2ход1ролд1ройтиа2мти2блти3д28с8ъ--ь8й8тиис18ь8й--с8ъ8т1имп8с8щ-т1инд2тинж2тинф-с8щ88с8ш--с8ш8ти1хр2т1к28с8ч--с8ч88с8ц-д1роед1родтло2б-ь8к8д2рихтми2с-с8ц8д2рип2дрин8с8х--с8х82тобъто2влд2рий8с8ф-то1з2ток2р-с8ф82томс2тонг1торг1торж1торсто1ру1торш8с8у--с8у88с8т-2тотдто3тк8ь8к--ь8л8тпа1т-с8т88с8с-8ь8л--ь8м88ь8м--ь8н8трдо2т1реа-с8с88с8р--с8р88с8п--с8п8т1регт1редт1рее8с8о--с8о88с8н--с8н88с8м--с8м88с8л--с8л8т1рец8с8к-т1рею1трибт1рив-с8к8т1рилт1рим8с8й-три1от1риттри3фт1рищ8ь8н-д2рем-с8й88с8и-2трой-с8и8т1рор8с8з-тро3т-с8з82троюд2рел2дрез1трубт2руд2трукт2румт2рут-ь8о8д2ребд2раюд1рачт1ря.т1ряв8с8ж-т1ряет1ряжт1ряйт3рякт1рятт1рящт1ряя4т1с2д1рахт2с3дтсеп2т2с3мт2с3п8ь8о-д1рарту2гр-с8ж88с8ё-ту1слту1стту2фл1туша1тушо1тушь-ь8п88ь8п--ь8р88ь8р-д1рабдо2щу-ь8с88ь8с-ты2г1-с8ё8-ь8т83дохлдо3ть2дотъ8ь8т--ь8у82дотл2дотддос2п8ь8у--ь8ф88ь8ф--ь8х82тя2ч8ь8х-у2але-ь8ц8у3белубо1дубос2до3пл1убрауб3рю8с8е-у1ве.8ь8ц--ь8ч82доктдои2рдоз2н8ь8ч-до3днуг2науг2неуг1реуг1ряуда1сдо1д2-с8е8уд1ро-ь8ш8дов2л8ь8ш--ь8щ8до2бл8с8д-уес2л8ь8щ--ь8ъ8у1з2в4д3ныузо3пднос28ь8ъ--ь8ы88ь8ы-днеа2уко1бу1ку12д3м2д2лев-ь8ь8у1лыхди3фр8ь8ь-ди3пт-с8д8ди2пи-ь8э8дио1сди2ору2оза8ь8э-ди2обди2асуост1уо2т1ди2ар-ь8ю8уп1люу3про8ь8ю-диа2з8с8г-ди2адурке32д1з2у2род-с8г8урт2рд2ж3мд2жамде1хлде2сру2саддес2кус1каус1киуск3л8с8в-у1скр-с8в8-ь8я88с8б-ус3ли8ь8я-де3плдео3пде2оду1стеу1стя3демеде1клдеио2де2зуу3сья-э8а8у3терде2зиут2ля8э8а--с8б8ут1ри3девр-э8б8у1тьеу3тью8э8б-2д1д2-э8в8д1воз2двод8э8в--э8г8уф2ля8э8г-ух1адуха2т-э8д88с8а-2двизух3ля8э8д-у2чебдат1р-э8е8да2гр8э8е-да2б1уш1ла-э8ё82г3с2г1рятг1рялг1ряефа2б1фа2гнфа1зофан2д-с8а8фа1трг1рывгру2пг1рофг1ротг1ропг1ронг1рокфев1рфед1рфе1о38р8я-г2роз-р8я8фи2глг1ровфи2зо8р8ю-г1ричг1рисг1ринг1рилг1рик8э8ё-г1рецг1рек2фобъг1регфо2рв-р8ю88р8э-фо1руфос1кг1рар-р8э8ф1рабфра1зфра1сф1ратф2ренфре2сг1райф2рижф2ризг1раеф2ронго1члгоу3т2готд-э8ж8ф2тор8р8ь-фу3тлго1сн8э8ж-го2сд-э8з8гоми2гоиг2гоз2нха2блго2зл2х1акхан2д8э8з-х1аршго2влго1б22х3ве2х3виг2носг2ноиг2ное-э8и8г2нирг3несг3непхиат1г3нен-р8ь8хи1с2г2невх1лавх1ласх1латх1лац1хлебх2лесх1летх3ло.х2лоп8р8ы-г3не.1х2муг2нан3х2ныг2нав-р8ы82глякхо2пе8р8ъ-хо1рух1осм-р8ъ8г2ляжхох1л2г1лы2глуюх1раз1хран8р8щ-х1рей-р8щ8х2рисх1ров1хром8р8ш-2глою2глой2х1с22глое2глогх1у2г2глов8э8и-2гло.х1у2рху3ра-э8й8г2лин2гли.г2лет2х1ч22глая8э8й--э8к8г1лайг2лав2гла.ца2плгист2ги1слги2грги3брги2блге1орге2одге2обце1отцеп1лцес2лгено1-р8ш8ге2б12г3дици2к1цик3лци2олг3данци2ск8э8к-циф1р2ц1к21в2э11вьин-э8л8ц1о2б8р8ч-2ц1отвы3т2вы3знвы3г28э8л-ву1члвух3в2ц3ш2-э8м8ву1с2цып3л2ву1к1ву1зча2дрча2дц-р8ч88р8ц-ча2ер-р8ц88р8х--р8х88р8ф-3чато3чатывто3ш8э8м-3в2сю3в2спче1влче2гл-э8н8чер2с-р8ф8че1сл8э8н--э8о83все32в1с22в1ры8э8о-1ч2ла2в1роч3легч3лежв1ритч2ли.1ч2лов1рисв1рилв1рикв1рии-э8п81врид8э8п-2ч1та2вре.2врац-э8р8в1рас8э8р-в2рав2вра.-э8с8во1хлвот2р8э8с--э8т8во1снво1смша2блша2гн8р8у-ша2др-р8у88р8т-ша1ст-р8т8вос1к2ворьш3венше2гл2ворцше1о2ше3плше1с2ши2блши2плшиф1р2ш1к28р8с--р8с82шленш2ли.2шлив2шлилш2линш2лис8р8р-ш2лифш2ло.2шловш2логво1руво3м22шляе2шлякш2ляп2шлят2шляч2шляю8э8т-3ш2мы-р8р8во2жжво2ерш2нурво1дрво1двво3вк-э8у8во1б28э8у-шу2евшуст1-э8ф8в3ну.в2нес4в3нав2любв2лияв2лечв2летв2лекв2лев8э8ф--э8х82щ3в28р8п-ще2глщед1р8э8х-щеис11винч1винтви2глще3шк-р8п8ви2гвви3афвиа1т-э8ц8ви2арви2акви2азъе3до8э8ц-ъ2е2рвзо1бъе2хи1в2з2вет3р-э8ч88э8ч-2вердве2п11вей.вез2у3везл3везеыд2ре8р8о-ы2дряве3дуы3ж2дыз2вавед1рв2дохва1трыз2на-э8ш8ва1сты2к1вванс2-р8о8ыко1з8э8ш-вадь2-э8щ88р8н-ва2бр-р8н8бю1таыре2хбыст1быс1кыс1киыс1кубы2г1бук1л8э8щ-2б1с2-э8ъ81б2рюыт1ви8э8ъ-ы3тьюы3тья-э8ы8ы2ш1л8э8ы--э8ь8б1рол8э8ь--э8э88э8э-ье1зоб2рид8р8м-б2рехб2ремб1рекьми3дьми3кб1рейьне2о-э8ю8ь2п1л-р8м88э8ю--э8я8ь2стиь2стя8р8л-ьти3мб1рахь2тот-р8л8ьт2реьт2руьт2ры8э8я-ьхоз11брасб2ран-ю8а88ю8а--ю8б8б2равь3ягсб3раббоя2рбот2рбо2тв8ю8б--ю8в8бо1скэк2стэле1обо2сабо1рубону1бо3мшбо2мч8ю8в-эпи3к-ю8г88ю8г-8р8к--р8к8бо1з2-ю8д8бо2гдбо3вш8ю8д--ю8е8эс3те8р8й-б2люл-р8й8эт1раб2люеб2люд8ю8е-2б2ль-ю8ё8б2луд8ю8ё--ю8ж8б3лен8ю8ж-8р8и-б2лан-ю8з88ю8з-1благюзи2кби2твби2ор-р8и8би2оню2к1вби2одби2об-ю8и88ю8и--ю8й88ю8й-бес3п-ю8к8без1р8ю8к-юре4мбез3н8р8з-бе3зи-ю8л88ю8л-ю2с1кю1стаю1стею1стою1стя3бе2з-ю8м8бе2гнбе2глба1трюха1сба1стбас3мбалю1ба3зуяб1раяб3реяб1рияб3рю-р8з8ба2др8ю8м-я1в2хя2г1лба2бваю1тааэ2лиахми2яз2гна2ф1лау3чьаут1ря2к1вя2к1ла2улеау3доа3тья8р8ж-а3тьюа1тьеат1ри-ю8н8ато2ш8ю8н--ю8о82атезат1вуат1вияст3вя1стояст1рат3ва1атака1сьияти1з8ю8о--ю8п88ю8п-я3тьюя3тья-ю8р88ю8р--ю8с88ю8с--ю8т88ю8т--ю8у8ас3но-р8ж88р8ё--р8ё88р8е--р8е88р8д--р8д88р8г--р8г88р8в--р8в88р8б--р8б88р8а--р8а88п8я-а2ньш-п8я88п8ю--п8ю88п8э--п8э8гст4р8п8ь--п8ь88п8ы--п8ы8е2мьд8п8ъ--п8ъ88п8щ--п8щ88п8ш-заи2лзао2з-п8ш8заю2лз2рятзу2мьас3ми8п8ч--п8ч82ас1к8п8ц--п8ц88п8х--п8х88п8ф--п8ф88п8у--п8у88п8т--п8т88п8с--п8с88п8р--п8р88п8п--п8п88п8о--п8о88п8н--п8н88п8м--п8м88п8л--п8л88п8к-пое2ж-п8к88п8й--п8й88п8и--п8и88п8з--п8з88п8ж--п8ж88п8ё--п8ё88п8е-2стьт-п8е88п8д-8ю8у--п8д86хуя.ы2рьмыя2вяьбат2-ю8ф8а2двёар2жа8п8г-8ю8ф-2алёк2амёт-п8г8-ю8х88п8в-а1тьё1аргу-п8в8б3лён8п8б-б2люёб1рёкб2рёмб2рёх8ю8х-3везёвёд1р-ю8ц82вёрд8ю8ц-в2лёкв2лёт-ю8ч8в2нёс-п8б83всё3ап2ра8ю8ч-г2лётг2нёвг3нёнг2ноё-ю8ш88ю8ш-8п8а--п8а88о8я-а3плад2рёб-о8я8д2рём8о8ю--о8ю88о8э-дъё2маост1-о8э8-ю8щ82евёр8о8ь-е2глё8ю8щ-анс1уан2сп-ю8ъ88ю8ъ-ер1вё-ю8ы8-о8ь88о8ы--о8ы8ет1вёе1тьёа2нафё1браёб1ры8ю8ы--ю8ь88о8ъ-амои2ё1дру-о8ъ88ю8ь--ю8э88о8щ-ё1зом8ю8э-2амет2ё1ко2ё1крёк2роа2льщ-ю8ю8алу2шало1з2алек2ёмужа3лаг2акри-о8щ8ако3тёпат28ю8ю--ю8я8ё3плаёп1луё3плы8ю8я-аи3глаи2г1-я8а88я8а-ё3ре.-я8б88я8б-ёр3ск-я8в8аз1обё3с2ааз1др8о8ш-ё2ске-о8ш8аз1вл8я8в--я8г88о8ч-ё3стуае2ре2ётечае2диае2гоёто1са2дынаду3ч8я8г-ад1ро-я8д8ёха2т-о8ч88о8ц--о8ц88о8х-ёх1ру8я8д-жё1с2ад2жи-о8х8а2двез2вёз-я8е8з2наё8я8е-8о8ф-з2отё-о8ф8аг2лизъё2м2зымё2и1вё8о8у-а2глеих1рё-я8ё88я8ё-к3лёнк2роё-я8ж8-о8у8лё3до8о8т-лёк1лав2селё2ск-о8т8ав1ра2лоёна2вотаво1с1льщё8о8с-3м2щёнд2рёави2аав3зонё1б23номёаб1ри-о8с8аб2люоё2жиа3бла8я8ж-8о8р--о8р88о8п--я8з8о2скёот1вё-о8п8о3тёр8о8о--о8о88я8з-.ут2р8о8н-пё2тр2плён-о8н88о8м-п1лёюпоё2ж3прёт-о8м8р2блё1рвёт8о8л-1рёзк-о8л88о8к-рёз2у1рёкш3рёмо1рёнк-о8к88о8й--о8й8роё2м.ур2в.ум2ч8о8и--я8и8сёкс4сё2ст-о8и82скуёс1лёт.ти2о1стёл8о8з--о8з88о8ж-стё3хс3тёш-о8ж88о8ё-8я8и-т1вёлт1воё.ти2гтё2гнтё1зо3тёкатёк1л3тёкш-о8ё8тёр3к8о8е--о8е88о8д--о8д8тё2хо8о8г--о8г88о8в--о8в88о8б-.тиа3уг2нёуг1рё-я8й8.су2ж8я8й-.ро2ху1стёу3тёру1тьёу2чёб-я8к82х3вё1хлёбх2лёс8я8к-.ри2ччёр2с-о8б88о8а--я8л88я8л-2шлён-я8м8ъ2ё2рыд2рёырё2х8я8м--я8н8ьё1зо8я8н--я8о8яб3рё8я8о--я8п88я8п--я8р8.от1в8я8р-.ос2п-я8с8.ог3н.ово18я8с--я8т88я8т-.не3т-я8у88я8у--я8ф88я8ф--я8х88я8х-.на3т.на1в-я8ц88я8ц--я8ч88я8ч--я8ш88я8ш--я8щ8.ле2о8я8щ-.ик1р.из3н.изг2.иг1р.за3п-я8ъ88я8ъ-.епи3-я8ы8.до3п.ди1о8я8ы--я8ь8.дек2.го2ф8я8ь--я8э8.би2о8я8э--я8ю88я8ю--я8я8.ак1р.аб1р.ади28я8я--а8а88а8а--а8б88а8б--а8в88а8в--а8г88а8г--а8д88а8д--а8е88а8е--а8ё88а8ё--а8ж88а8ж--а8з88а8з--а8и88а8и--а8й88а8й--а8к88а8к--а8л88а8л--а8м88а8м--а8н88а8н--а8о88а8о--а8п88а8п--а8р88а8р--а8с88а8с--а8т88а8т--а8у88а8у--а8ф88а8ф--а8х88а8х--а8ц88а8ц--а8ч88а8ч--а8ш88а8ш--а8щ88а8щ--а8ъ88а8ъ--а8ы88а8ы--а8ь88а8ь--а8э88а8э--а8ю88а8ю--а8я88а8я--б8а88б8а--б8б88б8б--б8в88б8в--б8г88б8г--б8д88б8д--б8е88б8е--б8ё88б8ё--б8ж88б8ж--б8з88б8з--б8и88б8и--б8й88б8й--б8к88б8к--б8л88б8л--б8м88б8м--б8н88б8н--б8о88б8о--б8п88б8п--б8р88б8р--б8с88б8с--б8т88б8т--б8у88б8у--б8ф88б8ф--б8х88б8х--б8ц88б8ц--б8ч88б8ч--б8ш88б8ш--б8щ88б8щ--б8ъ88б8ъ--б8ы88б8ы--б8ь88б8ь--б8э88б8э--б8ю88б8ю--б8я88б8я--в8а88в8а--в8б88в8б--в8в88в8в--в8г88в8г--в8д88в8д--в8е88в8е--в8ё88в8ё--в8ж88в8ж--в8з88в8з--в8и88в8и--в8й88в8й--в8к88в8к--в8л88в8л--в8м88в8м--в8н88в8н--в8о88в8о--в8п88в8п--в8р88в8р--в8с88в8с--в8т88в8т--в8у88в8у--в8ф88в8ф--в8х88в8х--в8ц88в8ц--в8ч88в8ч--в8ш88в8ш--в8щ88в8щ--в8ъ88в8ъ--в8ы88в8ы--в8ь88в8ь--в8э88в8э--в8ю88в8ю--в8я88в8я--г8а88г8а--г8б88г8б--г8в88г8в--г8г88г8г--г8д88г8д--г8е88г8е--г8ё88г8ё--г8ж88г8ж--г8з88г8з--г8и88г8и--г8й88г8й--г8к88г8к--г8л88г8л--г8м88г8м--г8н88г8н--г8о88г8о--г8п88г8п--г8р88г8р--г8с88г8с--г8т88г8т--г8у88г8у--г8ф88г8ф--г8х88г8х--г8ц88г8ц--г8ч88г8ч--г8ш88г8ш--г8щ88г8щ--г8ъ88г8ъ--г8ы88г8ы--г8ь88г8ь--г8э88г8э-ию3та8г8ю--г8я88г8я--д8а88д8а--д8б88д8б--д8в88д8в--д8г88д8г--д8д88д8д--д8е88д8е--д8ё88д8ё--д8ж88д8ж--д8з88д8з--д8и88д8и--д8й88д8й--д8к88д8к--д8л88д8л--д8м88д8м--д8н88д8н--д8о88д8о--д8п88д8п--д8р88д8р--д8с88д8с--д8т88д8т--д8у88д8у--д8ф88д8ф--д8х88д8х--д8ц88д8ц--д8ч88д8ч--д8ш88д8ш--д8щ88д8щ--д8ъ88д8ъ--д8ы88д8ы--д8ь88д8ь--д8э88д8э--д8ю88д8ю--д8я88д8я--е8а88е8а--е8б88е8б--е8в88е8в--е8г88е8г--е8д88е8д--е8е88е8е--е8ё88е8ё--е8ж88е8ж--е8з88е8з--е8и88е8и--е8й88е8й--е8к88е8к--е8л88е8л--е8м88е8м--е8н88е8н--е8о88е8о--е8п88е8п--е8р88е8р--е8с88е8с--е8т88е8т--е8у88е8у--е8ф88е8ф--е8х88е8х--е8ц88е8ц--е8ч88е8ч--е8ш88е8ш--е8щ88е8щ--е8ъ88е8ъ--е8ы88е8ы--е8ь88е8ь--е8э88е8э--е8ю88е8ю--е8я88е8я--ё8а88ё8а--ё8б88ё8б--ё8в88ё8в--ё8г88ё8г--ё8д88ё8д--ё8е88ё8е--ё8ё88ё8ё--ё8ж88ё8ж--ё8з88ё8з--ё8и88ё8и--ё8й88ё8й--ё8к88ё8к--ё8л88ё8л--ё8м88ё8м--ё8н88ё8н--ё8о88ё8о--ё8п88ё8п--ё8р88ё8р--ё8с88ё8с--ё8т88ё8т--ё8у88ё8у--ё8ф88ё8ф--ё8х88ё8х--ё8ц88ё8ц--ё8ч88ё8ч--ё8ш88ё8ш--ё8щ88ё8щ--ё8ъ88ё8ъ--ё8ы88ё8ы--ё8ь88ё8ь--ё8э88ё8э--ё8ю88ё8ю--ё8я88ё8я--ж8а88ж8а--ж8б88ж8б--ж8в88ж8в--ж8г88ж8г--ж8д88ж8д--ж8е88ж8е--ж8ё88ж8ё--ж8ж88ж8ж--ж8з88ж8з--ж8и88ж8и--ж8й88ж8й--ж8к88ж8к--ж8л88ж8л--ж8м88ж8м--ж8н88ж8н--ж8о88ж8о--ж8п88ж8п--ж8р88ж8р--ж8с88ж8с--ж8т88ж8т--ж8у88ж8у--ж8ф88ж8ф--ж8х88ж8х--ж8ц88ж8ц--ж8ч88ж8ч--ж8ш88ж8ш--ж8щ88ж8щ--ж8ъ88ж8ъ--ж8ы88ж8ы--ж8ь88ж8ь--ж8э88ж8э--ж8ю88ж8ю--ж8я88ж8я--з8а88з8а--з8б88з8б--з8в88з8в--з8г88з8г--з8д88з8д--з8е88з8е--з8ё88з8ё--з8ж88з8ж--з8з88з8з--з8и88з8и--з8й88з8й--з8к88з8к--з8л88з8л--з8м88з8м--з8н88з8н--з8о88з8о--з8п88з8п--з8р88з8р--з8с88з8с--з8т88з8т--з8у88з8у--з8ф88з8ф--з8х88з8х--з8ц88з8ц--з8ч88з8ч--з8ш88з8ш--з8щ88з8щ--з8ъ88з8ъ--з8ы88з8ы--з8ь88з8ь--з8э88з8э--з8ю88з8ю--з8я88з8я--и8а88и8а--и8б88и8б--и8в88и8в--и8г88и8г--и8д88и8д--и8е88и8е--и8ё88и8ё--и8ж88и8ж--и8з88и8з--и8и88и8и--и8й88и8й--и8к88и8к--и8л88и8л--и8м88и8м--и8н88и8н--и8о88и8о--и8п88и8п--и8р88и8р--и8с88и8с--и8т88и8т--и8у88и8у--и8ф88и8ф--и8х88и8х--и8ц88и8ц--и8ч88и8ч--и8ш88и8ш--и8щ88и8щ--и8ъ88и8ъ--и8ы88и8ы--и8ь88и8ь--и8э88и8э--и8ю88и8ю--и8я88и8я--й8а88й8а--й8б88й8б--й8в88й8в--й8г88й8г--й8д88й8д--й8е88й8е--й8ё88й8ё--й8ж88й8ж--й8з88й8з--й8и88й8и--й8й88й8й--й8к88й8к--й8л88й8л--й8м88й8м--й8н88й8н--й8о88й8о--й8п88й8п--й8р88й8р--й8с88й8с--й8т88й8т--й8у88й8у--й8ф88й8ф--й8х88й8х--й8ц88й8ц--й8ч88й8ч--й8ш88й8ш--й8щ88й8щ--й8ъ88й8ъ--й8ы88й8ы--й8ь88й8ь--й8э88й8э--й8ю88й8ю--й8я88й8я--к8а88к8а--к8б88к8б--к8в88к8в--к8г88к8г--к8д88к8д--к8е88к8е--к8ё88к8ё--к8ж88к8ж--к8з88к8з--к8и88к8и--к8й88к8й--к8к88к8к--к8л88к8л--к8м88к8м--к8н88к8н--к8о88к8о--к8п88к8п--к8р88к8р--к8с88к8с--к8т88к8т--к8у88к8у--к8ф88к8ф--к8х88к8х--к8ц88к8ц--к8ч88к8ч--к8ш88к8ш--к8щ88к8щ--к8ъ88к8ъ--к8ы88к8ы--к8ь88к8ь--к8э88к8э--к8ю88к8ю--к8я88к8я--л8а88л8а--л8б88л8б--л8в88л8в--л8г88л8г--л8д88л8д--л8е88л8е--л8ё88л8ё--л8ж88л8ж--л8з88л8з--л8и88л8и--л8й88л8й--л8к88л8к--л8л88л8л--л8м88л8м--л8н88л8н--л8о88л8о--л8п88л8п--л8р88л8р--л8с88л8с--л8т88л8т--л8у88л8у--л8ф88л8ф--л8х88л8х--л8ц88л8ц--л8ч88л8ч--л8ш88л8ш--л8щ88л8щ--л8ъ88л8ъ--л8ы88л8ы--л8ь88л8ь--л8э88л8э--л8ю88л8ю--л8я88л8я--м8а88м8а--м8б88м8б--м8в88м8в--м8г88м8г--м8д88м8д--м8е88м8е--м8ё88м8ё--м8ж88м8ж--м8з88м8з--м8и88м8и--м8й88м8й--м8к88м8к--м8л88м8л--м8м88м8м--м8н88м8н--м8о88м8о--м8п88м8п--м8р88м8р--м8с88м8с--м8т88м8т--м8у88м8у--м8ф88м8ф--м8х88м8х--м8ц88м8ц--м8ч88м8ч--м8ш88м8ш--м8щ88м8щ--м8ъ88м8ъ--м8ы88м8ы--м8ь88м8ь--м8э88м8э--м8ю88м8ю--м8я88м8я--н8а88н8а--н8б88н8б--н8в88н8в--н8г88н8г--н8д88н8д--н8е88н8е--н8ё88н8ё--н8ж88н8ж--н8з88н8з--н8и88н8и--н8й88н8й--н8к88н8к--н8л88н8л--н8м88н8м--н8н88н8н--н8о88н8о--н8п88н8п--н8р88н8р--н8с88н8с--н8т88н8т--н8у88н8у--н8ф88н8ф--н8х88н8х--н8ц88н8ц--н8ч88н8ч--н8ш88н8ш--н8щ88н8щ--н8ъ88н8ъ--н8ы88н8ы--н8ь88н8ь--н8э88н8э--н8ю88н8ю--н8я88н8я--т8х8',
		6 : '.аг1рочёрст1.аль3ят2рёшь.ас1тот1ревё3т2кёттё2ску.аст1р.де1квтё2скатё4п1л.ди2акс3т2лёс3тётес3тёт.1стён.сёст1рсе3стёрод2лёрё3сторё3ста1рё1зорё1зна.рё2бр.до3т2плёс1кп2лёнк.зав2рот1рёшот1рёк2о3тёк.ио4на.лес1к.люст1од3рёб3м2нёшлё4ска.ми1омла1стёиг1рёнзот2рё.мо2к1за3мнёёх1опоёх3лопёх3валёх1атоёс2тан.на3ш2.не3внён2д1рёз1о2г2ё3душ2ё1вреес2чётерё1к2ерё3до2е1врёеб1рён2д3рён1дрёмы1дрёма2д3рёждо2прё2доплё.не1др2в1рён.не1з2бё2д1рас3тёмам2нётаз3вёз.не1сл2сься.сы2мит2стче..нос1к.нук1л.ос2ка.ос3пи.от1рореж4ди.от1рупти4дн.от1уж.по3в2.по3ж2.поз2н.прос2.ре2броти4дн.ри2ско2плюс.септ2.те2о3.тиг1р.уз2наабе3ста3в2чеага1с2а2гитиа2глосни4сь.аг2лотади2ода2д1руаза4ш3аз3веза2зовьа2зольлу3с4нла2б1ра1зориаз2о1сак3лем4ж3дич4ж3дикако1б22аконсалуш1та2минтам2нетдос2няамо1з2выб2ревиз2гнана2дцбезу2сан2драан2сура2н1уз.реа2нап2ломапо4всап1релара2стар2бокар2валаре1дваре1олар2торар2т1р1ассиг.вст2раст1вуям2б3л3явиксюри2скю2идалю2б1реэтил1аэс2т1рэро1с2эри4трь2трабас3темь3п2тоье2с1кыра2с3ынос3лы2к3лоы2д1рощи2п1лще1б2л4ш3мы.ш2лите2ш1лей3ш2колша1трошар3т2шан2крша2г1рчерст1ча1стяча1стуча1стечаст1вча2евыча2ево2ц1о2д2цетатхро2мчхри2плас2тин2х1оснхо2пор2х1о2к1х2лор2х1изы2ф1у2пфото3пфор3тр2ф1оргфи2нинфиа2к1фе2с1кфанд1ру3х4воас2тияас1тооус1ку.ус1комуро2длас1тухун2д1руе2с1куд1рам1у2бытты2с1ка1стьету2жин2т1ряд4т3роцт1росотро3плт1роидт1рогл4тринсас2шедт2решьас2шест1ретут1ресттрес1к3тре2стреп1лт1резнт1резат1ревшт1ревет1ребь1требу1требо2т1ражт1рагато1с2цто1с2пто1с2н2т1оммто3д2рто1б2лто2бестмист13т2кет3т2кан3т2кавти3ф2рти3ствти1с2л2т1инвтила2мти1знате2скуат1обеа2томнте2скатере2оте2ракте4п1лте2о3дтем2б1теле1о2т1войт1во1зтак3лета1врисыс1касы2п1лат1рахс2ценасуб1а2ст1рушст2рубст1рохст1родба2г1рст1роа2стрищ2стрилст1риз2стривст1рей2стред4страястрас22сторс2сторж2сторг3с2тоибе2д1рс2то1бст2литст2лилс3т2лес2тишк2стинъ2стинф2стинд2стимпс3тетес3тет.1стен.1с4те.ст2волст1верс2сорис3с2нессанд2сре3досре2б1спо1з22спися1с2пецсо1с2псо2риесо1л2гсо1б2рсно1з22с3ник1с2неж1с2наб2с3лым2с3лый2с3лые2с3лую2с3лосс3лому2с3ло.2с3ли.2с3лая2с3ла.2скрибс2копс2сконаск3ляв3скино1с2кафс2кандсест1рсе3стесе3стасере2бсе2к1р2с3венсбе3с2сбезо3без1а2са2ф1р2с1атл2с1аркбез5д4ры2с1кр2х1опр1х2лор2х1инруст1рру1ста1ружейру2дарбез1о2рт2ранрт1оргр2т1оббе2с1кр2таккр3ствлбе2с1трот2ри1рот2вро1с2про2скуро2скиро1р2ж2р1оргро2плюрооп1р1ронос1ронап1ронаж1ромор1ролиц1ролис1роконрои2с33розысро1з2в1розарбес3терод2леро3д2з1рогру1роголро1б2рро2блюрно3слрне1с2риэти2ри3т2рри3стври3м2чри3м2нри1д2рри3г2нри2глори3в2нреуч3тре1т2рре3сторе3стабес3тире1с2прес1кире1о2цре1о2фре1о2р1б2лазре3мноре1к2л1ре1зоре1знаре1з2лре3ж2дре2досб3лазирег2ля1б2леер3вата1р2вавра1т2рра2так1б2лея1растарас3к2ра2п1лран2сцра2нохра2к3л1ракизра2зубра2зийра2жур1б2луж1равняди3фтопус1ку3п2тих3п2сих3п2салпрофо2п1розопро1з2про3ж2прод2лпро1блприль2при3д2пре1огпо2шляпо2шлыпо2шло3по3п2по3мнупо3мнопо1з2лпо1здопо1зве2б3лю.бо1брапод1вопо3в2с3п2ликплес1кп1ле2оп2ленкп1лемсп1лем.пи2к1рпи2ж3мпиаст1бо1драпе2с1кпери1обо1л2жбо1льспа1тробо3м2лпас1тупас1топа1степас1табо3скоо2ч1тоо2фориот1у2чот1ругот1рочот1росот1рокот1роеот1родот1решот1речот1рекот1режотра2сот1разот1радот1рабо3ткал2о3тех2о3текбо3стиос2цено3страос2с3мо1с2пуос2пасос2нялбра1зоос3мосос3лыхос3логос3лейос1кую1б2ралос1кою2б1рамос1комос1койо2сково2ски.оск1воос3карб2ратьо2с3баоса3ж2ор1укс1б2рачор1испоре2ск2о3регор2б3лора2с3о3п2те2б3раяопоз2нопо4всо3плясоп3лю.оп2лит1б2редо2пле.оост1рон2труоне3ф2о3множб2ритоб2ритыолу3д21олимпол2ганб1ром.2о3кол2о3канозо1руо2з1обоз2дороз2глоо1з2вяоз2вено1з2ва3бруксо3ж2дуо3ежеко2е1вло2дымуо2дыма2б3рю.од1рово1дробод3ребо1дралод1ракод1разод1ражо1драгбу2г1ро2досива2д1родо3прва3ж2дод2лит2о3дим2оди3ава2строд1воеог3ло.ог3ли.ог3ла.ов3скоо2в1риве2с1ко3в2лоо1брано1браво2бра.обо3м2взъе3доб2лемоб2лев2н3ю2рн2т1рянтр1удн2трокн2тривнтрас2н2трарнтр1аж3в2кус2в3лабн3с2пен2с1окн2сконно1с2пно2слино1склно3з2онно3п2н2к1ронко3п2нист2р3в2нук2нинсп3в2нучвои2с1не1т2рне3т2лне1т2вне1с2чне1с2хне1с2пне3с2нвос3пене1р2жне2ода3не1о2не3м2нне1к2вне1з2лне3ж2дне1дроне2дране1д2лне3вняне1в2днд2рианд1ражнд1рагна3ш2лн1а2фрна1т2рво2стрна1рвана3м2нво3х2тна1в2рнаби1ому1с4лму1с2к3м2стим2с1ормо2т1рмо1с2пмос1камо2к3вмоис1т3м2нешми1с2лми1опимик1рими2гре2в1рамме2с1к2в1рахма2т1рма2тобма1с4т2в1рен2м1аллма2к1р1льстя1льсти1в2ризлу1д4рло1с2п2л1орг3лопаслок3лавро3т2лого1сло2г3д3ловод2ловияло1б2рли2х3в2л1испли2гроле1т2рле1спеле1с2лле4скале1о2сле1онтв3скаяле2г1ллев1ра1л2галла1т2рла1стяла1сту4в3скила1стола1стеласт1вла1ста4в3ску1лами.ла3ж2двто1б2ку2п1р3к2то.к1станк1стамксанд2кри2о3кре2слву2х1ако2р3в2комин1кольс3в2шив3к2няж3к2ниж2к3лю.2к3лос2к3ло.2к3лис2к3лив2к3ли.к3лем.2к3ле.вы3ш2л2к3ла.га1ст2ке2ст1ке2с1кка2ш1тка1т2ркар3трка2прека2п1лка2д1рка3днека2брий2с3муихлор1их2ло2и2х1аси2т1учит3ромит2реси2т1веис1тязи2ст1ви2с3присо2ски2сламис3ку.ис3ковис3кахис3камис3ка.г1ламииро1з2ири2ски2р1ауира2стипо3к2ипа1трио2т1вио1с2пио3скли3онов1инсти2глась3г2лиф2именьи2менуи2меног3лоблило1скгнит2рик2с1тика1с2из2нализ2гнеи2еводиди1отиди1оми2г1ряиг1рениат1роиа1стоиа1стаиа1с2киа2налиа2зов2зы2с12зы2г1зу2часз1у2тез1у2мо2з1уз3зу2б3рго3ж2дзро2с3зот2ризот2рего2с1азо2о3пзо3в2мзко3п2зи3т2рзи2оно2з1вую1з2вонз3валь2з3ва.за3р2дза3мнеза3ж2дза2вруго1склго1спаже1к2в4ждеме3ж2делех1у2чех1опоех3лопех3валех1атоефи3б2еук2лоес2четес2танес3полес2пекес2ломес2ловес2линес1ласгу2с1ке2сковес1калда2гендаст1реро3ф22ерокр2еровиер1облерио3зере1х42д1видере1к2ере1дрере3доер1актеп1лющ2двинтеп1лешепис2кепа1треот2руеост1р2двинче2о3роеоде3зео2грое2о3глеоб2роен2д1реми3д2еле1сцеле3скек1стееис1трез1учаез1у2хезу2сыезу2соез1у2кез1у2дез1о2рез1о2ге1з2ваеза2вре4ждевеест1рее2в1ре2евид2е3душед1усте2дувеед1убое2ду2бе2дру.е2д1още2дотвед1опредноу32д1висе2гланега1с2ев1реяев1рейев1рее2е1вреевра1сев2нятев2ниме3в2мее2б3рюеб1ровеб1рен2д1вит2ды2с1ды2г1р2дут1рду2ста1д2ряг1д2рыг2д3роз1д2рож1дворьд2рессдре2ск2д3рен1дремыдрем3н1дремл1дрема2д3режде1б2лд1ранеде1б2р2дразв1дравшдо2шлыдо3ш2кдо2ш3вдез1о2дот2ридерас2де2с3вди2алидо2рубдо2пре2допледо2м1р2долимдо3ж2ддо3в2мди2алодио3деди1оти3д2няшдно3д24д3но13дневнра2б1р',
		7 : 'ди2с1тр.чё2с1к2д1обладо1б2рад1о2сенд1о2син2д1осно2д1отряде2з1а21д2разнд1ра2с3дро2г3неан2д1ре1д2лине1о2свие3п2лодере3м2не2р1у2пе2с1ка.е4с1ку.гри4в3н2ж1о2т1за2в1ри1з2о3ре2з1у2беи2л1а2ци2л1у2пино2к3лино3п2лисан2д1ки1с2ни2к3ласько1б2рикохо2р3ла2д1аглан2д1рла2ст1рле1з2о33т2рё2хлу3п2ломан2д1рме2ж1атме2ст1рна2и1с2на1р2вине2р1отни2л1алво2б3лани2л1ам2н1инстнти1о2ктё2с1кови1с2ниви2а1с2обо1л2гве2ст1во3в2нуш1о2деял.во2б3л.во3ж2до2д1отчо2д1у2чоза2б3вбро2с1к1б2росиоко3п2л1б2родио3м2немо3м2нето2п1лейопо2ш3лоро2с3ло2с1ка.о1с2копо2с1ку..ра2с3то1с2шивошпа2к3па2с1тыпе2д1инпе2к1лапе2ст1ртё2с1ки2б3люсьподо3м2радо1б2рас3т2лб2лес1крво1з2дсчё2с1кремо2г3били3т2рес2с3мро2д1отро2ф1акр2т1актпё2ст1р2с1альп2сбе3з2сто2г3нс4т1ровсче2с1кте2с1ките2с1ко3т2ре2хтри2г1л2т1у2пруре2т3русла4ж3уто3п2сх1ра1с2ь2т1амп.бо2дра.за3м2но2п1лёй.об2люю.об2рее.об2рей.об2рею.об2рив.об2рил.об2ритапо3ч2т.ле2п3р.пом2нуо3м2нёт.со2плаан1о2хра2н1о2батро2ско3м2нёмбино2склё1з2о3дро2ж3ж2дружей1з2о3рё.му2шт1ё4с1ку.ё2с1ка.б2лёс1килло3к2ме2динс.не1с2цаз2о1бр.обо3ж2мис4с3ннар2вата2д1облне2о3ре2сбрук1роб2леюн2трассредо4пло4ж3девпрем2но.че2с1к.хо2р3войс4ково2м3че.по2стинон2трат.ро2с3л.ро2з3восо4м3н.ре2з3впо2додео1с2ним',
		8 : 'пере1с2нтро2етёсони3л2амо1и2с1тр.ар2т1о2ло2к1а2ун2тр1а2го2д1о2пени1с2коло2д1о2пысо2стритсо3т2калпо2д1о2ктро2етесре2д1о2п.доб2рёл2з1а2хавере3с2сое2о3позир2т1у2чиди1с2лов.ме2ж1у2а2н1а2ме.ро2с3пи.па2н1ис.до1б2ри.доб2рел2д1о2бед',
		9 : 'причё2с1ки2л1а2минме2д1о2сммети2л1аме2о3платопо2д1у2роо2д1о2болприче2с1крни3л2а3м',
		10 : 'но4л1а2мин'
	}
};
var h = new window['Hypher'](module.exports);

if (typeof module.exports.id === 'string') {
    module.exports.id = [module.exports.id];
}

for (var i = 0; i < module.exports.id.length; i += 1) {
  window['Hypher']['languages'][module.exports.id[i]] = h;
}
}());
