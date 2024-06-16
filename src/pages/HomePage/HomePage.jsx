import { useSearchParams } from "react-router-dom"

const HomePage = () => {

  const [params, setParams] = useSearchParams()
  console.log('params', params.get('search'))
  return (
    <div>
      <label htmlFor="search">Search by film... </label>
      <input type="text" id="search"/>
    </div>
  )
}

export default HomePage