// randomize the answers order
export const shuffleArray = (array: any[]) => [...array].sort(() => Math.random() - 0.5);