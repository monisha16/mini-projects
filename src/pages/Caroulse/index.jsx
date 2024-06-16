import { useEffect, useState } from 'react';

const data = [
  'https://img.freepik.com/free-photo/cute-domestic-kitten-sits-window-staring-outside-generative-ai_188544-12519.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1718409600&semt=ais_user',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX-cH6ccXVE-VStdGyJ7t_uSTj5w0CDmL1lqvmVxXGEQySeu_65kTyZJZvC7pQjmtRqsg&usqp=CAU',
  'https://t3.ftcdn.net/jpg/05/89/27/00/360_F_589270020_TAwg1CiVHsEFwJyQZLVGBU52O5zdHAhe.jpg',
  'https://t4.ftcdn.net/jpg/06/33/10/89/360_F_633108988_yAe8YRmKqNQjaUegJreMzRCfZDbi9ire.jpg',
];

const Carousel = () => {
  const [currIndex, setCurrIndex] = useState(0);
  const [currImg, setCurrImg] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrImg((prev) => (prev + 1) % data.length);
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, [data.length]);

  const handleNext = () => {
    if (currIndex >= data.length - 1) {
      setCurrIndex(0);
    } else {
      setCurrIndex(currIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currIndex <= 0) {
      setCurrIndex(data.length - 1);
    } else {
      setCurrIndex(currIndex - 1);
    }
  };

  const handleImgNext = () => {
    if (currImg >= data.length - 1) {
      setCurrImg(0);
    } else {
      setCurrImg(currImg + 1);
    }
  };

  const handleImgPrev = () => {
    if (currImg <= 0) {
      setCurrImg(data.length - 1);
    } else {
      setCurrImg(currImg - 1);
    }
  };

  return (
    <div className='flex m-10 flex-wrap w-full gap-20 items-center justify-center'>
      <div className='flex flex-col gap-10  items-center '>
        <div> Navigate via button</div>
        <div className='flex w-full items-center justify-center gap-4'>
          <button onClick={handlePrev}>{`<<`}</button>
          <img
            key={currIndex}
            src={data[currIndex]}
            className='min-h-[230px]'
            width='200px'
            alt='carousel-img'
          />

          <button onClick={handleNext}>{`>>`}</button>
        </div>
      </div>

      <div className='flex flex-col gap-10  items-center '>
        <div> Navigate via button - 3 photos at a time</div>
        <div className='flex w-full items-center justify-center gap-4'>
          <button onClick={handlePrev}>{`<<`}</button>
          <img
            src={data[(currIndex + data.length - 1) % data.length]}
            className='min-h-[230px]'
            width='200px'
            alt='carousel-img'
          />
          <img
            src={data[currIndex]}
            className='min-h-[230px]'
            width='200px'
            alt='carousel-img'
          />
          <img
            src={data[(currIndex + data.length + 1) % data.length]}
            className='min-h-[230px]'
            width='200px'
            alt='carousel-img'
          />

          <button onClick={handleNext}>{`>>`}</button>
        </div>
      </div>

      <div className='flex flex-col gap-10  items-center '>
        <div> auto rotation</div>
        <div className='flex w-full items-center justify-center gap-4'>
          <button onClick={handleImgPrev}>{`<<`}</button>
          <img
            key={currImg}
            src={data[currImg]}
            className='min-h-[230px]'
            width='200px'
            alt='carousel-img'
          />

          <button onClick={handleImgNext}>{`>>`}</button>
        </div>
      </div>

      <div className='flex flex-col gap-10  items-center '>
        <div> auto rotation - 3 photos at a time</div>
        <div className='flex w-full items-center justify-center gap-4'>
          {/* <button onClick={handleImgPrev}>{`<<`}</button> */}
          <img
            src={data[(currImg + data.length - 1) % data.length]}
            className='min-h-[230px]'
            width='200px'
            alt='carousel-img'
          />
          <img
            src={data[currImg]}
            className='min-h-[230px]'
            width='200px'
            alt='carousel-img'
          />
          <img
            src={data[(currImg + data.length + 1) % data.length]}
            className='min-h-[230px]'
            width='200px'
            alt='carousel-img'
          />

          {/* <button onClick={handleImgNext}>{`>>`}</button> */}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
