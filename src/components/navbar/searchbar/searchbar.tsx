import { ChangeEvent, useState } from "react"
import { GoSearch } from 'react-icons/go'


export const SearchBar = () => {

    const [textInput, setTextInput] = useState("")


    const onTextInput = (e: ChangeEvent<HTMLInputElement>) => {
        setTextInput(e.target.value)
        // console.log("onTextInput():", textInput)
    }

    const onSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // console.log("onSearchSubmit():", textInput)
        setTextInput("")
    }


    return (
        <article className="flex items-center justify-center bg-green-400">
            <form onSubmit={onSearchSubmit} className="flex">
                <input
                    type="text"
                    value={textInput}
                    onChange={onTextInput}
                    maxLength={50}
                    className="bg-gray-200 rounded-full text-xl mr-2 px-4 w-96"
                />
                <button className="bg-blue-900 text-gray-300 px-3 py-3 rounded-full">
                    <GoSearch size={20} />
                </button>
            </form>
        </article>
    )
}
