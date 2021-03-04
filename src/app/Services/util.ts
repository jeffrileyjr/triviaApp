export const shuffleArray = (array: any[]) =>
[...array].sort(() => Math.random() - 0.5);

export const getRndInteger = (min: number, max: number) =>  {
    return Math.floor(Math.random() * (max - min)) + min;
  }