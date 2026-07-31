
const InputBox = ({setName}) => {
  return (
     

    <div>

        <input type="text"  onChange={(e)=>  setName(e.target.value)} />
      
    </div>
  )
}

export default InputBox
