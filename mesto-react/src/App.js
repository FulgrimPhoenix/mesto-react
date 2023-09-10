import './App.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import PopupWithForm from './components/PopupWithForm.js';
import Form from './components/Form.js';
import Input from './components/Input.js';
import ImagePopup from './components/ImagePopup.js';

function App() {
  return (
    <div className="page">
      <Header></Header> 
      <Main />
      <Footer />
      <PopupWithForm name='profile' title='Редактировать профиль' test={
        <Form inputList={[
          <Input id='field-name' placeholder='Введите имя'/>,
          <Input id='field-speciality' placeholder='Введите специальность'/>
        ]} submitButtonText='Сохранить'/>}/>
      <PopupWithForm name='add-card'title='Новое место' test={
        <Form inputList={[
          <Input id='field-title' placeholder='Название'/>,
          <Input id='field-url' placeholder='Ссылка на картинку'/>
        ]} 
        submitButtonText='Создать'/>}
      />
      <PopupWithForm name='avatar'title='Обновить аватар' test={
        <Form inputList={[
          <Input id='field-url-avatar' placeholder='Ссылка на картинку'/>,
        ]} 
        submitButtonText='Сохранить'/>}
      />
      <PopupWithForm name='delete-card'title='Вы уверены?' test={
        <Form submitButtonText='Да'/>}
      />
      <div className="popup popup-picture" id="popup-picture">
        <div className="popup-picture__container">
          <button type="button" className="popup__exit"></button>
          <img className="popup-picture__photo" src="#" alt="#" />
          <h2 className="popup-picture__title"></h2>
        </div>
      </div>
    </div>
  );
}

export default App;
