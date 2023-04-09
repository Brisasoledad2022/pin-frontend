import React, { useState } from 'react';
import { UilAngleDown, UilAngleUp } from '@iconscout/react-unicons';

export default function Accordion({ className }) {
  const [activeItem, setActiveItem] = useState(997);

  const clickHandler = (id) => {
    if (activeItem === id) {
      return setActiveItem(null);
    }
    setActiveItem(id);
  };

  const accordionItems = [
    {
      title: 'Fine cocktail making',
      content:
      `Are you ready for a sensory adventure? Come experience the
      tantalizing taste of cocktails at The Bloom bar! Our expert
      mixologists have carefully crafted a selection of unique and
      delicious cocktails that are sure to leave your taste buds buzzing
      with delight. From classic favorites to innovative creations, we
      use only the freshest ingredients and highest quality spirits to
      bring you the ultimate cocktail experience. Whether you're in the
      mood for something sweet and fruity or bold and savory, we've got
      you covered. But that's not all - we also offer a cozy and
      welcoming atmosphere where you can sit back, relax, and enjoy the
      company of friends or family. So come on down to The Bloom bar and
      let us take you on a journey through the world of cocktails. You
      won't be disappointed!`,
      id: 997,
    },
    {
      title: 'Brunch service',
      content:
        `Start your day off right with The Bloom's delicious brunch
        service! Our expert chefs have crafted a delectable menu that is
        sure to satisfy your cravings and leave you feeling energized and
        ready to take on the day. From fluffy pancakes to savory omelets,
        we use only the freshest ingredients to create a wide variety of
        mouth-watering dishes. And don't forget about our signature brunch
        cocktails, made with top-quality spirits and fresh juices. But
        it's not just the food that sets us apart - we also offer a
        beautiful and inviting atmosphere where you can sit back and relax
        with friends or family. Whether you're looking for a cozy spot for
        a romantic brunch date or a lively gathering with friends, we've
        got you covered. So come on down to The Bloom and treat yourself
        to a delicious brunch experience that will leave you feeling
        satisfied and ready to take on the day!`,
      id: 998,
    },
    {
      title: 'Wedding/Brithday planning',
      content:
      `Let The Bloom help make your special day unforgettable with our
      expert wedding and birthday party planning services! Our team of
      experienced planners and designers are here to help bring your
      vision to life and create a truly magical experience. From venue
      selection to floral arrangements and everything in between, we
      handle every detail with care and attention to ensure that your
      special day is perfect. We'll work with you to create a customized
      plan that fits your unique style and budget, so you can sit back
      and relax knowing that every aspect of your event is taken care
      of. But it's not just about the planning - we also offer a
      beautiful and elegant venue that is the perfect backdrop for your
      special day. With stunning views, delicious catering options, and
      top-notch service, The Bloom is the perfect choice for your
      wedding or birthday party. So why stress over the details? Let The
      Bloom take care of everything and create a celebration that you
      and your guests will never forget. Contact us today to start
      planning your dream event! `,
      id: 999,
    },
  ];

  return (
    <div className={`d-flex flex-column ${className}`}>
      {accordionItems.map((item, index, array) => (
        <div className="d-flex flex-column" key={item.id}>
          {/* Title */}
          <div
            className={`d-flex align-items-center justify-content-between bg-white p-4 cursor-pointer border-accordion ${
              index === 0 && 'rounded-top'
            } ${
              index === array.length - 1 &&
              activeItem !== item.id &&
              'rounded-bottom'
            }`}
            key={item.id}
            onClick={() => clickHandler(item.id)}
          >
            <h6 className="m-0 text-gray-300">{item.title}</h6>
            {activeItem === item.id ? (
              <UilAngleUp size={30} color="#e0752f" />
            ) : (
              <UilAngleDown size={30} color="#E0752F" />
            )}
          </div>
          {/* Title */}
          {/* Content */}
          {activeItem === item.id && (
            <div
              className={`p-4 bg-white border-accordion ${
                index === array.length - 1 && 'rounded-bottom'
              }`}
            >
              <p className="m-0 text-gray-300 text-justify">{item.content}</p>
            </div>
          )}
          {/* Content */}
        </div>
      ))}
    </div>
  );
}
