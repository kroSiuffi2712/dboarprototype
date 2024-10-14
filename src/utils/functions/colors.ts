export const getRandomColor = (index: number) => {
  const randomFactor = (Math.random() * 255 + index) % 255;
  const red = Math.floor((200 + randomFactor) / 2);
  const green = Math.floor((200 + randomFactor) / 2);
  const blue = Math.floor((255 + randomFactor) / 2);

  return `rgb(${red}, ${green}, ${blue})`;
};
