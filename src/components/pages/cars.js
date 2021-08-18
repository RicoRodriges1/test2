import React, { Component } from 'react';
import { Container, Tab, Nav, Row, Col} from 'react-bootstrap';

class Cars extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="1" defaultActiveKey="first" >
                    <Row>
                        <Col sm={3}>
                             <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Gr.N</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Gr.A</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">WRC</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Kit Car</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">N4, A8</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="sixth">N3, A7</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="seventh">N2, A6</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="eigth">N1, A5</Nav.Link>
                                </Nav.Item>
                            </Nav> 
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <img src="https://i.pinimg.com/originals/e2/58/a4/e258a4a33428487df21d963f0961fb81.jpg"/>
                                    <p>Группа N. Это серийный автомобиль, который должен быть выпущен в количестве не менее 2500 шт. При подготовке его к соревнованиям разрешено дорабатывать кузов, систему выпуска, настроить подвеску, сменить амортизаторы. Производится также перепрограммирование бортового компьютера, управляющего двигателем. Запрещено изменять тормозную систему (можно только заменить тормозные колодки), конструкцию двигателя, схему и геометрию подвески. Конструкция коробки передач и ее передаточные числа должны оставаться без изменений. Несколько особняком стоит класс N4. Как правило, такие автомобили происходят из так называемой "омологационной серии", благодаря которой производитель получает право перейти в высшую группу А. В свое время это привело к появлению таких уникальных серийных автомобилей, как Lancia Delta HF Integrale, Ford Escort RS Cosworth, Toyota Celica GT-Four, Mitsubishi Lancer Evo, которые, как и их чисто раллийные собратья, оснащены двигателем с турбонаддувом и приводом на все колеса.</p>
                                    <img src="https://www.doublegmotorsport.com/wp-content/uploads/2019/01/gse_escort_01.jpg"/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img src="https://i.ytimg.com/vi/2jiBF2mGxdw/maxresdefault.jpg"/>
                                    <p>Группа А. Разрешены гораздо более радикальные конструктивные изменения – спортивная подвеска, отличающаяся от серийной, специальная гоночная коробка передач. Может быть несколько изменена конструкция двигателя: иное соотношение диаметра цилиндров и хода поршня, увеличение количества оборотов, применение высокотехнологических материалов (композиты и специальные сплавы) и т.д. Однако непременно должно соблюдаться одно условие: автомобиль группы А по своей конструкции должен в общих чертах совпадать с базовой серийной машиной. Т.е., чтобы получить право омологировать автомобиль в классе А8 (до 3500 куб.см или 2000 куб.см с турбонаддувом и полный привод), базовый серийный автомобиль тоже должен иметь полноприводную трансмиссию и двухлитровый турбодвигатель. Появление класса N4 обязано, главным образом, именно этим требованиям. Зачастую нелегко отличить с первого взгляда N-групповой автомобиль от его А-аналога - особенно это касается Mitsubishi Lancer Evo.</p>
                                    <img src="https://cdn-3.motorsport.com/images/mgl/YX4zkmNY/s8/wrc-rally-finland-1998-tommi-makinen-risto-mannisenmaki-ralliart-mitsubishi-lancer-evo5.jpg"/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img src="https://sport-auto.ch/wp-content/uploads/2020/08/d04386fc-7af7-4486-903a-16eec1ea7d13.jpg"/>
                                    <p>WRC (World Rally Car). Самая либеральная категория автомобилей, которая в последнее время окончательно вытеснила "классический" А8. По техническим параметрам относится к А8, однако изменения допускаются максимальные. Не обязательно, чтобы базовый серийный автомобиль имел привод на все колеса и турбомотор. Можно готовить спортивный двигатель, не имеющий серийного аналога. Благодаря этому WRC имеет очень мало общего с базовым серийным автомобилем, а для его омологации достаточно выпуска минимальной серии в 20 машин. Однако есть и определенные ограничения - двигатель должен находиться спереди. То есть, в отличие от знаменитой группы В, мотор нельзя размещать в базе за спинами пилотов - если только в серийном аналоге не применена подобная компоновка.


Такой либеральный регламент позволил в течение пяти лет увеличить количество команд участниц с трех до семи - и это при том, что ралли покинули "Тойота" и "Сеат". В ближайшие три года ожидается появление в высшем дивизионе еще двух новых команд. По слухам, одной из них станет "Сузуки"…


