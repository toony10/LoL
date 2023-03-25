import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// icons
import { GiWoodenChair } from "react-icons/gi";
import { MdOutlineTableBar } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import {
  RiWhatsappFill,
  RiFacebookCircleFill,
  RiInstagramFill,
} from "react-icons/ri";
import { BiBed } from "react-icons/bi";
const navigation = [
  { name: "من نحن؟", href: "#about-us", id: 1 },
  { name: "منتجاتنا", href: "#products", id: 2 },
  { name: "موقعنا", href: "#location", id: 3 },
  { name: "تواصل معنا", href: "#contact", id: 4 },
];

const productTypes = [
  { name: "كراسي", icon: <GiWoodenChair />, id: 1 },
  { name: "طاولات", icon: <MdOutlineTableBar />, id: 2 },
  { name: "سراير", icon: <BiBed />, id: 3 },
  { name: "الكل", icon: <AiOutlineHome />, id: 4 },
];

const products = [
  {
    id: 1,
    name: "ليونيل أندريس ميسي",
    href: "#",
    imageSrc:
      "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltd320fa9eed734ef9/63c50c7f24bb08700b21b1c1/GettyImages-1448012069.jpg?quality=60&format=pjpg&auto=webp&width=1000",
    imageAlt: "Front of men's ليونيل أندريس ميسي in black.",
    price: "$35",
    color: "ابيض",
  },
  {
    id: 2,
    name: "ليونيل أندريس ميسي",
    href: "#",
    imageSrc:
      "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltd320fa9eed734ef9/63c50c7f24bb08700b21b1c1/GettyImages-1448012069.jpg?quality=60&format=pjpg&auto=webp&width=1000",
    imageAlt: "Front of men's ليونيل أندريس ميسي in black.",
    price: "$35",
    color: "ابيض",
  },
  {
    id: 3,
    name: "ليونيل أندريس ميسي",
    href: "#",
    imageSrc:
      "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltd320fa9eed734ef9/63c50c7f24bb08700b21b1c1/GettyImages-1448012069.jpg?quality=60&format=pjpg&auto=webp&width=1000",
    imageAlt: "Front of men's ليونيل أندريس ميسي in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 4,
    name: "ليونيل أندريس ميسي",
    href: "#",
    imageSrc:
      "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltd320fa9eed734ef9/63c50c7f24bb08700b21b1c1/GettyImages-1448012069.jpg?quality=60&format=pjpg&auto=webp&width=1000",
    imageAlt: "Front of men's ليونيل أندريس ميسي in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 5,
    name: "ليونيل أندريس ميسي",
    href: "#",
    imageSrc:
      "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltd320fa9eed734ef9/63c50c7f24bb08700b21b1c1/GettyImages-1448012069.jpg?quality=60&format=pjpg&auto=webp&width=1000",
    imageAlt: "Front of men's ليونيل أندريس ميسي in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 6,
    name: "ليونيل أندريس ميسي",
    href: "#",
    imageSrc:
      "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltd320fa9eed734ef9/63c50c7f24bb08700b21b1c1/GettyImages-1448012069.jpg?quality=60&format=pjpg&auto=webp&width=1000",
    imageAlt: "Front of men's ليونيل أندريس ميسي in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 7,
    name: "ليونيل أندريس ميسي",
    href: "#",
    imageSrc:
      "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltd320fa9eed734ef9/63c50c7f24bb08700b21b1c1/GettyImages-1448012069.jpg?quality=60&format=pjpg&auto=webp&width=1000",
    imageAlt: "Front of men's ليونيل أندريس ميسي in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 8,
    name: "ليونيل أندريس ميسي",
    href: "#",
    imageSrc:
      "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltd320fa9eed734ef9/63c50c7f24bb08700b21b1c1/GettyImages-1448012069.jpg?quality=60&format=pjpg&auto=webp&width=1000",
    imageAlt: "Front of men's ليونيل أندريس ميسي in black.",
    price: "$35",
    color: "Black",
  },
  // More products...
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className='bg-white '>
      <header className='absolute inset-x-0 top-0 z-50'>
        <nav
          className='flex items-center justify-between p-6 lg:px-8 flex-row-reverse'
          aria-label='Global'>
          <div className='flex lg:flex-1 flex-row-reverse'>
            <a href='#' className='-m-1.5 p-1.5'>
              <Image
                width={0}
                height={0}
                className='h-8 w-auto'
                src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                alt=''
              />
            </a>
          </div>
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(true)}>
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='hidden lg:flex lg:gap-x-12  flex-row-reverse'>
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className='hover-underline-animation text-base font-semibold leading-6 text-gray-900 pb-1'>
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog
          as='div'
          className='lg:hidden'
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}>
          <div className='fixed inset-0 z-50' />
          <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
            <div className='flex items-center justify-between'>
              <a href='#' className='-m-1.5 p-1.5'>
                <Image
                  width={0}
                  height={0}
                  className='h-8 w-auto'
                  src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                  alt=''
                />
              </a>
              <button
                type='button'
                className='-m-2.5 rounded-md p-2.5 text-gray-700'
                onClick={() => setMobileMenuOpen(false)}>
                <span className='sr-only'>Close menu</span>
                <XMarkIcon className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
            <div className='mt-6 flow-root'>
              <div className='-my-6 divide-y divide-gray-500/10'>
                <div className='space-y-2 py-6'>
                  {navigation.map((item) => (
                    <a
                      key={item.id}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className='-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <div className='relative isolate px-6 pt-14 lg:px-8'>
        <div className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
          <svg
            className='relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]'
            viewBox='0 0 1155 678'>
            <path
              fill='url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)'
              fillOpacity='.3'
              d='M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z'
            />
            <defs>
              <linearGradient
                id='45de2b6b-92d5-4d68-a6a0-9b9b2abad533'
                x1='1155.49'
                x2='-78.208'
                y1='.177'
                y2='474.645'
                gradientUnits='userSpaceOnUse'>
                <stop stopColor='#9089FC' />
                <stop offset={1} stopColor='#FF80B5' />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
          <div className='text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
              اختر اثاثك بعنايه
            </h1>
            <p className='mt-6 text-lg leading-8 text-gray-600'>
              . اجود انواع الأثاث صنعت بعنايه من اجود الأخشاب
            </p>
            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <a
                href='#products'
                className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                ابدأ رحلتك معنا الأن
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*about us*/}

      <section className='py-16 bg-white' id='about-us'>
        <h1 className='text-sky-500 border-b-sky-500 rounded-bl-sm border-b-4 max-w-max m-auto mt-0 mb-2 text-4xl font-medium leading-tight text-primary bg-clip-text bg-gradient-to-r p-4'>
          من نحن؟
        </h1>
        <p className='font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl'>
          نبذه مختصره عنا وعن خدماتنا
        </p>
        <div className='container m-auto px-6 text-gray-600 md:px-12 xl:px-6'>
          <div className='space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12'>
            <div className='md:5/12 lg:w-5/12'>
              <Image
                src='https://tailus.io/sources/blocks/left-image/preview/images/startup.png'
                alt='image'
                loading='lazy'
                width={0}
                height={0}
              />
            </div>
            <div className='md:7/12 lg:w-6/12'>
              <h2 className='text-2xl text-gray-900 font-bold md:text-4xl text-right'>
                محل بيع اثاث
              </h2>
              <p className='mt-6 text-gray-600 text-right'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                omnis voluptatem accusantium nemo perspiciatis delectus atque
                autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
                consequatur! Officiis id consequatur atque doloremque!
              </p>
              <p className='mt-4 text-gray-600 text-right'>
                Nobis minus voluptatibus pariatur dignissimos libero quaerat
                iure expedita at? Asperiores nemo possimus nesciunt dicta veniam
                aspernatur quam mollitia.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*Products*/}
      <section className='bg-white' id='products'>
        <h1 className='text-sky-500 border-b-sky-500 rounded-bl-sm border-b-4 max-w-max m-auto mt-0 mb-2 text-4xl font-medium leading-tight text-primary bg-clip-text bg-gradient-to-r p-4'>
          منتجاتنا
        </h1>
        <p className='font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl'>
          اختر مايناسب بيتك
        </p>
        <div className='flex justify-center space-x-5 mt-7'>
          {productTypes.map((type) => (
            <button
              key={type.id}
              class='flex flex-row-reverse justify-between bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full '>
              <div className='m-auto'>{type.icon}</div>
              <div className='mx-2'>{type.name}</div>
            </button>
          ))}
        </div>
        <div className='mx-auto max-w-2xl py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
          <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
            {products.map((product) => (
              <div key={product.id} className='group relative'>
                <div className='min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80'>
                  <Image
                    width={0}
                    height={0}
                    sizes='(min-width: 640px) 50vw,
              (min-width: 1024px) 25vw,
             100vw"'
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                  />
                </div>
                <div className='mt-4 flex justify-between flex-row-reverse'>
                  <div>
                    <h3 className='text-sm text-gray-700'>
                      <a href={product.href}>
                        <span aria-hidden='true' className='absolute inset-0' />
                        {product.name}
                      </a>
                    </h3>
                    <p className='mt-1 text-sm text-gray-500'>
                      {product.color}
                    </p>
                  </div>
                  <p className='text-sm font-medium text-gray-900'>
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*location*/}
      <section className='flex flex-col justify-center' id='location'>
        <h1 className='text-sky-500 block border-b-sky-500 rounded-bl-sm border-b-4 max-w-max m-auto mt-0 mb-2 text-4xl font-medium leading-tight text-primary bg-clip-text bg-gradient-to-r p-4'>
          موقعنا
        </h1>
        <p className='font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl'>
          ستسعدنا زيارتك لنا في اي وقت
        </p>
        <div className='flex justify-center mt-10'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6958.765296474075!2d31.20112729999999!3d29.30044930000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1679590983898!5m2!1sar!2seg'
            width='1500'
            height='600'
            className='p-0'
            allowfullscreen=''
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'></iframe>
        </div>
      </section>
      {/*contact us*/}
      <section className='bg-white' id='contact'>
        <div className='py-8 lg:py-16 px-4 mx-auto max-w-screen-md'>
          <h1 className='text-sky-500 block border-b-sky-500 rounded-bl-sm border-b-4 max-w-max m-auto mt-0 mb-2 text-4xl font-medium leading-tight text-primary bg-clip-text bg-gradient-to-r p-4'>
            تواصل معنا
          </h1>
          <p className='mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl'>
            سيسعدنا مساعدتدك في حال وجود اي استفسارات او شكاوي
          </p>
          <form action='#' className='space-y-8' onSubmit={console.log("lol")}>
            <div>
              <label
                for='email'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600 text-right'>
                بريدك الألكتروني
              </label>
              <input
                type='email'
                id='email'
                className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light text-right'
                placeholder='name@examble.com'
                required
              />
            </div>
            <div>
              <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600 text-right'>
                رقم الهاتف
              </label>
              <input
                type='text'
                id='subject'
                className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light text-right'
                placeholder='01090677513'
                required
              />
            </div>
            <div className='sm:col-span-2'>
              <label
                for='message'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600 text-right'>
                كيف يمكننا مساعدتك ؟
              </label>
              <textarea
                id='message'
                rows='6'
                className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light text-right'
                placeholder='من فضلك اترك رسالتك هنا'></textarea>
            </div>
            <button
              type='submit'
              className=' my-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
              أرسال
            </button>
          </form>
        </div>
        <div className='flex justify-center mb-7 space-x-8'>
          <a href='#' className='cursor-pointer'>
            <RiWhatsappFill className='h-9 w-8 fill-green-700 hover:w-12' />
          </a>
          <a href='#' className='cursor-pointer'>
            <RiFacebookCircleFill className='h-9 w-8 fill-blue-700 hover:w-12' />
          </a>
          <a href='#' className='cursor-pointer'>
            <RiInstagramFill className='h-9 w-8 fill-purple-700 hover:w-12' />
          </a>
        </div>
      </section>
    </div>
  );
}
