import { link } from "fs";

export const navItems = [
  { name: "О нас", link: "#about" },
  { name: "Проекты", link: "#projects" },
  { name: "Отзывы", link: "#testimonials" },
  { name: "Контакты", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Ставлю сотрудничество на первое место, создавая атмосферу доверия",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Гибко подстраиваюсь под разные часовые пояса клиентов",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Техстек",
    description: "Постоянно совершенствуюсь",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Технический энтузиаст с страстью к разработке и инновациям",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "В настоящее время разрабатываю кино-сайт на JavaScript",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Хотите начать совместный проект?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Solovey 3D",
    des: "Solovey 3D — платформа для заказа индивидуальных изделий с помощью 3D-печати.",
    img: "/p1.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://solovey3d.tech/",
  },
  {
    id: 2,
    title: "ООО ДМДК",
    des: "ООО ДМДК — компания, специализирующаяся на продаже и закупке металлических сплавов.",
    img: "/p2.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://ooodmdk.ru/",
  },
  {
    id: 3,
    title: "Ферма Вкусов",
    des: "Ферма Вкусов — интернет-магазин фермерской еды, предлагающий свежие и натуральные продукты прямо от проверенных производителей.",
    img: "/p3.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/c.svg"],
    link: "https://fermavkusov.ru/",
  },
  {
    id: 4,
    title: "T Taxi",
    des: "T Taxi — удобное веб-приложение в Telegram для быстрого заказа такси в Омске, предлагающее простоту использования и оперативный сервис.",
    img: "/p4.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/c.svg", "/gsap.svg"],
    link: "https://t.me/t24taxibot",
  },
];

export const testimonials = [
  {
    quote:
      "Лев — настоящий профессионал! Работа выполнена быстро и качественно.",
    name: "Анна С.",
  },
  {
    quote:
      "Сотрудничество с Левом превзошло ожидания. Всё было сделано чётко и в срок.",
    name: "Максим И.",
  },
  {
    quote:
      "Очень довольна! Лев оперативно справился с задачей и учёл все пожелания.",
    name: "Екатерина П.",
  },
  {
    quote:
      "Отличный специалист! Решил все технические вопросы на высшем уровне.",
    name: "Алексей Г.",
  },
  {
    quote: "Лев — настоящий мастер своего дела. Проект выполнен идеально!",
    name: "Мария К.",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Сайт визитка",
    desc: "От 30000₽",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Корпоративный сайт",
    desc: "От 50000₽",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Интернет магазин",
    desc: "От 65000₽",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Индвидуальный проект, сервис",
    desc: "От 100000₽",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Bivekich",
  },
  {
    id: 2,
    img: "/tg.svg",
    link: "https://t.me/joyfunless",
  },
];
