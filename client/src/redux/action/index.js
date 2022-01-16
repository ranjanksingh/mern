export function increment() {
    return {
       type: 'INCREMENT',
       payload: 1
    }
 }
 export function decrement() {
    return {
       type: 'DECREMENT',
       payload : 1
    }
 }
 export function reset() {
    return { 
       type: 'RESET',
       payload: 0 
   }
 }

export function changeMood(data) {
   return { type: 'CHANGE_MOOD', payload: data }
}
export function resetMood() {
   return { type: 'RESET_MOOD', payload: {} }
}