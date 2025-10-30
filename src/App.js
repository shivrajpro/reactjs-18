import { useEffect, useState } from "react"
import useDebounce from "./hooks/useDebounce";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedQuery = useDebounce(searchTerm, 2000);

  useEffect(() => {
    console.log('debouncedQuery', debouncedQuery)
  }, [debouncedQuery])

  return <div>
    <p>React 18 Works</p>
    <input placeholder="Enter some text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
  </div>
}