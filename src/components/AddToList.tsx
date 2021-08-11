import { useState } from "react"
import { IState as Props } from '../App'

interface IProps {
  people: Props['people']
  setPeople: React.Dispatch<React.SetStateAction<IProps['people']>>
}

const AddToList:React.FC<IProps> = ({people, setPeople}) => {
    const [input, setInput] = useState({
        name:"",
        age: "",
        img: "",
        note: "",
    })
    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ):void => {
        setInput({
          ...input,
          [e.target.name]: e.target.value
        })
    }

    const handleClick = () => {
        if(!input.name && !input.img && !input.age)
        {
            return
        }
      setPeople([
          ...people,{
              name:input.name,
              age:parseInt(input.age),
              url:input.img,
              note:input.note,
          }
      ])
      setInput({
        name: '',
        age: '',
        img: '',
        note: '',
      })
    }

    return (
      <div className='AddToList'>
        <input
          type='text'
          onChange={handleChange}
          className='AddToList-input'
          name='name'
          value={input.name}
          placeholder='Name'
        />
        <input
          type='number'
          onChange={handleChange}
          className='AddToList-input'
          name='age'
          value={input.age}
          placeholder='Age'
        />
        <input
          type='text'
          onChange={handleChange}
          className='AddToList-input'
          name='img'
          value={input.img}
          placeholder='Image Url'
        />
        <textarea
          onChange={handleChange}
          className='AddToList-input'
          name='note'
          value={input.note}
          placeholder='Note'
        />
        <button onClick={handleClick} className='AddToList-btn'>
          Add to List
        </button>
      </div>
    )
}

export default AddToList
