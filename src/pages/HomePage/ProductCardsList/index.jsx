import React, {useState, useEffect} from 'react';
import "./product-cards-list.css";
import ProductCard from '../ProductCard';

const products = [
    {
        title: "Casio A168WG",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis natus reprehenderit laudantium ab, velit pariatur est dignissimos ipsa soluta atque!",
        imgUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQWFRgVFRUYFhgaGBwaHBocGCQYGBocHxkaHBkeHBgcIy4lHCErHxkYJzgmKy80NTU1HCU7Qjs0Py40NTEBDAwMEA8QHxISHzQrJCs0NDY2NDQ0NDQ0Nj82Nj02NDY0NDQ/NDQ0ND00NDQ9NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAMEBBgMBIgACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAABgECAwQFB//EAEoQAAIBAgMDCQQHBAcGBwAAAAECAAMRBBIhMUFRBQYTIjJSYZGScYHR0hQjQnKCocEVU5OxMzRDYrLT4gcWY6LC4yRUc4OjtMP/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQMEAgX/xAAqEQEBAAIBAgUEAgIDAAAAAAAAAQIRAxJRITFBYaEEMoGREyJCcRQzUv/aAAwDAQACEQMRAD8A9miIgIiICIiAiIgIiICIiBSInN5bxwpUicyqT1VLGwBO/XgATOcrMZbUybukY52crV3Y0cO6Ko0ZukCOzA9lSGDKBx3/AM4tWGNVWbpGNhewxNQnwsBVnRGBw++pSJOpvUW5O+9ztlj4GnmToWpO4bMRmD2VQTqFa/aKC998828tyy3W7HDHGajnfS6ml6uLv7VbyLPe3tj6fV/fYvyT553m+kdyh6H/AM2Uy4juUPQ/+bOeuuvDs4lPFYl2Ap18QWHWId1QFdm1Hvtts4TZ6blH96f4zf5ky9DTqO5rtSV0Kpa+QEBQ9wKjknV2FwbdW26ZFwGG79P3On6GTc7EaldPmPyvWNepQruWJW63JbKy2JAJJ0KOrbdxk+nkfIaGljlZbdH0qhXAuGDjKRmzWFs5B0+zPXJ6WH2y+zFn91ViInbgiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIFJEucFYVKmTaEFto7R27Tu0HnJHj8SKdNnO4aDidgHvNpBThkY5nAZiSWJGpJNyZj+rz1Jj3X8GPjtnFAdz8x+hms6OKvUVLLTF819rudhVgRbINPGXDk6ifsD0y3CoENQKpy5xbK4TYiX0Kn7WbfMGPq01k+s7lLzqfPK5avdpedT55eWPdb+KP8uW1K+VS5VrKpb+lGwC5/s/CIhbg0VkDBQ2a5OU3FySSLk30JtrwmXKo2qB7WUfrMCcmU1ABS9gBfLfZpMiYRBspn0H4RbNpR7Hcnv8ASHqoGKdpSrqBmyg2IzbM3hwnr1NwQCNhAPnPGucVLJiUyiqoZVN0ViBZiDcBTuA27Z61yM16FI7fq018covPX4bvjl9mPkmsq34iJYrIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIFIic/ljlFcPSao2trBV3szGyqPEkgSLdTdTJtq46sXZ6Y0RMtyL5s3asCDpYFfOai8nD7TO33jmt7L7BMWFFRVtdCSSzEodWJux7fGZ89XinoPzzz88pllur5LjNRb+zV8fIfCXLycmy5HuHwl3SVOKeg/NAep3k9B+ec6w7J/t3BycvE+S/CV+gJ3m8l+WOkfvJ6D88r0r96n6D88dOJvJZ+zU8fJflmPEch0nUoS6g21QqrCxDCzBdNRM3Sv36foPzx0r99PSfniY4n9u6Hc48K2HrIi4muiOl7lw5LBmBFyuyxXZxk95uOTh0zbRmU/hdl/SQzn1UOWi5ZW6zpdQVIDKCdc39weUlHMyqGwqWJNmYXO25Yk395M2cOUuOnHJLqVIIiJepIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIFs885w8rLUdqhbLRpZgp3HUq9T2k3Rba2D99TO/zsx9lFBGszglyD1lpCwa3BmLKgO4vfYDPO8V9fW6JQOipEZguiu4GVUA7qgAW3WPATJz8n+P7X8WH+VbFHEu4zrRsh2F2CX8bWP5ypdu5S/i/wCibNEF+sCAmxWCgs1tLrmBCpw0uRY31mq2OpBBUL1MpUMpyWzKwJBUBbnQE222F7TDJbfCL+urCp/4Q/Ff9BLei8aXlMz46gCQaj6Gx1bvKl9NbXYa7CDcXEvoMjkqpqZgqsQzOpytmyHbvyt5aybMpN2fBM/dqGh40/KWthvGn5TYONw+UP0pym9jncg2Quba69QE/lt0liY2g2bLUZsuXNZnJGfsaeNvLXZI1l2v6T1+7WbDf+mfy+MLhjuWmfY/+mZjjsPewqtcLm2udL2J2bt/DW+yVoYmnU0p1SxsT2bjQ2N8y8dCLgzqzKecOu92NsPYHMtlOjZdfYR4g6jiRbYde7zH5YNCqcO5GRiLG/VDEDKwPdYFdeBU8Zy8PU1KMBwIB0seyVvrYgG3AqRc2vNTE4c9m/WTVT3kuSR7Rct6+AnfFncboynVNV7bE4PNTlcV6K5m+sUZWBPW00DW8ePG87wnpY5TKbjDZZdVWIidIIiICIiAiIgIiICIiAiIgIiICIiBSc7lXHrTUjNZ2U5eqTrsBNhpqRtnRnB5wYJmenUDWVWUMOILqP1Mr5bZjbHWElvihnKNTojiaouSrFVubk9FTFiSdparUqX45RwnI5Kw1qKJc3cksb9bKRmc323K5EuNQXvNznHic2HqtYD6youm+2NqLc+JAlMMtshsTkovs26lNB49Sefm1ejZxNfIBZfAbgPbbZOD+0aC1CvQ0VZABmyAZbi4UHdodmm2dvkvCKESmlyuvaYOdpJuwJB3zZfC4dWZDURXUgMMouCQrAH2hlPvE445fHUt/OnGfJjjdW/CMU+VMMqgrSpKFta1K2W+VhpuuQh9tt8rS5coLoiU1UhyxCZBZAultL6OAB7ZLRyShYqGFwL9jTdv2HaNN1xxlx5DTbcekSyzfnL+3H82Hf4Q485MOMx6nVtm+rbfqNd8vHL1Ldk107BF7Nl1/Fx4SVUuTqTglKqOA2UlcrAN3SQdDrsl/wCxU25xbXXKN239Y6Z/5v7T/Nj3+EPHOCkWC9S5AYdQ2IvYG+zbb8puYLHh8jKFysNCFINrEjfpsnY6HClDU+k0cgNi+dMoJ0ALXteX4nkpVTpEZWGhuANQdLgjbtnOeP8AW+Fn5TjzY2638OVjBaz8DY/cYgNf7ps/4TxjEvlVah2qdRxtclfZZXH45XlBb0ag403H/IRGKXNTb75PmH+MrxvlV883YrUDSQstw9NsysNCLEM2vA6gjxnpNM3APEAyC8sJfDOeOHdv/jvJnyeb0qZ4ov8AhE3/AE/hbGfmu9VtRETUoIiICIiAiIgIiICIiAiIgIiICIiBSYMYgKMCARlOh1GyZ5hxPYb7p/kZGXkmebx7lz+psRvqOfPG1jNxFvnX/g28es9UbiDu4iafLP8AU/8A3G/+1Vm7h3s7kmwFFD7PrMRfZPLz9Wy+jZ5A+xxs1+F7tmAvuve3hN7GYWsXZkSgQWUjMl3ICWJLcQwW3gu6YOTXDOrDUEXB8LabZn5fFQjDrTcJfE0i93Cl0UlmVb9onKDlGtgdouJZwW3d96w8/wB/4dVaChi4QZiLFrakDYCZV0BBBFwQQRxBGyQTlfkjpaOLxDFOnWtUWg30jKqIrqqhiGCh9HsG1F1BIsLdvnNSrmkwPXpmrSzBFY1BQFulzBblmJvbKLi4Olri/p91PS20wlYJYhSFdGSmzZrKljbOFFjcAjTS03cHQZKQUqMwBJC6LmJLHLfZqZHEr4dMFiVweamUQkrUzI6lxZWbptbHduNiBrNPkMURjaQw/SoOhqNUWoai5m6oUqtU6gEt2dl4s3KnTt08LiAwqFFdhVD2ZwXC9CyA5wAL3Zt3ZNt95lqUGTBojBQyU0VgvYBGUELf7N728Jiw3LrNh3xT0lVMgdAKhdnBBIDLlGU9nQZtp8L0bHvUp11qUxTak6owV86ksqOCGyqeyy7pzyb6Lt1jvqn+44D0zmrsAAGSx0e5tTTLqRk3vsPDgZlv9WfbMVWkgaq4XrZCCTmF7IhFtcpFrcCCDtmW31Z9omO+U/D0sfNJ+UUzU8MpJyv0CsAbZla1wbbRs8hJ1SQKABoAAAOAGgkKxyWTCe3DfzSTiehw+rLyeisRE0KyIiAiIgIiICIiAiIgIiICIiAiIgUmpyhUIQ5QCTZQCbC7EKLmx01m3I1y87DEUBZiuZdhsA2cef2b+Er5cunHbrGbrz3lz+pt4VH/ACxtYfpNq2lUi5Jw4tYZjo+IOi7zrs3yvOCipoVlUEBHqZr69ZcU7ufYQ1x4GWUGDACwIeiw17JsVOU+0VT5Gefl4ftrdDkWylAbjQqLi3EDZpuFjv8AC9p0+UeTzVfDsGAFKqXIO8dG62HjmZfdecPA0WWmiuqKwGoS+QEkk5b+2WYjEOrqq02dW7T5hZNp7O0nT2aiRhy9Nsk3431U8nD13q3rwW4nkDFslTDhaHQviTVLmoxexrCoeqFA2La19OJ2yRYmjVRXbDgO7vmK1ajBF0AOWymw0HVFhqTfdI0mOc2DU3BuAeqxA6gbQ5bHr3Xhp7piXHVDltRNjluTmFrsFNwVuLAOfTuNxb/NlfT5V36f3+G2/N/EVaeNNXo1qYoUwFRmKgU1CgZmXS9uBteb3J+CxTYoYjELRXLQNJVpszXLOrXOYC1gCNu8TjLjahNjSYDKCDY7SFuDpYWLDfuY7pT6XU0+rOpUAWa+qBjfTTVstzp1TfhH817fJ/x73dFuR8QWrulOlhndFVRTftutXOzs6otmIJW5Bt7zNnJXFKu2Iyq1SqGVBUNQIoWmoUMQN6sdBvnCOMqaWoubtbRgpC2UgkMQPtWtfcfZN0+c45Oa9OrPP3d4/T6yl38OfiFy/SX0/ozuIPVS+tyQd9iLb9DtmzW0Rvv2/wAXwmrWotlrZlQZzkUre5V7IM19Abtu/SbGMBNPTtNmKjjo36svnK746aMZqphy2pWhRcW+rRKhB0zCmoYi+4m0mGGq5kVrWzKDbhcXkX5yUSqOLI3UyqrmyEZcpDk6BSbg+E6fNcuaAzhVbMdFN1GguFO8XvNvFbM7izZz+srtxETUqIiICIiAiIgIiICIiAiIgIiICIiAmDE0syst7XG3gdx9xmeJFmx5vytgWp16qVAMtcmottVJyIlYcbnKj23AOb6SO4JWW9I9um10voGGuUk7gQzITrbNf7M9P5z8ltiKBCECqhz0mO5xsB4qdhG8GebVQaqpWRcrrdWRtoINqlNjvKm4uduh0zTBz8fTd+jXx5dWOvVvqQ4DqzAEbNBYjQggg2IIII3EGYsW5RC96j2t1UClzcgaAjXbf3TD0q9oOaZOrBiFJOzUOpU8MwAJsLk2lRi7f2qH8afoBMsnj7OmD9pDKTlxH9GanYUXAYjLs7ZUZgvAjfpFfH5cwy1mKuUIVVJ0V2LDTs9Qi/EjZNk4tjsen+R/6xLTiKnfp+n/ALs7/r2iNVbjsR0bZT0r9VjdFUgZQTY6bTbSYfpwuBaqcwUggKR1nCa6aWuCb7tl5mXEudQ9MjUaLwNj/a8QRBxD73p+Vv8A9JE1JrUTqsGHxOcqAKq5g3aC2XLluCQNe2Nlxo2uk2TSPfb8vlmJsUd7p5gfzYzG9UHbVUex1H5gZh7iDIs35eCYHrtYHqoSL8WsVY+xQSPvE7Ck7HIWD6fEoturTIduACm6epwotvCtOWrqq2QE7FGUWvsChBvJJAFt5kq6BsLRXDU9cTiDdiD2AdDY7gouoOmuZuMt4sd5bvlHOd1NetZ8W7Y12SkhNPMFeqbBQquGIQX65Ygi+mh33uJiompyZglo01prsUW9p3mbk9DDHXjfOsuV34TyViIljkiIgIiICIiAiIgIiICIiAiIgIiICIiBSQbnRyV0VUV0FkrOq1RuVz1UqW8b5WG+4O0CTma+Mwy1EZHF1ZSD7+HjK+THqxsdYZdN2hQ5Cfvp5GDyBU76eRmxQzC6sWzKSjdY7VNidu/b75lseLeo/GeZ0zs19V7tBubr99PSZaebDn7dP0mdIX4t6j8ZcGPeb1H4ydQ6su7lf7qP309B+MoeaT99PSfjOwGPeb1H4yuZu83qPxjpxR1Zd3HPNOp+9T0n4yn+6NX96npb4zs5m7zeo/GVzN3m9TfGNY9jry7ubgORVwzGviHV1prmUKpHXJyjaesdbKOJvuFtrmeenqVsS+r5go1uEGvVHsAA/PeZyOduKyimpJ1LHUk6jKALX/vN5Tt/7PgvQ1GVAoNTYN5yqSffcTZwYbx2q5Lde9S2ViJqUEREBERAREQEREBERAREQEREBERAREQEREBERAjHOKhk+tQqGdgCGNkuFOt9LGyge6cmhjTbrlFN/ssGFuNw0l3K+F6Skyjba6/eGq/mLe+Q0PS3soPAmxHgRxnm/VY3DLc8q1cVmWOq2Ri17w9N/wCRmRKpIuCpFzayncbEdrcbianTUO+nqEwUamr5CzIHNsrplFwrEC6H7THfvmbqy1urOl1QzeHkfmlHqkAk5QACScp0A2/amh0r8H9afJLKzuyMoDklSB1ktcgjXqSJldnS6BxQ7y+k/NNblDlB1QmiKbvdQFY5VN2Aa5Li1ludu6Y+nw51DoQf7wlVej318xJ68pTpiPcpY2szhqyUL5LAByUtfU77tfTbJ3zGB+jsSFW9Qmy9m2RALeUh3LtNGqAriUQBFXLnsb3Zr6ccw8pN+ZtMDDKQbgs5BvmvZit77+zPX4f+uM3J51IIiJYqIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiBSQ7H4d1rOA7AE5hrubX+eYe6TGcDnPhcyo4GqtYm5Gh2XsR9q3nM31WHVhvst4stZa7uQKb/vH9RE1DWZKjqSHzKj5nY7SGQroCdlNT+KXHBniPW/zy1aa03BIJzqR1c7m6m6izFraM+y08zH1al3048E9TfJLk5QIINk237R+SXtiE7j/w2+ELik7j+hvhIT+GPk+gwpU1VyoCKLBrAWUCwHumYUW7595mrh8KGzsCdajmzM6lbsWtlDCw1G7fMwwPjb8b/PJvnURGuWcLV6dytJ2W6gNrY2RQT2DvB3z0zmyP/C0ja10zW4ZiW/WeT8oYtlruC1cqruNM+WwYg2Yvs0ns2CpZaaJ3UVfJQJ7OE1hJ7Rjzvi2IiJ24IiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiBSYcVQDoyHYwIMzykizc0POChBKs7AqSpGZbgg6/YmOs6pkcszgOAVNn7QKiwVASczLOnz15KUMMQKTuCLPkdlII2MQpFxbS/gJEmqJbqUKgb7LF3IVtqmxYg2NjaeVnx3HLVb8MpljuO/8ATE/cv/Cb5ZUY1P3L/wAJvhOOOU6pAvVpqd4OcMDwNk2iV/aVT9/S/wCf5JX0utOkjh3c5mprZCFy5DexVj1l1FkWZgo3Vn81+SR/E4oMytUdKoF0Co7obsUsS2Ubxa1/twWp/wDln91d/mk3HZIUFrviOiY1yj1sgJK5MpfeL3ylL7thnsc8q5k8mZsb0gUBVDVDpcgspVQWtc6sTYk3y33T1aevjd4z/TDn91isRE6cEREBERAREQEREBERAREQEREBERAREQEREBERAREQNbH/ANG/3W/kZ5NQiJh+q+6NX0/lW8v6S+Imdex1+w33G/wmcrFb5WITEx/2bdmt+D/rk3lYnpcX2Rg5PvpERLHBERAREQEREBERAREQP//Z"
    },
    {
        title: "Casio G-Shock GA-2110",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis natus reprehenderit laudantium ab, velit pariatur est dignissimos ipsa soluta atque!",
        imgUrl: "https://hotline.ua/img/tx/319/3191583115.jpg"
    },
    {
        title: "Casio G-Shock GW-M5610",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis natus reprehenderit laudantium ab, velit pariatur est dignissimos ipsa soluta atque!",
        imgUrl: "https://hotline.ua/img/tx/119/11959025.jpg"
    },
    {
        title: "Casio G-Shock DW-5600",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis natus reprehenderit laudantium ab, velit pariatur est dignissimos ipsa soluta atque!",
        imgUrl: "https://www.lamnia.com/images/800x800/46222_GA-DW-5600BB-1ER-01.jpg"
    }
];

const ProductCardsList = () => {
    const [productsToRender, setProductsToRender] = useState([]);

    const showThreeMoreProducts = (productsList) => {
        let array = [];
        for (let i = 0; i < productsToRender.length + 3; i++) {
            if(!!productsList[i]) {
                array.push(productsList[i])
            }
        }
        setProductsToRender(array);
    }
    
    useEffect( () => {
        showThreeMoreProducts(products)
    }, [])

  return (
      <div className='products-cards-list-container container'>
          <div className='products-cards-list-body row' id="productsListContainerId">
              {!!productsToRender.length ? productsToRender.map( product => {
                  return <ProductCard {...product} key={product.title}/>
              }) : <h3>No products to show</h3>}
          </div>
          <button 
            type="button" 
            className="btn btn-lg button-primary"
            onClick={() => {
                showThreeMoreProducts(products);
            }}
          >View more</button>
      </div>
  )
};

export default ProductCardsList;