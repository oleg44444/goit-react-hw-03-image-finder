// При натисканні на кнопку Load more повинна довантажуватись наступна порція зображень і рендеритися разом із попередніми. Кнопка повинна рендеритися лише тоді, коли є якісь завантажені зображення. Якщо масив зображень порожній, кнопка не рендериться.
import React from 'react';
function Button({ onClick }) {
  return (
    <button type="button" onClick={onClick} className="button">
      Load more
    </button>
  );
}
export default Button;
