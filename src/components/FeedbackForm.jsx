import React,{useState, useContext, useEffect} from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

    
    const [text, setText] = useState('')
    const [rating,setRating] =useState(10)
    const [btnDisable, setBtnDisable] = useState(true)
    const [msg, setMsg] = useState('')

    useEffect(()=>{
       if(feedbackEdit.edit === true){
           setBtnDisable(false)
           setText(feedbackEdit.item.text)
           setRating(feedbackEdit.item.rating)
       }
    },[feedbackEdit])

    const handleTextChange = (e) => {
       if(text=== ''){
           setBtnDisable(true)
           setMsg(null)
       }else if(text !== '' && text.trim().length<=10){
           setBtnDisable(true)
           setMsg('Text must be at least 10 characters')  
       }
       else{
           setMsg(null)
           setBtnDisable(false)
       }
       setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length>10){
            const newFeedback = {
                text,
                rating
            }
            if(feedbackEdit.edit===true){
                updateFeedback(feedbackEdit.item.id,newFeedback)
            }else{
                addFeedback(newFeedback);
            }
            

            setText('')
        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>Hoe would you rate your service with us</h2>
                <RatingSelect select={(rating)=> setRating(rating)}/>
                <div className='input-group'>
                    <input onChange={handleTextChange} type="text" placeholder='Write a review' value={text} />
                    <Button type="submit" isDisabled={btnDisable}  >Send</Button>
                </div>
                {msg && <div className='message'>{msg}</div>}
            </form>
        </Card>
    )
}

export default FeedbackForm