Размеры автомобиля WRC строго регламентируются – длина не менее 4000мм (4,00 м), а ширина – ровно 1770 мм (1,77 м). Самые показательные примеры: Toyota Corolla WRC, Peugeot 206 WRC, Hyundai Accent WRC и Citroёn Xsara T4 WRC. Они немного похожи внешне на своих серийных собратьев, но не более того…</p>
                                    <img src="https://sport-auto.ch/wp-content/uploads/2020/09/d6802399-f8c5-44c9-ac33-1e4b20bce595.jpg"/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img src="https://i.pinimg.com/originals/88/66/57/886657feb1f63638ba86efbf6c25f7de.jpg"/>
                                    <p>Kit Car. Отдельная категория автомобилей группы А с атмосферным двигателем до 2000 куб.см и приводом на одну ось. Можно готовить по любому из трех классов: А5, А6 и А7.


Эти автомобили создаются по спецзаказу, причем производится чуть ли не поштучная сборка, что и послужило поводом к их названию. В каких-то деталях может отличаться от омологированного серийного образца: иная конструкция двигателя, изменение размеров (в частности, ширины автомобиля – у кит-каров допустимая ширина составляет 185-188 см) и аэродинамики. Однако подобные изменения могут быть внесены только с единогласного согласия соперников – производителей раллийных автомобилей данной категории. В общем, кит-кары занимают примерно такое же положение в своих классах, что и WRC в А8.</p>
                                    <img src="https://i.redd.it/l5m96b4hyax51.jpg"/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <img src="https://a.d-cd.net/7344de2s-960.jpg"/>
                                    <p>N4, А8 (включая WRC). Объем двигателя до 3500 кубических сантиметров (без турбонаддува - так называемый "атмосферный") или до 2 литров (с наддувом). Как правило, автомобили имеют привод на все колеса, хотя допускаются отклонения - еще недавно на трассах можно было встретить заднеприводные Mercedes E190 с компрессорным 2,2-литровым двигателем или BMW M3 с 3,2-литровым "атмосферником". Минимальный вес – 1230 кг. Если же кубатура мотора превышает установленные нормы, автомобиль нагружают дополнительным весом (как в том же Mercedes E190 или Audi Coupe S2). Кроме того, это единственная категория, где разрешено применение турбодвигателя и полного привода. Существует еще допустимый предел мощности – ограничитель должен срабатывать на отметке 300 л.с.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="sixth">
                                    <img src="https://live.staticflickr.com/1387/5154591936_ce41d173f9_b.jpg"/>
                                    <p>N3, А7. Атмосферный двигатель с рабочим объемом до 2000 куб. см. Привод на одну ось. Минимальный вес – 960 кг. Это автомобили так называемой "Формулы-2" - в свое время FIA пыталась "раскрутить" этот класс и проводить в нем отдельный чемпионат для фирм-производителей. Несколько лет назад эта категория выглядела достаточно солидно - в ней были представлены "Шкода", "Фольксваген", "Сеат", "Хьюндаи", "Опель", "Рено", "Пежо"… Однако, появление WRC с его либеральным техническим регламентом поставило крест на "Формуле-2" - большая часть команд перешла в высший дивизион с собственными WRC, а остальные свернули свои раллийные программы. Поэтому сейчас двухлитровые автомобили можно встретить только в европейских и национальных соревнованиях - в чемпионате мира таких машин считанные единицы…</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="seventh">
                                    <img src="https://racemarket.net/oc-content/uploads/28/12305.jpg"/>
                                    <p>N2, А6. Атмосферный двигатель с рабочим объемом до 1600 куб. см, мощность ограничена 200 л.с. Минимальный вес – 880 кг. В данный момент - самый перспективный класс. В прошлом году Международная Федерация ввела отдельный зачет в категории Super 1600 (сейчас переименован в Junior). Предполагается, что этот класс должен стать замечательной школой для молодых гонщиков - достаточно только назвать прошлогоднего чемпиона в Super 1600 Себастьена Лоэба, которого сейчас считают главной надеждой "Ситроена". И многие автопроизводители тоже заинтересованы в относительно дешевой и простой (по сравнению с WRC) категории - она позволит им "засветиться" в ралли без больших финансовых затрат. И результат уже есть - глаза буквально разбегаются от разнообразия автомобилей: Ford Puma, Citroёn Saxo, Fiat Punto, Opel Corsa, Suzuki Ignis, Peugeot 206 XS, Volkswagen Polo, MG ZR… Не исключено, что позже на раллийных трассах могут появиться Skoda Fabia и Renault Clio.</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="eigth">
                                    <img src="https://www.ewrc-results.com/images/chassis/def/139.jpg"/>
                                    <p>N1, А5. Атмосферный двигатель с рабочим объемом до 1400 куб. см. Минимальный вес – 790 кг. По всей видимости, с развитием класса Junior постепенно исчезнет из чемпионатов мира - по большому счету, в этой категории выступают только три-четыре экипажа на миниатюрных Nissan Micra, Ford Ka и Peugeot 106.</p>
                                </Tab.Pane>
                            </Tab.Content>    
                        </Col> 
                    </Row>
                </Tab.Container>
            </Container>
        );
    }
}

export default Cars;
