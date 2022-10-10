export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'


export const actionIncrease = () => {
    return{
       type:INCREMENT
    }
}


//action async

export function actionIncreaseAsync() {
    return (dispatch) => {
      try {
        dispatch(actionIncrease())
        
      } catch(err) {
        // TODO 
      }
    }
  }

