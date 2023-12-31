import './quiz.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../routes/AppRoutes';
import watter from '../../../img/watter.png';
import poklice from '../../../img/poklice.png';
import okno from '../../../img/windows.png';
import horicipanev from '../../../img/panev.png';
import correct from '../../../img/correct.jpg';
import wrong from '../../../img/wrong.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Quiz = () => {
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  function handleCorrectAnswer() {
    setCorrectAnswer(true);
    setWrongAnswer(false);
    setOpenModal(true);
  }
  function handleWrongAnswer() {
    setCorrectAnswer(false);
    setWrongAnswer(true);
    setOpenModal(true);
  }

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-out', // Easing option
      offset: 100, // Offset (in pixels) from the original trigger point
    });
  }, []);
  return (
    <>
      <div className="quiz" data-aos="fade-up">
        <img className="panev__img" src={horicipanev} alt="horici panev" />
        <span>
          <h1 className="quizz__header">
            Připravuješ si večeři, když v tom najednou začne hořet pánvička s
            olejem.
          </h1>
          <h1 className="quizz__header">Jak zareaguješ?</h1>
        </span>

        <div className="quiz__answers">
          <button className="quiz__answer" onClick={handleWrongAnswer}>
            <img
              src={watter}
              style={{ height: '70px', width: '70px' }}
              alt="voda"
            />
            <p>Poleju jí vodou</p>
          </button>
          <button className="quiz__answer" onClick={handleWrongAnswer}>
            <img
              src={poklice}
              style={{ height: '50px', width: '100px' }}
              alt="poklice"
            />
            <p>Přiklopím jí puklicí</p>
          </button>
          <button className="quiz__answer" onClick={handleCorrectAnswer}>
            <img
              src={okno}
              style={{ height: '70px', width: '70px' }}
              alt="okno"
            />
            <p>Vyhodím jí z okna</p>
          </button>
        </div>

        {/* <div className="quiz__timer"></div> */}
      </div>

      <div className={`overlay ${openModal ? `show` : ``}`}>
        <div className={`modal ${correctAnswer ? `show__correct` : `notshow`}`}>
          <h1 className="modal__header">Správně!</h1>
          <div className="modal__content">
            <p className="modal__text">
              <b>Proč bych měl zvážit toto řešení?</b>
              <br />
              {''} Pokoušet se uhasit oheň na pánvičce tím, že ji přiklopíte
              pukličkou, může být dobrý nápad, ale také dost riskantní.
              Přiklopení pukličkou může způsobit zvýšení tlaku a výbuch. To může
              vést k vážným popáleninám a zraněním. Puklička může být vyrobená z
              materiálů, které se mohou stát hořlavými nebo způsobit zvýšení
              ohně, když jsou vystaveny vysokým teplotám. Puklička zrovna nemusí
              těsně přiléhat k pánvičce, což by mohlo umožnit kyslíku podporovat
              hoření. Pouhým přiklopením pukličky na pánvi se nezajistí
              dostatečné ochlazení oleje nebo hořícího materiálu. To může
              způsobit, že oheň znovu vzplane, jakmile bude puklička odstraněna.
              V případě, že vznikne oheň na pánvi, je nejlepší volbou použít
              hasicí přístroj určený pro olejové požáry, a pokusit se uhasit
              oheň v souladu s bezpečnostními postupy. Použití pukličky by mělo
              být poslední možností a mělo by být provedeno s maximální
              opatrností.
            </p>
            <img className="modal__image" src={correct} alt="correct" />
          </div>
          <Link to={AppRoutes.HOME}>
            <button className="modal__button">Pokračovat</button>
          </Link>
        </div>

        <div className={`modal ${wrongAnswer ? `show__wrong` : `notshow`}`}>
          <h1 className="modal__header">Špatně!</h1>
          <div className="modal__content">
            <p className="modal__text">
              <b>Proč není dobrý nápad hasit oheň na pánvičce vodou?</b>
              <br />
              {''} Hasit oheň na pánvičce vodou může být nebezpečné. Přidání
              vody na horkou pánvičku může způsobit prudké stříkání oleje a
              hořícího materiálu, což může vést k šíření ohně na jiná místa v
              kuchyni nebo způsobit popáleniny. Když voda narazí na velmi horký
              olej, může se okamžitě přeměnit na páru, což může vést k výbuchu a
              zranění osob v okolí.
              <br />
              {''}
              <br />
              {''}
              <b>Jak bych měl tedy situaci vyřešit?</b>
              <br />
              {''}V případě, že hořící pánvičku musíte uhasit, je lepší použít
              hasicí přístroj určený k hašení olejových požárů, poklop na pánvi,
              nebo hasící přikrývku.
            </p>
            <img className="modal__image" src={wrong} alt="wrong" />
          </div>
          <Link to={AppRoutes.HOME}>
            <button className="modal__button">Pokračovat</button>
          </Link>
        </div>
      </div>
    </>
  );
};
