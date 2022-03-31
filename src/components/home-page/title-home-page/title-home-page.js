
import './title-home-page.css';

const TitleHomePage = () => {
    return (
        <div className="title-home-page">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/CASIO-Honsya-Syaoku.jpg/468px-CASIO-Honsya-Syaoku.jpg" alt="head" className="title-item" />
            <div className="title-text">
                <h1 className="title-name">Casio Computer Co., Ltd.</h1>
                <p className="title-descr">Японський виробник електронних пристроїв.Корпорація заснована 1946 року в Токіо інженером та підприємцем Касіо Тадао. Найбільш відомий як виробник калькуляторів, аудіо устаткування, КПК, фотокамер, музичних інструментів і наручних годинників.</p>
            </div>
        </div>
    );
}

export default TitleHomePage;