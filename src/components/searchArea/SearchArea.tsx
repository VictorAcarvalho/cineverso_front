// import React, { useState } from 'react';
// import Swal from "sweetalert2";
// import { handleMovieSearch } from "../../services/api";
// import style from './SearchArea.module.css';
// import box from '../../assets/box.svg';



// function SearchArea() {
//     const [search, setSearch] = useState<string>('');
//     const [list, setList] = useState<Product[]>([]);

//     const searchProducts = async (queryParam: string) => {
//         try {
//             const data = await handleMovieSearch(queryParam);
//             setList(data.products);
//             // eslint-disable-next-line @typescript-eslint/no-unused-vars
//         } catch (error) {
//             await Swal.fire({
//                 title: 'Ops!!',
//                 text: `${error}`,
//                 icon: 'error'
//             });
//         }
//     }

//     const handleInputSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
//         event.preventDefault();
//         const inputSearch = event.target.value;
//         setSearch(inputSearch);
//     }

//     return (
//         <div className={style.container}>
//             <div className={style.rowWrapper}>
//                 <input
//                     type="text"
//                     placeholder="busque por um produto"
//                     onChange={handleInputSearch}
//                     value={search}
//                 />
//                 <button
//                     onClick={() => searchProducts(search)}
//                     type="submit"
//                 >
//                     Buscar
//                 </button>
//             </div>
//             <ul className={style.listContainer}>
//                 {list.map((item, index) => (
//                     <li key={item.id || index} className={style.itemCard}>
//                         <img src={box} alt="imagem do produto" className={style.itemImage} />
//                         <p className={style.itemTitle}>
//                             {item.name}
//                         </p>
//                         <p>Visto: {item._meta.visitsClickCount} vezes</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default SearchArea;