import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* фон в виде сетки */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="сетка"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Готовы вывести <span className="text-purple">ваше</span> цифровое
          решение на новый уровень?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Свяжитесь со мной сегодня, и давайте обсудим, как я могу помочь вам
          достичь ваших целей.
        </p>
        <a target="_blank" href="https://t.me/joyfunless">
          <MagicButton
            title="Связаться"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Все права защищены © 2024 Biveki
        </p>
        <div className="flex flex-col text-center">
          <p className="md:text-base text-sm md:font-normal font-light">
            ИП Данилов Лев Ильич, ИНН: 370230592107
          </p>
          <p className="md:text-base text-sm md:font-normal font-light">
            Адрес: улица 6-я Сокольская, д. 10, Ивановская область, г. Иваново
          </p>
          <p className="md:text-base text-sm md:font-normal font-light">
            Номер телефона: +79611177205
          </p>
        </div>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={info.link}>
                <img src={info.img} alt="иконки" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
