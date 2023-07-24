import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        router.push("/shop")
    }, [router])
}

export default NotFound;