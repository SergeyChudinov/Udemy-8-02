export const dec = () => ({type: 'DEC'}) 
export const inc = () => ({type: 'INC'})  //action creater
export const rnd = (value) => ({type: 'RND', payload: Math.floor(Math.random() * 10) + 1}) 