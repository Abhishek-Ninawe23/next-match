'use client'
import { Spinner } from "@heroui/react"

const Loading = () => {
    return (
        <div className="flex justify-center items-center vertical-center">
            <Spinner label="loading..." color="secondary"
                labelColor="secondary"
            />
        </div>
    )
}
export default Loading