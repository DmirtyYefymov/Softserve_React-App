import React from 'react';
import HeaderNav from '../../components/HeaderNav/HeaderNav';
import PageHeading from '../../components/PageHeading/PageHeading';
import ProductCardsList from '../../components/ProductCardsList';
import PageFooter from '../../components/PageFooter';

const PageHeadingProps = {
    title:"Casio Computer Co., Ltd.",
    description: "Японський виробник електронних пристроїв. Корпорація заснована 1946 року в Токіо інженером та підприємцем Касіо Тадао. Найбільш відомий як виробник калькуляторів, аудіо устаткування, КПК, фотокамер, музичних інструментів і наручних годинників.",
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/CASIO-Honsya-Syaoku.jpg/468px-CASIO-Honsya-Syaoku.jpg"
}

const HomePage = () => {
  return (
    <>
        <HeaderNav/>
        <PageHeading {...PageHeadingProps} />
        <ProductCardsList/>
        <PageFooter/>
    </>
  )
}

export default HomePage