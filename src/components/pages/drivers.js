import React, { Component, Fragment } from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';



class Drivers extends Component {

    state = {
        show: false
    };


    handleClick = () => {
        this.setState({ show: !this.state.show });
    }
    

    render() {

        let table;

        if (this.state.show == false) {
            table = <div></div>;
        } else {
            table = <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col" >Этап</th>
                    <th scope="col" >Год</th>
                    <th scope="col" >Автомобиль</th>
                </tr>
            </thead>
            <tbody>
                <tr class="table-active">
                    <td> </td>
                    <td> </td>
                    <td> </td>
                </tr>
                <tr class="table-active">
                    <td>Ралли Новой Зеландии</td>
                    <td>1993</td>
                    <td>Subaru Legacy RS</td>
                </tr>
                <tr class="table-active">
                    <td>Ралли Новой Зеландии</td>
                    <td>1994</td>
                    <td>Subaru Impreza 555</td>
                </tr>
                <tr class="table-active">
                    <td>Ралли Великобритании</td>
                    <td>1994</td>
                    <td>Subaru Impreza 555</td>
                </tr>
                <tr class="table-active">
                    <td>Ралли Новой Зеландии</td>
                    <td>1995</td>
                    <td>Subaru Impreza 555</td>
                </tr>
                <tr class="table-active">
                    <td>Ралли Великобритании</td>
                    <td>1995</td>
                    <td>Subaru Impreza 555</td>
                </tr>
                <tr class="table-active">
                    <td>Ралли Акрополис</td>
                    <td>1996</td>
                    <td>Subaru Impreza 555</td>
                </tr>
                <tr class="table-active">
                    <td>Ралли Сан-Ремо</td>
                    <td>1996</td>
                    <td>Subaru Impreza 555</td>
                </tr>
                <tr class="table-active">
                    <td>Ралли Каталония</td>
                    <td>1996</td>
                    <td>Subaru Impreza 555</td>
                </tr>
                <tr class="table-active">
                    <td>Ралли Сафари</td>
                    <td>1997</td>
                    <td>Subaru Impreza WRC</td>
                </tr>
                <tr class="table-active">
                    <td>Ралли Корсики</td>
                    <td>1997</td>
                    <td>Subaru Impreza WRC</td>
                </tr>
                <tr class="table-active">
                    <td>Ралли Сан-Ремо</td>
                    <td>1997</td>
                    <td>Subaru Impreza WRC</td>
                </tr>
                <tr class="table-active">
                    <td>Ралли Австралии</td>
                    <td>1997</td>
                    <td>Subaru Impreza WRC</td>
                </tr>
                <tr class="table-active">
                    <td>Ралли Великобритании</td>
                    <td>1997</td>
                    <td>Subaru Impreza WRC</td>
                </tr>
                <tr class="table-active">
                    <td>Ралли Португалии</td>
                    <td>1998</td>
                    <td>Subaru Impreza WRC</td>
                </tr>
                <tr class="table-active">
                    <td>Ралли Корсики</td>
                    <td>1998</td>
                    <td>Subaru Impreza WRC</td>
                </tr>
                <tr class="table-active">
                    <td>Ралли Акрополис</td>
                    <td>1998</td>
                    <td>Subaru Impreza WRC</td>
                </tr>
                <tr class="table-active">
                    <td>Ралли Сафари</td>
                    <td>1999</td>
                    <td>Ford Focus WRC</td>
                </tr>
                <tr class="table-active">
                    <td>Ралли Португалии</td>
                    <td>1999</td>
                    <td>Ford Focus WRC</td>
                </tr>
                <tr class="table-active">
                    <td>Ралли Каталония</td>
                    <td>2000</td>
                    <td>Ford Focus WRC</td>
                </tr>
                <tr class="table-active">
                    <td>Ралли Акрополис</td>
                    <td>2000</td>
                    <td>Ford Focus WRC</td>
                </tr>
                <tr class="table-active">
                    <td>Ралли Арагентина</td>
                    <td>2001</td>
                    <td>Ford Focus WRC</td>
                </tr>
                <tr class="table-active">
                    <td>Ралли Кипра</td>
                    <td>2001</td>
                    <td>Ford Focus WRC</td>
                </tr>
                <tr class="table-active">
                    <td>Ралли Акрополис</td>
                    <td>2001</td>
                    <td>Ford Focus WRC</td>
                </tr>
                <tr class="table-active">
                    <td>Ралли Акрополис</td>
                    <td>2002</td>
                    <td>Ford Focus WRC</td>
                </tr>
            </tbody>
        </table>;
        }


        return (
            <div>
                <Zoom top opposite cascade>
                    <div align="center">
                        <h1 className="page-header" align="center" >LEGENDARY RALLY DRIVERS</h1>
                        
                    </div>
                </Zoom>
                <Fragment>
                    <div style={styles.block} >
                        <Fade bottom big>
                            <h1 style={styles.title}>Colin McRae</h1>
                            <p>Колин Макрей начал свою карьеру раллийного гонщика в 1986 году, пилотируя Talbot Sunbeam. С самого начала выступлений в чемпионате Шотландии по ралли он получил известность за свою скорость и захватывающий стиль вождения. Многие сравнивали стиль Макрея с пилотированием Ари Ватанена, известного финского раллийного гонщика, которого МакРей всегда называл своим кумиром. Вскоре он пересел за руль Vauxhall Nova, а затем — на Ford Sierra XR 4x4. В начале своей гоночной карьеры молодой Макрей имел прозвище «Маккрэш» за частые аварии, причиной которых был авантюрный стиль езды. Со временем его больше так не называли, очень редко Колин бил машины. Колин впервые выступил на чемпионате мира по ралли (WRC) в 1987 году в Ралли Швеции, пилотируя Vauxhall Nova, а в следующий раз — в 1989 он занял пятое место в Ралли Новой Зеландии на Sierra Cosworth. В 1991 он присоединился к команде Продрайв, выступавшей на Subaru на Ралли Великобритании. В 1992 году провёл две гонки в британском кольцевом чемпионате BTCC за Продрайв на BMW 318is. Впервые выиграл ралли этап WRC в 1993 году — Ралли Новой Зеландии, пилотируя Subaru Legacy. МакРею потребовалось лишь два года (с 1993), чтобы получить титул чемпиона мира 1995 года во время завершающего этапа сезона на Ралли Великобритании, обойдя дважды чемпиона мира Карлоса Сайнса из своей же команды. В последующие годы Колин становился победителем в таких гонках, как Ралли Акрополис, Ралли Сафари и Ралли Корсики, на чемпионатах мира Колин Макрей занимал вторые места в 1996 и 1997 годах, в обоих случаях проигрывая Томми Мякинену. В 1997 году Макрею не хватило всего одного очка, чтобы во второй раз стать чемпионом: шотландец выиграл подряд три последние гонки сезона, но на последнем этапе Мякинен сумел заработать так необходимое одно очко за шестое место и защитил титул чемпиона мира. По регламенту, в случае равенства очков, титул присуждался гонщику с наибольшим количеством побед: Макрей имел в своём активе 5 побед, а Мякинен — 4. В первую очередь, благодаря выступлениям Макрея, команда Subaru первенствовала в зачёте производителей чемпионата мира по ралли. В своём последнем сезоне за эту команду в 1998 году он выиграл три ралли и занял третье место в WRC, а также стал победителем гонки Чемпионов.</p>                       
                        </Fade>
                        <Fade left>
                            <img className="img" src="https://a4.pbase.com/o4/74/669674/1/91645713.Lseiw3cl.01CRW_8303_llNova.jpg"/>
                        </Fade>
                        <Fade right>
                            <img className="img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Ford_Sierra_XR4x4_tuned.jpg/1280px-Ford_Sierra_XR4x4_tuned.jpg"/>
                        </Fade>
                        <Fade left>
                            <img className="img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Colin_Mcrae%2BTravis_Pastrana%2BKen_Block.jpg/1280px-Colin_Mcrae%2BTravis_Pastrana%2BKen_Block.jpg"/>
                        </Fade>
                        <Fade right>
                            <img className="img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Colin_McRae%27s_Subaru_Impreza_555.jpg/1024px-Colin_McRae%27s_Subaru_Impreza_555.jpg"/>
                        </Fade>
                        <button
                            style={{display: 'inline'}}
                            className="btn btn-secondary my-5"
                            type="button"
                            onClick={this.handleClick}
                        >
                            { this.state.show ? 'Спрятать' : 'Показать' } Победы
                        </button>
                        {table}
                        <Fade top>
                            <h1 style={styles.title}>{`Sebastien Loeb `}</h1>                       
                        </Fade>
                    </div>
                </Fragment>

            </div>
        );
  }
}

const styles = {
    block: {
        fontColour: 'white',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        background: '#000',
        borderBottom: '1px solid rgba(255,255,255,.2)',
        display: 'inline-block',
        padding: '25px',
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'Lato, sans-serif',

    },
};

export default Drivers;